import { sleep } from "../utils";

const countSort = async (array, delay, setActive) => {
    const tempArray = [...array]
    tempArray.sort((a, b) => a - b);
    let freqArray = new Array(tempArray[tempArray.length - 1] - tempArray[0] + 1).fill(0);

    let blocks = document.querySelectorAll(".count");

    // To store frequency of every block
    for (let i = 0; i < blocks.length; i++) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        //To highlight the current traversed block
        blocks[i].style.backgroundColor = "#FF4949";

        freqArray[array[i] - tempArray[0]]++;
        await sleep(delay);

        //Changing to previous color
        blocks[i].style.backgroundColor = "#6b5b95";
    }

    for (let i = 1; i < freqArray.length; i++) {
        freqArray[i] = freqArray[i] + freqArray[i - 1];
    }

    const output = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        const current = freqArray[array[i] - tempArray[0]] - 1;
        output[current] = array[i];

        blocks[current].style.height = `${array[i] * 3}px`;
        blocks[current].childNodes[0].innerHTML = array[i];
        blocks[current].style.backgroundColor = "#13CE66";

        await sleep(delay);

        freqArray[array[i] - tempArray[0]]--;
    }

    setActive(false);
    // const stop = document.getElementById('stop');
    // stop.checked = false;
}

export default countSort;