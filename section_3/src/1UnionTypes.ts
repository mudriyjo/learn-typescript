type Programmer = "Programmer"
type HR = "HR"

const bestProgrammer: Programmer = "Programmer" // "Programmers" will show error

type PositionType = Programmer | HR

type Position =
    | "Programmer"
    | "CEO"
    | "HR"

function getSalaryForPosition(position: Position): number | undefined {
    if(position === "Programmer") {
        return 100000 // "100000" will show error
    }
    if (position === "CEO") {
        return 200000
    }
    console.warn(`We don't have salary for position: ${position}`)
}