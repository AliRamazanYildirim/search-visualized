export const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    const steps = [];

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        steps.push({ left, mid, right, current: arr[mid] });

        if (arr[mid] === target) {
            return { found: true, index: mid, steps };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return { found: false, index: -1, steps };
}
