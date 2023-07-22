// module.exports.items = ['fruits','Veges']
// const person = {
//     name: 'blade',
//     place: "bangalore"
// }
// module.exports = person.place;

// npm init(Step by step )
// npm init -y (everythin default)

const _= require('lodash');

const items = [i, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

