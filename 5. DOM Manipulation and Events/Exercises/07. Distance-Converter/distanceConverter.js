function attachEventsListeners() {
    const inputDistanceRef = document.querySelector('#inputDistance');
    const outputDistanceRef = document.querySelector('#outputDistance');
    const inputUnitsRef = document.querySelector('#inputUnits');
    const outputUnitsRef = document.querySelector('#outputUnits');

    const convertBtn = document.querySelector('#convert');
    convertBtn.addEventListener('click', onConvert);

    const units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function onConvert() {
        const meters = Number(inputDistanceRef.value) * units[inputUnitsRef.value];
        const result = meters / units[outputUnitsRef.value];
        outputDistanceRef.value = result;
    }
}