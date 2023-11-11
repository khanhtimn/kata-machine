export default class MinHeap {
    public length: number;
    private heap: number[];

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
    constructor() {
        this.length = 0;
        this.heap = [];
    }
    private goUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        //If parent value < current value
        if (this.heap[this.parent(idx)] > this.heap[idx]) {
            //Swap parent value (larger than current value) to the current value
            const temp = this.heap[idx];
            this.heap[idx] = this.heap[this.parent(idx)];
            this.heap[this.parent(idx)] = temp;

            this.goUp(this.parent(idx)); //Continue going up
        }
    }

    //Ugly ass shit solution
    // private goDown(idx: number): void {
    //     if (idx >= this.length || this.leftChild(idx) >= this.length) {
    //         return;
    //     }
    //     //Min of (left child vs right child vs current)
    //     //If right child is the smallest
    //     if (
    //         this.heap[this.leftChild(idx)] > this.heap[this.rightChild(idx)] &&
    //         this.heap[idx] > this.heap[this.rightChild(idx)]
    //     ) {
    //         //Swap currV with rV
    //         const temp = this.heap[this.rightChild(idx)];
    //         this.heap[this.rightChild(idx)] = this.heap[idx];
    //         this.heap[idx] = temp;
    //         //Continue going down
    //         this.goDown(this.rightChild(idx));
    //     }
    //     //If left child is the smallest
    //     else if (
    //         this.heap[this.rightChild(idx)] > this.heap[this.leftChild(idx)] &&
    //         this.heap[idx] > this.heap[this.leftChild(idx)]
    //     ) {
    //         //Swap currV with lV
    //         const temp = this.heap[this.leftChild(idx)];
    //         this.heap[this.leftChild(idx)] = this.heap[idx];
    //         this.heap[idx] = temp;
    //         //Continue going down
    //         this.goDown(this.leftChild(idx));
    //     }
    // }

    private goDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);
        let smallest = idx;
        //Min of (left child vs right child vs current)
        //If left child is the smallest
        if (leftIdx < this.length && this.heap[leftIdx] < this.heap[smallest]) {
            smallest = leftIdx;
        }

        //If right child is the smallest
        if (
            rightIdx < this.length &&
            this.heap[rightIdx] < this.heap[smallest]
        ) {
            smallest = rightIdx;
        }

        // Swap values of current idx with smallest idx
        if (smallest !== idx) {
            const temp = this.heap[smallest];
            this.heap[smallest] = this.heap[idx];
            this.heap[idx] = temp;
            this.goDown(smallest); // Continue going down
        }
    }

    insert(value: number): void {
        this.heap[this.length] = value;
        this.goUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.heap[0];

        this.length--;

        if (this.length === 0) {
            this.heap = [];
            return out;
        }

        this.heap[0] = this.heap[this.length];
        this.goDown(0);
        return out;
    }
}
