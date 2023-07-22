// module.exports.items = ['fruits','Veges']
// const person = {
//     name: 'blade',
//     place: "bangalore"
// }
// module.exports = person.place;

// npm init(Step by step )
// npm init -y (everythin default)

// const _= require('lodash');

// const items = [1, [2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('hello people');


// const http = require('http');

// const server= http.createServer((req,res)=>{
// if(req.url === '/'){
//     res.end('Home Page');
// }

// if(req.url === '/about'){
// //Blocking Code
// for(let i = 0; i<20; i++){
//     for(let j = 0; j<10; j++){
//         console.log(`${i},${j}`);
//     }
// }
//     res.end('About page');
// }
// res.end('Error page')
// })


// server.listen(5000, ()=>{
//     console.log('Server is listening at port: 5000');
// })



const { readFile } = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(`Error:${err}`)
            } else {
                resolve(data);
            }
        })
    })
}

const start = async () => {
    try {
        const first = await getText('./content/subfolder/test.txt')
        const second = await getText('./content/subfolder/text2.txt')
        console.log(first, second);
    } catch (error) {
        console.log(err)
    }

}

start();
// getText('./content/result-sync.txt')
// .then(data=> console.log(data))
// .catch(err=>console.log(err));