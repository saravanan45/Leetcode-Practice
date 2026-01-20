function DFS(adjList) {
    const visited = Array(adjList.length).fill(0)
    const recStack = Array(adjList.length).fill(0)

    for(let i = 0; i< adjList.length; i++) {
        if(!visited[i]) {
            if(DFSTraverse(i)) {
                return true
            }
        }
    }

    function DFSTraverse(node) {
        visited[node] = 1
        recStack[node] = 1

        for(const neighbor of adjList[node]) {
            if(!visited[neighbor]) {
                if(DFSTraverse(neighbor)) {
                    return true
                }
            } else if(recStack[neighbor] === 1) {
                    return true;
            } 

        }
        recStack[node] = 0;
        return false;

    }
    return false
}



// adj = [[1], [2], [0, 3], []]

adj = [[2], [0], []]


console.log(DFS(adj))

