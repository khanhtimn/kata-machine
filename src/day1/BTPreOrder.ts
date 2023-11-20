function recurseTree(
    node: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!node) {
        return path;
    }

    path.push(node.value);

    recurseTree(node.left, path);

    recurseTree(node.right, path);

    // if (!node.left && !node.right) {
    //     path.pop();
    // }

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return recurseTree(head, []);
}
