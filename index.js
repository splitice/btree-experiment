let start
const { BTree } = require('node-btree')


function comparator(a, b) {
    return a - b
  }

start = new Date()
const map = new Map()
for(let i=0;i<100000;i++){
    map.set(i, Math.random())
}
console.log("map set ", new Date - start)



start = new Date()
const tree = new BTree(comparator)
for(let i=0;i<100000;i++){
    tree.set(i, Math.random())
}
console.log("tree set ", new Date - start)


start = new Date()
for(let i=0;i<100000;i++){
    map.get(i)
}
console.log("map find ", new Date - start)


start = new Date()
for(let i=0;i<100000;i++){
    tree.get(i)
}
console.log("tree find ", new Date - start)