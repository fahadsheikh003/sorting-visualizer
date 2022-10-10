import { sleep, swapElementsHeight } from '../utils';

const selectionSort = async (array, delay) => {
    let blocks = document.querySelectorAll('.selection');

    let min_idx = 0;
    for (let i = 0; i < blocks.length; i++) {
        min_idx = i;

        // To change background-color of the blocks to be compared
        blocks[i].style.backgroundColor = "darkblue";

        for (let j = i + 1; j < blocks.length; j++) {
            // To change background-color of the blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            await sleep(delay);

            let value1 = Number(blocks[min_idx].childNodes[0].innerHTML);
            let value2 = Number(blocks[j].childNodes[0].innerHTML);

            if (value1 > value2) {
                if (min_idx !== i) {
                    blocks[min_idx].style.backgroundColor = "#6b5b95";
                }
                min_idx = j;
            }
            else {
                blocks[j].style.backgroundColor = "#6b5b95";
            }
        }

        const temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp;

        await swapElementsHeight(blocks[i], blocks[min_idx], delay);

        blocks[min_idx].style.backgroundColor = "#6b5b95";

        //changing the color of minimum element found in the above traversal
        blocks[i].style.backgroundColor = "#13CE66";
    }
}

export default selectionSort;