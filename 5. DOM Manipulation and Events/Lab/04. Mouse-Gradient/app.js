function attachGradientEvents() {
    const output = document.getElementById('result');
    const box = document.getElementById('gradient');
    box.addEventListener('mousemove', onMove);

    function onMove(e) {
        const offset = Math.floor(e.offsetX / box.clientWidth * 100) + '%';
        output.textContent = offset;
    }
}