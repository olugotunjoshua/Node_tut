const os = require('os');

const user = os.userInfo()
console.log(user);

console.log(`the system uptime is ${os.homedir()} seconds`);

console.log(os.release());
// some methods
/*
os.release()
os.totalmem()
os.freemem()
os.uptime()
os.userInfo()
os.homedir()
*/

