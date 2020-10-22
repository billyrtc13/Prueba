function validar (ev) {
    ev.preventDefault();

    const campos = {
        nombre: document.getElementById('nombre'),
        apellido: document.getElementById('apellido'),
        email: document.getElementById('email'),
        departamento: document.getElementById('departamento'),
        localidad: document.getElementById('localidad'),
        ci: document.getElementById('ci'),
        check: document.getElementById('check')
    }

    const claves = Object.keys(campos)
    claves.forEach(clave => {
        const errorClave = document.getElementById(`error${clave}`)
        errorClave.innerHTML = ''
        campos[clave].setAttribute('disabled','disabled')
        if (clave !== 'check') {
            const lb = document.getElementById(`lb${clave}`)
            lb.removeAttribute('style')
        }
    })

    const valores = claves.map(clave => {
        return {
            campo: clave,
            valor: campos[clave].value
        }
    })

    console.log(valores)

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let pasa = true
    valores.forEach(({campo, valor}) => {
        let error = null
        if (!valor || valor === '')
            {error = `${campo} vacío`}
        else if (campo === 'email')
            {if (!re.test(valor)) error = 'Formato de email incorrecto'}
        else if (campo === 'ci')
            {if (!validarCedula(valor)) error = 'C.I. incorrecta'}
        else if (campo === 'check')
            {if (valor === 'false') error = 'Debe aceptar los términos y condiciones'}
        else if (campo === 'nombre' || campo === 'apellido')
            {if (valor.length < 2) error = `${campo} incorrecto`}

        if (error) {
            const errorTexto = document.getElementById(`error${campo}`)
            errorTexto.innerHTML = error
            campos[campo].removeAttribute('disabled')
            if (campo !== 'check') {
                const lb = document.getElementById(`lb${campo}`)
                lb.setAttribute('style', 'border-color: red')
            }
            pasa = false
        }
    })

    if (pasa) {
        alert(`Gracias ${valores.filter(({campo}) => {
            return campo === 'nombre'
        }).map(({valor}) => {
            return valor
        }).join(', ')} por enviarnos este formulario`)
    }

}
