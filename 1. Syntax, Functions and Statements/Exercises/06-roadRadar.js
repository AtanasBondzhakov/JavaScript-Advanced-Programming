function roadRadar(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed > limits[area]) {
        let overSpeed = speed - limits[area];
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limits[area]} - ${logSpeeding(overSpeed)}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    }

    function logSpeeding(overSpeed) {
        if (overSpeed <= 20) {
            return 'speeding';
        } else if (overSpeed <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}