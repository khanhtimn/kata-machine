//Test New PC 2
export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;
    for (; i < breaks.length; i += jump) {
        if (breaks[i] === true) {
            break;
        }
    }

    i -= jump;

    for (let j = 0; j < jump && i < breaks.length; j++, ++i) {
        if (breaks[i] === true) {
            return i;
        }
    }

    return -1;
}
