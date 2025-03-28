function solution(begin, target, words) {
    var answer = 0;
    let wordLen = words[0].length
    let graph = Array.from({ length: words.length + 1 }, () => [])
    words.unshift(begin)    // 시작 단어 return
      
    for (let i=0; i<words.length; i++) {    // 서로 연관된 단어들 그래프 만들기
        for (let j=i+1; j<words.length; j++) {
            let match = 0
            for (let k=0; k<wordLen; k++) {
                if (words[i][k] === words[j][k]) {
                    match++
                }
            }
            if (match === wordLen - 1) {
                graph[i].push(j)
                graph[j].push(i)
            }
        }
    }
    
    const BFS = (graph, start) => {
        const visited = new Set()
        let notVisited = [start]
        let level = 0

        while (notVisited.length > 0) {
            const size = notVisited.length
            
            for (let i=0; i<size; i++) {
                const node = notVisited.shift()
                
                if (words[node] === target) {  // 마지막단어 만나면 반환
                    return level
                }
                
                visited.add(node)
                for (let item of graph[node]) {
                    if (!visited.has(item)) {
                        notVisited.push(item)
                    }
                }
            }
           level++
        }

        return 0
    };
    

    return BFS(graph, 0);
}