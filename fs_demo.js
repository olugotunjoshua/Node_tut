// synchronous method
// const {readFileSync, writeFileSync} = require('fs');


// const first = readFileSync('./content/subfolder/test.txt', 'utf8');
// const second = readFileSync('./content/subfolder/text2.txt', 'utf8');

// // console.log(first,second);

// writeFileSync('./content/result-sync.txt',`hello world  `,{flag: 'a'});

// Asynchronous Method

const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(`An error occured: ${err}`)
        return
    }
    const first = result
    readFile('./content/subfolder/text2.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(`An error occured: ${err}`)
            return
        }
        const second = result;
        writeFile('./content/result-sync.txt',
            `Here is the Result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(`An error occured: ${err}`)
                    return
                }
                console.log('Done with the task');

            })

    })

})
console.log('starting the next task');
