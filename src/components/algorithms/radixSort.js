import { sleep } from "../utils";

const countSort = async (array, exp, delay) => {
    let blocks = document.querySelectorAll('.radix');
    let output = new Array(array.length); // output array
    let i;
    let count = new Array(10).fill(0);

    // Store count of occurrences in count[]
    for (i = 0; i < array.length; i++)
        count[Math.floor(array[i] / exp) % 10]++;

    // Change count[i] so that count[i] now contains
    // actual position of this digit in output[]
    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (i = array.length - 1; i >= 0; i--) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            return;
        }

        const current = count[Math.floor(array[i] / exp) % 10] - 1;
        output[current] = array[i];

        blocks[current].style.height = `${array[i] * 3}px`;
        blocks[current].childNodes[0].innerHTML = array[i];
        blocks[current].style.backgroundColor = "#6b5b95";

        await sleep(delay);

        count[Math.floor(array[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for (i = 0; i < array.length; i++) {
        array[i] = output[i];
    }
}

const radixSort = async (array, delay) => {
    let blocks = document.querySelectorAll('.radix');
    // Find the maximum number to know number of digits
    const tempArray = [...array]
    tempArray.sort((a, b) => b - a);
    let m = tempArray[0];

    // Do counting sort for every digit. Note that
    // instead of passing digit number, exp is passed.
    // exp is 10^i where i is current digit number
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        await countSort(array, exp, delay);

        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            return;
        }

        for (let i = 0; i < array.length; i++) {
            blocks[i].childNodes[0].innerHTML = array[i];
            blocks[i].style.height = `${array[i] * 3}px`;
            blocks[i].style.backgroundColor = "#13CE66";
        }
        await sleep(delay);
    }
}

export default radixSort;