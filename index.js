// const api = fetch('https://jsonplaceholder.typicode.com/todos');
// api.then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// }).then(data => {
//     const todos = data.slice(0,4).map(todo => ({
//         id: todo.id,
//         title: todo.title,
//         completed: todo.completed
//     }));
//     console.log(todos);
// }).catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
// });
// const users = [
//     { fistname: 'John', lastname: 'Doe', age: 40 },
//     { fistname: 'Jane', lastname: 'Doe', age: 25 },
//     { fistname: 'Jim', lastname: 'Beam', age: 35 },
//     { fistname: 'Jack', lastname: 'Daniels', age: 40 },
//     { fistname: 'Jill', lastname: 'Valentine', age: 25 },
// ]

// const countUser = users.reduce((acc, curr) => {
//     // console.log(acc, curr)
//     if (acc[curr.age]) {
//         acc[curr.age] += 1;
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc
// }, {});


const http = require('http');



// const server = http.createServer((req, res) => {
//     if (req.url === '/gamer') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         const gamers = [
//             [{ name: 'Player1', score: 100 }],
//             { name: 'Player2', score: 200 },
//             { name: 'Player3', score: 150 }
//         ];
//         res.end(JSON.stringify({data: gamers}));
//     } else if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1 style="padding: 10px; color: red; ">Welcome to the Game API</h1><p>Use /gamer to get gamer data.</p>');
//     }
// })
// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


