import { sleep, swapElementsHeight } from '../utils';

export default async function bubbleSort(array, delay) {
    let blocks = document.querySelectorAll('.bubble');

    let alreadySorted = false;

    for (let i = 0; i < blocks.length; i++) {
        let swap = false;

        if (!alreadySorted) {
            for (let j = 0; j < blocks.length - i - 1; j++) {

                // To change background-color of the blocks to be compared
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j + 1].style.backgroundColor = "#FF4949";

                await sleep(delay);

                let value1 = Number(blocks[j].childNodes[0].innerHTML);
                let value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

                // To compare value of two blocks
                if (value1 > value2) {
                    swap = true;
                    await swapElementsHeight(blocks[j], blocks[j + 1], delay);

                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }

                // Changing the color to the previous one
                blocks[j].style.backgroundColor = "#6b5b95";
                blocks[j + 1].style.backgroundColor = "#6b5b95";
            }    
        }

        if (!swap) {
            alreadySorted = true;
        }

        //changing the color of greatest element found in the above traversal
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
    alreadySorted = false;
}