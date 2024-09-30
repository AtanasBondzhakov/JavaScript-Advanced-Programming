function calcArea() {
    return Math.abs(this.x * this.y);
};

function calcVol() {
    return Math.abs(this.x * this.y * this.z);
};

function areaAndVolumeCalculator(area, vol, input) {
    const data = JSON.parse(input);
    const result = data.map(x => ({
        area: area.call(x),
        volume: vol.call(x)
    }));

    console.log(result);
};