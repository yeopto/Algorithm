function solution(n, vertex) {
  let graph = Array.from(Array(n + 1), () => []);
  for (let i = 0; i < vertex.length; i++) {
      let [a, b] = vertex[i];
      graph[a].push(b);
      graph[b].push(a);
  }
  
  let visited = Array(n + 1).fill(0);
  visited[1] = 1;
  
  let q = [1];
  while (q.length > 0) {
      let v = q.shift();
      for (const n of graph[v]) {
          if (visited[n] === 0) {
              q.push(n);
              visited[n] = visited[v] + 1;
          }
      }
  }
  const max = Math.max(...visited);
  
  return max
}