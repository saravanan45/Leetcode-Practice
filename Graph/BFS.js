
// not optimal becoz of queue.shift()


// function BFS(adjList) {
//     if(!adjList.length) return ;

//     const visited = Array(adjList.length).fill(0)
//     const result = []
//     const start = 0
//     const queue = [start];
//     visited[start] = 1;

//     while(queue.length > 0) {
//         const vertices = queue.shift()
//         result.push(vertices)

//         for(const adj of adjList[vertices]) {
//             if(visited[adj] === 0) {
//                 visited[adj] = 1;
//                 queue.push(adj)
//             }
//         }
//     }
//     return result
// }


// optimal way would be pointer based or dequeue
// pointer based

 function BFS(adjList) {
    if(!adjList.length) return ;

    const visited = Array(adjList.length).fill(0)
    const result = []
    let start = 0
    const queue = [start];
    visited[start] = 1;

    while(start < queue.length ) {
        const vertices = queue[start++]
        result.push(vertices)

        for(const adj of adjList[vertices]) {
            if(visited[adj] === 0) {
                visited[adj] = 1;
                queue.push(adj)
            }
        }
    }
    return result
}

adj = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]

// output:  [0, 1, 2, 3, 4]


console.log(BFS(adj))
