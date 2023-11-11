// My implementation. Shit boilerplate

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

    return path;
}

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    const pathA = recurseTree(a, []);
    const pathB = recurseTree(b, []);

    if (pathA.length !== pathB.length) {
        return false;
    }

    for (let i = 0; i < pathA.length; i++) {
        if (pathA[i] === pathB[i]) {
            continue;
        } else {
            break;
        }
    }

    return true;
}

// Primeagen's Solution

// export default function compare(
//     a: BinaryNode<number> | null,
//     b: BinaryNode<number> | null,
// ): boolean {
//     if (a === null && b === null) {
//         return true;
//     }
//     if (a === null || b === null) {
//         return false;
//     }

//     if (a.value !== b.value) {
//         return false;
//     }
//     return compare(a.left, b.left) && compare(a.right, b.right);
// }
