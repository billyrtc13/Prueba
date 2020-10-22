function getLoc () {
    const el = document.getElementById('departamento')
    const departamento = el.value

    const lo = document.getElementById('localidad')
    lo.innerHTML = ''

    if (dptosLocs[departamento]) dptosLocs[departamento].forEach(loc => {
        const option = document.createElement('option')
        option.value = loc
        option.innerHTML = loc
        lo.appendChild(option)
    })

    uptxt('txtlocalidad')
}
