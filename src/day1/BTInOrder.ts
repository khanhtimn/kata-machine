function recurseTree(
    node: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!node) {
        return path;
    }

    recurseTree(node.left, path);

    path.push(node.value);

    recurseTree(node.right, path);

    return path;
}

export default function in_order_search(
    head: BinaryNode<number> | null,
): number[] {
    return recurseTree(head, []);
}
