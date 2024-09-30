function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type=button]'));
    const inputs = Array.from(document.querySelectorAll('input[type=text]'));

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    buttons.forEach(btn => btn.addEventListener('click', convertHandler));

    function convertHandler(e) {
        let unit = e.target.parentElement.querySelector('input[type=text]').id;
        let input = Number(e.target.parentElement.querySelector('input[type=text]').value);

        let result = convert(input, unit);

        inputs.forEach(el => el.value = result[el.id]);
    }

    function convert(value, unit) {
        let inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        }
    }
}