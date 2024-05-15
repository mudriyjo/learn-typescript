type Name = {name: string}

function print(arg: Name) {
    console.log(arg.name)
}

print({name: "John"})