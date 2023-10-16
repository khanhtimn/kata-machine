type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        if (!this.tail) {
            this.head = this.tail = {
                value: item,
                next: undefined,
            } as Node<T>;
            return;
        }

        const tail = this.tail;

        this.tail = {
            value: item,
            next: undefined,
        } as Node<T>;

        tail.next = this.tail;
        return;
    }

    deque(): T | undefined {
        //If the queue is empty
        if (!this.head) return undefined;

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        if (this.length === 0) {
            this.head = this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
