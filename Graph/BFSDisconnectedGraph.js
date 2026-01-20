
function BFS(adjList) {
    const result = []
    const visited = Array(adjList.length).fill(0)
   

    for(let i = 0; i< adjList.length; i++) {
        if(!visited[i]) {
            traverse(i)
        }
    }


    function traverse(vertex) {
        const queue = [vertex]
        visited[vertex] = 1;
        let head = 0
        while(queue.length > head) {
            const vertices = queue[head++]
            result.push(vertices);
            for(const x of adjList[vertices]) {
                if(!visited[x]) {
                    visited[x] = 1
                    queue.push(x)
                }
            }
        }
        
    }

    return result
}


adj = [[1, 2], [0, 2, 4], [0, 1], [], [2]]

console.log(BFS(adj))