export const generateRandomArray = (size, min = 1, max = 100) => {
    const array = [];
    const range = max - min;
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * range) + min);
    }

    return array;
}

export const swapElementsHeight = async (element1, element2, delay) => {
    const height = element1.style.height;
    const innerText = element1.childNodes[0].innerHTML;

    element1.style.height = element2.style.height;
    element1.childNodes[0].innerHTML = element2.childNodes[0].innerHTML;

    element2.style.height = height;
    element2.childNodes[0].innerHTML = innerText;

    await sleep(delay);
}

export const swapElementsTransform = async (parent, element1, element2, delay) => {
    return new Promise(resolve => {
        const temp = element1.style.transform;
        element1.style.transform = element2.style.transform;
        element2.style.transform = temp;

        window.requestAnimationFrame(() => {
            setTimeout(() => {
                parent.insertBefore(element2, element1);
                resolve();
            }, delay);
        });
    });    
}

export const find_index = (value, array, start, end) => {
    for (let i = start; i <= end; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

export const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));