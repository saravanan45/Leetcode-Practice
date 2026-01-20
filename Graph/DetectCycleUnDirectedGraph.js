
function DFS(adjList) {
    const visited = Array(adjList.length).fill(false);

    for(let i = 0; i<adjList.length; i++) {
        if(!visited[i]) {
            if(DFSRecursive(i, -1)) {
                return true
            }
        }
    }

    function DFSRecursive(node, parent) {
        visited[node] = true

        for(let j = 0; j < adjList[node].length; j++) {
            const neighbor = adjList[node][j]

            if(!visited[neighbor]) {
                if(DFSRecursive(neighbor, node)) {
                    return true
                };
            } else if(parent !== neighbor) {
                return true
            }
        }
         return false
    }
    return false
}


adj= [[1, 2], [0, 2], [0, 1, 3], [2]]

console.log(DFS(adj))