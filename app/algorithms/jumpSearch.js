export const jumpSearch = (arr, target) => {
    const n = arr.length;
    const stepSize = Math.floor(Math.sqrt(n));
    let step = stepSize;
    let prev = 0;
    const steps = [];

    // Finding the block where the element is present
    while (arr[Math.min(step, n) - 1] < target) {
        steps.push({ checking: Math.min(step, n) - 1, value: arr[Math.min(step, n) - 1] });
        prev = step;
        step += stepSize; // stepSize kullanıyoruz, step'i değiştiriyoruz
        if (prev >= n) return { found: false, index: -1, steps };
    }

    // Linear search for the target in the block
    while (arr[prev] < target) {
        steps.push({ index: prev, value: arr[prev] });
        prev++;
        if (prev === Math.min(step, n)) return { found: false, index: -1, steps };
    }

    // If the element is found
    if (arr[prev] === target) {
        steps.push({ index: prev, value: arr[prev] });
        return { found: true, index: prev, steps };
    }

    return { found: false, index: -1, steps };
}