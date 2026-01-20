function DFS(adjList) {
  const result = [];
  const visited = Array(adjList.length).fill(0);

  function DFSRecursive(list, src, visited, result) {
    
    result.push(src);
    visited[src] = 1;
    
    for (const x of list[src]) {
      if (!visited[x]) {
        DFSRecursive(list, x, visited, result);
      }
    }
  }

  DFSRecursive(adjList, 0, visited, result);

  return result;
}

adj = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];

console.log(DFS(adj));
