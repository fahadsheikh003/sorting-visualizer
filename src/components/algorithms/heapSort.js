import { sleep, swapElementsHeight } from '../utils';

const heapify = async (array, n, i, delay) => {
    let blocks = document.querySelectorAll(".heap");

    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && Number(blocks[l].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
        largest = l;

    // If right child is larger than largest so far
    if (r < n && Number(blocks[r].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
        largest = r;
    // If largest is not root
    if (largest !== i) {
        blocks[largest].style.backgroundColor = "#FF4949";
        blocks[i].style.backgroundColor = "#FF4949";

        await sleep(delay);

        await swapElementsHeight(blocks[i], blocks[largest], delay);

        blocks[largest].style.backgroundColor = "#6b5b95";
        blocks[i].style.backgroundColor = "#6b5b95";

        // Recursively Hapify the affected sub-tree
        await heapify(array, n, largest, delay);
    }
}

const heapSort = async (array, delay) => {
    var blocks = document.querySelectorAll(".heap");

    // Build heap (rearrange array)
    for (let i = array.length / 2 - 1; i >= 0; i--) {
        await heapify(array, array.length, i, delay);
    }

    // One by one extract an element from heap
    for (let i = array.length - 1; i >= 0; i--) {
        await swapElementsHeight(blocks[i], blocks[0], delay);

        blocks[i].style.backgroundColor = "#13CE66";

        // Call max heapify on the reduced heap
        await heapify(array, i, 0, delay);
    }
}

export default heapSort;