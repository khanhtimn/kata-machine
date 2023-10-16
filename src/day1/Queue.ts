type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.tail?.next?.value = item: T;
    }

    deque(): T | undefined {


    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
