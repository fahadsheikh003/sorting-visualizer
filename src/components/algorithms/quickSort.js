import { sleep, swapElementsHeight, find_index } from "../utils";

const partition = async (array, left, right, delay, setActive) => {
    let blocks = document.querySelectorAll('.quick');
    const mid = parseInt((left + right) >> 1);
    const temp = [array[left], array[mid], array[right]];
    temp.sort((a, b) => a - b);
    const pivot = temp[1];
    const pivotIndex = find_index(pivot, array, left, right);

    array[pivotIndex] = array[right];
    array[right] = pivot;

    await swapElementsHeight(blocks[pivotIndex], blocks[right], delay);

    let i = left - 1, j = right;

    while (i < j) {
        blocks[right].style.backgroundColor = 'darkblue';
        while (array[++i] < pivot) {
            const stop = document.getElementById('stop');
            if (stop && stop.checked) {
                // setActive(false);
                // stop.checked = false;
                return -1;
            }

            blocks[i].style.backgroundColor = '#FF4949';

            await sleep(delay);

            blocks[i].style.backgroundColor = "#6b5b95";
        }

        if (blocks[i] !== undefined) {
            blocks[i].style.backgroundColor = '#FF4949';
        }

        while (array[--j] > pivot) {
            const stop = document.getElementById('stop');
            if (stop && stop.checked) {
                // setActive(false);
                // stop.checked = false;
                return -1;
            }

            blocks[j].style.backgroundColor = '#FF4949';

            await sleep(delay);

            blocks[j].style.backgroundColor = "#6b5b95";
        }

        if (blocks[j] !== undefined) {
            blocks[j].style.backgroundColor = '#FF4949';
        }

        if (i < j) {
            const tempVal = array[i];
            array[i] = array[j];
            array[j] = tempVal;

            await swapElementsHeight(blocks[i], blocks[j], delay);

            blocks[i].style.backgroundColor = "#6b5b95";
            blocks[j].style.backgroundColor = "#6b5b95";
        }
    }

    array[right] = array[i];
    array[i] = pivot;

    await swapElementsHeight(blocks[right], blocks[i], delay);

    blocks[i].style.backgroundColor = "#13CE66";

    return i;
}

const quickSort = async (array, left, right, delay, setActive) => {
    if (left < right) {
        const pivot = await partition(array, left, right, delay, setActive);
        await quickSort(array, left, pivot - 1, delay, setActive);
        await quickSort(array, pivot + 1, right, delay, setActive);
        
        return pivot;
    }
}

const qSort = async (array, left, right, delay, setActive) => {
    if (await quickSort(array, left, right, delay, setActive) !== -1) {
        let blocks = document.querySelectorAll('.quick');
        for (let i = left; i <= right; i++) {
            blocks[i].style.backgroundColor = "#13CE66";
        }
    }
    setActive(false);
    // const stop = document.getElementById('stop');
    // stop.checked = false;
}

export default qSort;