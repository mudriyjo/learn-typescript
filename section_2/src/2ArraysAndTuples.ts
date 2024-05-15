export {}

const duties: string[] = ['write code']

duties.push('fix bugs')
duties.map((el) => {
    console.log(el.toUpperCase())
})

let employee: [string, number] = ["Alex", 30] // Tuple emulation, array of 2 elements
employee = ["5", 4]
employee.push("test") // available in TS
console.log(employee)