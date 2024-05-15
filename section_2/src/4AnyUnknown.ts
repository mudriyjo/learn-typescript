export {}

let query: any = 5
query = '5'
query = [5]

function getSalaryFromExternalService(employeeId: number): unknown {
    return JSON.parse("5")
}

let salary = getSalaryFromExternalService(123)

if (typeof salary === "number") { // type narrowing
    salary++
}
if (typeof salary === "string") { // type narrowing
    salary.toLowerCase()
}

if (typeof salary === "number" || typeof salary === "string") { // type narrowing
    salary.valueOf()
}

if (salary &&
    typeof salary === "object" &&
    'history' in salary &&
    Array.isArray(salary.history)
) { // type narrowing
    salary.history.push(10)
}

console.log(salary)