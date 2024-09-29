function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       const input = document.querySelector('#inputs textarea').value;
       const restaurantOutput = document.querySelector('#outputs p');
       const workersOutput = document.querySelector('#workers p');

       inputText = JSON.parse(input)
       const restaurantsList = {};

       let bestAvgSalary = 0;
       let bestRestaurant = '';
       let bestSalary = 0;

       inputText.forEach(res => {
           const [restaurant, workersInfo] = res.split(' - ');
           if (!restaurantsList.hasOwnProperty(restaurant)) {
               restaurantsList[restaurant] = {};
           }

           const workers = workersInfo.split(', ');
           workers.forEach(w => {
               const [workerName, salary] = w.split(' ');
               restaurantsList[restaurant][workerName] = salary;
           })
       });

       const listEntries = Object.entries(restaurantsList);

       for (let [restaurantName, workers] of listEntries) {
           let avgSalary = 0;

           const workersValues = Object.values(workers);
           avgSalary = workersValues.reduce((acc, val) => acc + Number(val), 0) / workersValues.length;

           if (avgSalary > bestAvgSalary) {
               bestAvgSalary = avgSalary;
               bestRestaurant = restaurantName;
               bestSalary = workersValues.sort((a, b) => b - a)[0];
           }
       }

       const bestRestaurantEntries = Object.entries(restaurantsList[bestRestaurant]).sort((a, b) => b[1] - a[1]);
       bestRestaurantEntries.forEach(worker => {
           workersOutput.textContent += `Name: ${worker[0]} With Salary: ${worker[1]} `
       })

       restaurantOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${Number(bestSalary).toFixed(2)}`
   }
}