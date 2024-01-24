type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

function createNode<T>(value: T): Node<T> {
    return { value };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);

        // if node is not in cache
        if (node === undefined) {
            this.length++;
            node = createNode(value);
            this.prepend(node);
            this.trimCache();
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }
    }

    get(key: K): V | undefined {
        const node = this.lookup.get(key);
        if (node === undefined) {
            return undefined;
        }
        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private detach(node: Node<V>): void {
        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }
        if (node.prev !== undefined) {
            node.prev.next = node.next;
        }
        if (node.next !== undefined) {
            node.next.prev = node.prev;
        }

        node.prev = node.next = undefined;
    }

    private prepend(node: Node<V>): void {
        if (this.head === undefined) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>;
        this.detach(tail as Node<V>);

        //need to delete the key & tail from the lookup table
        this.lookup.delete(this.reverseLookup.get(tail)!);
        this.reverseLookup.delete(tail);
    }
}
