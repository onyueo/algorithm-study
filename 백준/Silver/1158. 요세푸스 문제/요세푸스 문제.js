const fs = require("fs")
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

let lst = Array(n).fill().map((v, i) => i+1)
let ans = []

while(ans.length < n) {
  for (let i=0; i<k-1; i++) {
    let shift = lst.shift()
    lst.push(shift)
  }
  let element = lst.shift()
  ans.push(element)
}

console.log(`<${ans.join(", ")}>`)
