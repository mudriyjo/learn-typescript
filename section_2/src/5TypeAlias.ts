type Position = "HR" | "Programmer"

const myPosition: Position = "Programmer"

type Colleague = {
    name: string
    age: number
    position: Position
    greetBack?: Function
}

const myCollague: Colleague = {
    name: "Alex",
    age: 30,
    position: "Programmer"
}

const otherColleague: {
    name: string
    age: number
    position: Position
    isAdmin: boolean
} = {
    name: "John",
    age: 36,
    position: "HR",
    isAdmin: true
}

const myTalkyColleague: Colleague = {
    name: "Betty",
    age: 20,
    position: "Programmer",
    greetBack: () => {console.log("Cheers...")}
}

function greetColleague(colleague: Colleague) {
    console.log("Hello," + colleague.name)
    if(colleague.greetBack) {
        colleague.greetBack()
    }
}

greetColleague(myCollague)
greetColleague(otherColleague)
greetColleague(myTalkyColleague)