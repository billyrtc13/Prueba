function load () {
    const ua = document.getElementById('ua')

    // acá se puede cargar data desde el back
    let i = 0
    while (i < 20) {
        i++
        const el = document.createElement('div')
        const tp = document.createElement('section') // iria imagen
        const span = document.createElement('span')
        const p = document.createElement('p')
        tp.className = 'tp'
        span.innerHTML = 'Lorem Ipsum'
        p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
        el.appendChild(tp)
        el.appendChild(span)
        el.appendChild(p)
        ua.appendChild(el)
    }

    const departamento = document.getElementById('departamento')
    const dptos = Object.keys(dptosLocs)
    let option = document.createElement('option')
    option.value = ''
    option.innerHTML = ''
    departamento.appendChild(option)

    dptos.forEach(dp => {
        option = document.createElement('option')
        option.value = dp
        option.innerHTML = dp
        departamento.appendChild(option)
    })

    $('.sld').slick();
}
