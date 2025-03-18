// 2606.js
const fs = require("fs")
const [n, c, ...T] = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
const N = parseInt(n)
const C = parseInt(c)


let graph = []
for (let i=0; i<n; i++) {
  graph.push([])
}


for (node of T) {
  let a = node.split(' ')[0] - 1 
  let b = node.split(' ')[1] - 1

  graph[a].push(b)
  graph[b].push(a)
}

const DFS = (graph, start) => {
  const visited = []
  let notVisited = []

  notVisited.push(start)

  while (notVisited.length !== 0) {
    const node = notVisited.pop()

    if (!visited.includes(node)) {
      visited.push(node)
      notVisited = [...graph[node], ...notVisited]
    }
  }

  return visited
};

console.log(DFS(graph, 0).length - 1)