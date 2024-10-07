class Company {
    constructor() {
        this.departments = {};
        this.aveSalaries = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }
        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let employee = {
            name,
            salary,
            position
        };

        if (!this.departments.hasOwnProperty(department)) {

            this.departments[department] = [];

            this.aveSalaries[department] = {
                totalEmployees: 0,
                totalSalaries: 0,
                averageSalary: 0
            };
        }

        this.departments[department].push(employee);
        this.aveSalaries[department].totalEmployees += 1;
        this.aveSalaries[department].totalSalaries += salary;

        this.aveSalaries[department].averageSalary =
            this.aveSalaries[department].totalSalaries /
            this.aveSalaries[department].totalEmployees;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let result = '';
        let bestDepartment = Object
            .entries(this.aveSalaries)
            .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
            .shift();

        result += `Best Department is: ${bestDepartment[0]}`;
        result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;

        this.departments[bestDepartment[0]]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        this.departments[bestDepartment[0]].forEach(user => {
            result += `\n${user.name} ${user.salary} ${user.position}`;
        });

        return result;
    }
}