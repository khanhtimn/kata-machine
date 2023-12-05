export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q: number[] = [source];
    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }
        for (let i = 0; i < graph.length; i++) {
            if (seen[curr] === true) {
                continue;
            }
            seen[curr] = true;
            prev[curr] = curr;
            q.push(curr);
        }
    } while (q.length);
    return q;
}
