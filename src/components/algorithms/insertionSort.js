import { sleep } from "../utils";

const insertionSort = async (array, delay) => {
    let blocks = document.querySelectorAll('.insertion');

    for (let i = 1; i < blocks.length; i++) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            return;
        }

        blocks[i].style.backgroundColor = '#FF4949';

        const key = Number(blocks[i].childNodes[0].innerHTML);
        const height = blocks[i].style.height;

        let j = i - 1;

        await sleep(delay);

        while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > key) {
            const stop = document.getElementById('stop');
            if (stop && stop.checked) {
                return;
            }

            blocks[j].style.backgroundColor = "#FF4949";

            blocks[j + 1].style.height = blocks[j].style.height;
            blocks[j + 1].childNodes[0].innerHTML = blocks[j].childNodes[0].innerHTML;
            array[j + 1] = array[j];

            j--;

            await sleep(delay);

            for (let k = i; k >= 0; k--) {
                blocks[k].style.backgroundColor = "#13CE66";
            }
        }

        // Placing the selected element to its correct position
        blocks[j + 1].style.height = height;
        blocks[j + 1].childNodes[0].innerHTML = key;
        array[j + 1] = key;

        await sleep(delay);

        blocks[i].style.backgroundColor = "#13CE66";
    }
}

export default insertionSort;