const args = process.argv;
console.log(args)


// process.arg[0] = node path
// process.arg[1] = file path
// process.arg[2] = first actual argument


const name = args[2] || "guest";
const time = new Date().getHours()

let greeting;

if (time >= 0 && time < 5) {
    greeting = "Good Night";
}
else if (time < 12) {
    greeting = "Good Morning"
} else if (time < 18) {
    greeting = "Good Afternoon"
} else {
    greeting = "Good evening"
}

console.log(`${greeting} ${name}`);