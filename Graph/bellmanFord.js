function bellmanFord(adjList, src) {
  const shortestDistance = Array(adjList.length).fill(Infinity);

  shortestDistance[src] = 0;

  for (let i = 0; i < adjList.length - 1; i++) {
    for (let edge of edges) {
      const [s, d, w] = edge;

      if (shortestDistance[s] + w < shortestDistance[d]) {
        shortestDistance[d] = shortestDistance[s] + w;
      }
    }
  }

  return shortestDistance;
}

(edges = [
  [0, 1, 5],
  [1, 2, 1],
  [1, 3, 2],
  [2, 4, 1],
  [4, 3, -1],
]),
  (src = 0);

console.log(bellmanFord(edges, src));
