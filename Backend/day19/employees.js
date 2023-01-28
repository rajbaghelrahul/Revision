import fs from 'fs';

const employees = [{
    "name": "Raj Baghel",
    "designation": "Software Developer",
    "employeeId": 1,
    "department": "technology"
},
{
    "name": "Rahul Baghel",
    "designation": "Software Developer2",
    "employeeId": 2,
    "department": "technology2"
}]

function writeAllEmployees(employees) {
    const data = JSON.stringify(employees, null, 2);

    fs.writeFileSync('./employees.json', data, {
        encoding: 'utf-8'
    })
}


export function addEmployee(data) {

    const employees = readEmploy();
    let maxAvailableId = 0;
    
    for (const employee of employees) {
        if(maxAvailableId < employee.employeeId) {
            maxAvailableId = employee.employeeId;
        }
    }
    let {
        name,
        designation,
        department
    } = data;

    let employee = {
        name, designation, department, employeeId: maxAvailableId+1
    };

    employees.push(employee);
    writeAllEmployees(employees);
    return employee;
}


function readEmploy() {
    const allEmployees = fs.readFileSync('./employees.json',{
        encoding: 'utf-8'
    });
    return JSON.parse(allEmployees);
}

export function getAllEmployee() {
    const checkEmployee = readEmploy();
    // const oneEmployee = checkEmployee.find(checkEmployee => checkEmployee.employeeId === id);
    return checkEmployee;
}
export function getEmployee(id) {
    const checkEmployee = readEmploy();  // why data not taken from readEmploy
    const oneEmployee = employees.find(oneEmployee => oneEmployee.employeeId === id);
    return oneEmployee;
}