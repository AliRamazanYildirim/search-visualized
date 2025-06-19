export const interpolationSearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    const steps = [];
    
    while (left <= right && target >= array[left] && target <= array[right]) {
        // Prevent division by zero
        if (array[right] === array[left]) {
            steps.push({ left, right, pos: left, value: array[left] });
            if (array[left] === target) {
                return { found: true, index: left, steps };
            }
            break;
        }
        
        // Calculate interpolated position
        const pos = left + Math.floor(
            ((target - array[left]) * (right - left)) / 
            (array[right] - array[left])
        );
        
        steps.push({ left, right, pos, value: array[pos] });
        
        if (array[pos] === target) {
            return { found: true, index: pos, steps };
        }
        
        if (array[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    
    return { found: false, index: -1, steps };
};