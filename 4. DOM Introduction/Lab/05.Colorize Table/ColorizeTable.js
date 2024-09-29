function colorize() {
    const rows = Array.from(document.querySelectorAll('tr'));

    rows.forEach((row, i) => {
        i % 2 !== 0 ? row.style.backgroundColor = 'Teal' : null
    })
}