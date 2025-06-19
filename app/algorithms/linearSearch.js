export const linearSearch = (array, target) => {
    const steps = [];

    for (let i = 0; i < array.length; i++) {
        steps.push({ index: i, value: array[i] });

        if (array[i] === target) {
            return { found: true, index: i, steps };
        }
    }

    return { found: false, steps };
};