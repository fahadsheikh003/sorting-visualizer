import { sleep } from "../utils";

const mergeArray = async (array, start, end, delay, setActive) => {
    const normalColor = "#6b5b95";
    const color = start === 0 && end === (array.length - 1) ? "#13CE66" : "#FF4949";
    let blocks = document.querySelectorAll('.merge');

    const tempArray = new Array(array.length).fill(0);

    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1;
    let end1 = mid, end2 = end;
     
    // Initial index of merged subarray
    let index = start;
 
    while (start1 <= end1 && start2 <= end2) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        if (array[start1] <= array[start2]) {
            tempArray[index++] = array[start1++];
        }
        else if(array[start1] > array[start2]) {
            tempArray[index++] = array[start2++];
        }

        blocks[index - 1].style.backgroundColor = color;
        blocks[index - 1].style.height = `${tempArray[index - 1] * 3}px`;

        await sleep(delay);
    }
 
    // Copy the remaining elements of
    // array[], if there are any
    while (start1 <= end1) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        blocks[index].style.backgroundColor = color;
        blocks[index].style.height = `${array[start1] * 3}px`;

        await sleep(delay);

        tempArray[index++] = array[start1++];
    }
 
    while (start2 <= end2) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        blocks[index].style.backgroundColor = color;
        blocks[index].style.height = `${array[start2] * 3}px`;

        await sleep(delay);

        tempArray[index++] = array[start2++];
    }
 
    index = start;
    while (index <= end) { 
        array[index] = tempArray[index];

        // blocks[index].style.height = `${array[index] * 3}px`;
        // blocks[index].childNodes[0].innerHTML = array[index];
        // blocks[index].style.backgroundColor = "#13CE66";
        
        // await sleep(delay);

        index++;
    }

    if (!(start === 0 && end === (array.length - 1))) {
        for (let i = start; i <= end; i++) {
            blocks[i].style.backgroundColor = normalColor;
        }
    }
}

const mergeSort = async (array, start, end, delay, setActive) => {
    if (start < end) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            // setActive(false);
            // stop.checked = false;
            return;
        }

        let mid = parseInt((start + end) >> 1);
        await mergeSort(array, start, mid, delay, setActive);
        await mergeSort(array, mid + 1, end, delay, setActive);
        await mergeArray(array, start, end, delay, setActive);        
    }
}

const mSort = async (array, start, end, delay, setActive) => {
    await mergeSort(array, start, end, delay, setActive);
    setActive(false);
    // const stop = document.getElementById('stop');
    // stop.checked = false;
}

export default mSort;