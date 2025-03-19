// 4779.js

const fs = require("fs")
const N = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let n = 0; n < N.length; n++) {
  let ans = '-'
  
  for (let i=0; i<N[n]; i++) {
    let len = ans.length
    ans += ' '.repeat(len) + ans
  }
  
  console.log(ans)
}
