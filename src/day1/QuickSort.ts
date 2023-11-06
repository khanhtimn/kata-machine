function qs(arr: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }
    qs(arr, low, pt(arr, low, high) - 1);
    qs(arr, pt(arr, low, high) + 1, high);
}

function pt(arr: number[], low: number, high: number): number {
    const pivot = Math.floor((low + (high - low)) / 2);

    let idx = low - 1;

    for (let i = low; i < high; i++) {
        idx++;
        const temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }

    idx++;

    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length);
}
