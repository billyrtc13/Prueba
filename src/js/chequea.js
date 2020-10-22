function chequea (ev) {
    ev.preventDefault();
    const el = document.getElementById('check')

    if (el.value === 'true' || el.value === true) {
        el.value = 'false'
        el.className = 'checkoff'
    }
    else {
        el.value = 'true'
        el.className = 'checkon'
    }
}
