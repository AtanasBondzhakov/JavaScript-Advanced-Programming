function filterEmployees(data, criteria) {
    const parsedData = JSON.parse(data);
    const [crit, info] = criteria.split('-');

    if (crit === 'all') {
        printResult(parsedData);
        return;
    };

    const resultPersons = parsedData.filter(emp => emp[crit] === info);
    printResult(resultPersons);

    function printResult(arr) {
        const resultToPrint = [];
        arr.forEach((p, i) => {
            resultToPrint.push(`${i}. ${p.first_name} ${p.last_name} - ${p.email}`);
        });

        console.log(resultToPrint.join('\n'));
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'

)