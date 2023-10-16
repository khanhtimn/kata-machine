type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = {
                value: item,
                prev: undefined,
            } as Node<T>;
            return;
        }
        const head = this.head;

        this.head = {
            value: item,
            prev: head,
        } as Node<T>;

        this.head.prev = head;

        return;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (!this.head) return undefined;
        const head = this.head;
        this.head = this.head.prev;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
