function recurseTree(
    node: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!node) {
        return path;
    }

    recurseTree(node.left, path);

    recurseTree(node.right, path);

    path.push(node.value);

    // if (!node.left && !node.right) {
    //     path.pop();
    // }

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return recurseTree(head, []);
}
