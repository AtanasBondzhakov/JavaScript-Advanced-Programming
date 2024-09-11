function dayOfWeek(day) {
    const weekdays = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    }

    if(weekdays.hasOwnProperty(day)) {
        return weekdays[day];
    }
    return 'error';
}