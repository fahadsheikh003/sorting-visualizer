import { sleep } from "../utils";

const bucketSort = async (array, nOfB, delay, setActive) => {
    let blocks = document.querySelectorAll('.bucket');
    if (nOfB <= 0)
        return;

    // 1) Create n empty buckets       
    let buckets = new Array(nOfB);

    for (let i = 0; i < nOfB; i++) {
        buckets[i] = [];
    }

    // 2) Put array elements in different buckets
    for (let i = 0; i < array.length; i++) {
        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        blocks[i].style.backgroundColor = "#FF4949";

        let idx = array[i] / 100 * nOfB;
        buckets[Math.floor(idx)].push(array[i]);
        await sleep(delay);

        blocks[i].style.backgroundColor = "#6b5b95";
    }

    // 3) Sort individual buckets
    for (let i = 0; i < nOfB; i++) {
        buckets[i].sort((a, b) => a - b);
    }

    // 4) Concatenate all buckets into arr[]
    let index = 0;
    for (let i = 0; i < nOfB; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            blocks[index].style.height = `${buckets[i][j] * 3}px`;
            blocks[index].childNodes[0].innerHTML = buckets[i][j];
            blocks[index].style.backgroundColor = "#13CE66";

            array[index++] = buckets[i][j];
        }

        const stop = document.getElementById('stop');
        if (stop && stop.checked) {
            setActive(false);
            // stop.checked = false;
            return;
        }

        await sleep(delay);
    }

    setActive(false);
    // const stop = document.getElementById('stop');
    // stop.checked = false;
}

export default bucketSort;