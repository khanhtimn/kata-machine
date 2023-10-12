export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        if (needle < haystack[mid]) {
            high = mid;
        } else if (needle > haystack[mid]) {
            low = mid + 1;
        } else if (needle === haystack[mid]) {
            return true;
            break;
        }
    } while (low < high);

    return false;
}
