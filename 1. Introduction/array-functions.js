const users = ["Qara", "Ulvi", "Nurlan"];

const employees = [{
        name: "Qara",
        surname: "Humbatov",
        salary: 150
    },
    {
        name: "Ulvi",
        surname: "Rafibayli",
        salary: 300
    },
    {
        name: "Nurlan",
        surname: "Ramazanov",
        salary: 600
    }
]

/*
    - push
    - map
    - find
    - filter
    - some
    - every
    - includes
*/

/* push */
users.push("Tebriz");
console.log(users);

/* map = for loop */
users.map((user) => {
    console.log(user);
})

employees.map((employee) => {
    console.log(employee.surname);
})

/* find - return first element */
const findPerson = employees.find((employee) => employee.name === "Nurlan" && employee.salary > 160);
console.log(findPerson);

/* filter - all element */
const filterPerson = employees.filter(({
    name,
    salary
}) => name === "Qara" && salary < 160);
console.log(filterPerson);

/* some - boolen value - bir elementin şərti ödəməsi kifayətdir */
const some = employees.some((employee) => employee.salary === 600);
console.log(some);

/* every - bütün elemntlərin şərtə uyğun olması */
const every = employees.every((employee) => employee.salary > 160);
console.log(every);

/* includes */
const fruits = ["Apple", "Banana", "Orange"];

const isIncluded = fruits.includes("banana");

console.log(isIncluded);