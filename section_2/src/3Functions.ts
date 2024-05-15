function greetToUpperCase(name: string) {
    return ("Hello," + name.toUpperCase)
}

function consoleGreetJohn(name: string = "John") {
    console.log("Hi," + name)
}

consoleGreetJohn()
consoleGreetJohn("Bil")

const greetToConsole = (name: string) => {
    console.log("Hi," + name)
}

function multiplyGreetings(...names: string[]) {
    names.forEach(name => {
        greetToConsole(name)
    })
}

multiplyGreetings("Alex")
multiplyGreetings("Alex", "John")
multiplyGreetings("Alex", "John", "Bil")