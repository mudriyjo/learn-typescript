export {Employee, createEmployee}
import {randomBytes} from "crypto"

/**
 * Practices types by creating a simple app
 * An employee manager app
 * @Requrements
 * - Create an Employee type
 * - Create Employee with a function that asignees random ids
 * - Send all employees an email (write to console)
 * 
 * Steps:
 * + 1. node project init
 * + 2. type install
 * + 3. create and run files
 * + 4. generate d.ts files
 */
type Employee = {
    name: string
    id: string
    email: string
    salary: number
}

function generateRandomId(): string {
    return randomBytes(10).toString("hex")
}

function createEmployee(name: string, salary: number): Employee {
    return {
        name: name,
        id: generateRandomId(),
        email: `${name}@testCompany.com`,
        salary: salary
    }
}
function sendEmail(employee: Employee) {
    console.log(`
    Greetings in your new job, ${employee.name}!
    Your corporate email is: ${employee.email}
    Your salary is: ${employee.salary}
    `)
}

let employees = [createEmployee("Alex", 200000), createEmployee("John", 300000)]

employees.forEach(employe => {
    sendEmail(employe)
})