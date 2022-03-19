// Set Time Out
/* 
setTimeout(() => {
    console.log("Hello");
}, 5000);



// Set Interval
setInterval(() => {
    console.log("Repeat Hello");
}, 1000);
*/



// Callback
/*
const sayHello = (callback) => {
    callback()
}

sayHello(() => {
    console.log("Hello Callback");
})
*/



// Fetch
// import fetch from "node-fetch";
import axios from "axios";



// Fetch Hell
/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users Yuklendi!", users);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((post) => {
                console.log("Post 1 Yuklendi!", post);

                fetch("https://jsonplaceholder.typicode.com/posts/2")
                    .then((data) => data.json())
                    .then((data) => {
                        console.log("Post 2 Yuklendi!", data);
                    })
            })
    }) 
*/



// Fetch Hell -> Async/await
/*
async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/post/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/post/2")
    ).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
}

getData();
*/



// Anonym Function -> Fetch Library -> Axios Library
/*
(async () => {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/post/1");

    const {data: post2} = await axios("https://jsonplaceholder.typicode.com/post/2");

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})();
*/



// Promise
/*
const getComments = () => {
    return new Promise((resolve, reject) => {
        resolve("Comments");
    })
}

getComments()
    .then((data) => console.log(data))
    .catch(e => console.log(e))
*/

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {
            data
        } = await axios("https://jsonplaceholder.typicode.com/users")
        resolve(data)
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {
            data
        } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)
        resolve(data)
    })
}

/*
getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e))

getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
*/

(async () => {
    /* await getUsers()
        .then((data) => console.log(data))
        .catch((e) => console.log(e)) */

    /* await getPost(1)
        .then((data) => console.log(data))
        .catch((e) => console.log(e)) */

    try {
        const users = await getUsers();
        const post1 = await getPost(1);

        console.log(users);
        console.log(post1);
    } catch (e) {
        console.log(e);
    }
})();