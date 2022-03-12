export default (name) => {
    console.log(`Hello ${name}`);
}

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const text = "Text";
const user = {
    name: "Qara",
    surname: "Humbatov"
};

const employees = [
    {
        name: "Nurlan",
        surname: "Ramazanov"
    },
    {
        name: "Ulvi",
        surname: "Rafibayli"
    }
]

export {hello, sum, diff, text, user, employees};