import fs from 'fs';

// const employees = [{
//     "name": "Raj Bghel",
//     "designation": "Software Developer",
//     "employeeId": 1,
//     "department": "technology"
// }]


function readEmploy() {
    const allEmployees = fs.readFileSync('./employees.json',{
        encoding: 'utf-8'
    });
    return JSON.parse(allEmployees);
}

export function getEmployee() {
    const checkEmployee = readEmploy();
    return checkEmployee;
}