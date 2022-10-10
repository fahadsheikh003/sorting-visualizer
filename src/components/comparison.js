import React, { useState } from 'react';
import Chart from './chart';

export default function Comparison({ array, size }) {
    const width = 400, height = 320;

    const [bubbleCheck, setBubbleCheck] = useState(true);
    const [selectionCheck, setSelectionCheck] = useState(true);
    const [insertionCheck, setInsertionCheck] = useState(true);
    const [mergeCheck, setMergeCheck] = useState(true);
    const [quickCheck, setQuickCheck] = useState(true);
    const [heapCheck, setHeapCheck] = useState(true);
    const [radixCheck, setRadixCheck] = useState(true);
    const [bucketCheck, setBucketCheck] = useState(true);
    const [countCheck, setCountCheck] = useState(true);

    return (
        <div>
            <div className='m-3 text-center' style={{ border: '2px solid', borderRadius: '2px' }}>
                <h2> Select the Algorithms </h2>
                <div className='d-flex flex-wrap justify-content-center'>
                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='bubble-check' onClick={() => document.getElementById('bubble-check').checked ? setBubbleCheck(true) : setBubbleCheck(false)} defaultChecked />Bubble Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='selection-check' onClick={() => document.getElementById('selection-check').checked ? setSelectionCheck(true) : setSelectionCheck(false)} defaultChecked />Selection Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='insertion-check' onClick={() => document.getElementById('insertion-check').checked ? setInsertionCheck(true) : setInsertionCheck(false)} defaultChecked />Insertion Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='merge-check' onClick={() => document.getElementById('merge-check').checked ? setMergeCheck(true) : setMergeCheck(false)} defaultChecked />Merge Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='quick-check' onClick={() => document.getElementById('quick-check').checked ? setQuickCheck(true) : setQuickCheck(false)} defaultChecked />Quick Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='heap-check' onClick={() => document.getElementById('heap-check').checked ? setHeapCheck(true) : setHeapCheck(false)} defaultChecked />Heap Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='radix-check' onClick={() => document.getElementById('radix-check').checked ? setRadixCheck(true) : setRadixCheck(false)} defaultChecked />Radix Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='bucket-check' onClick={() => document.getElementById('bucket-check').checked ? setBucketCheck(true) : setBucketCheck(false)} defaultChecked />Bucket Sort</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <div className="checkbox">
                            <label><input type="checkbox" id='count-check' onClick={() => document.getElementById('count-check').checked ? setCountCheck(true) : setCountCheck(false)} defaultChecked />Count Sort</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-wrap flex-row justify-content-around'>
                {
                    bubbleCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Bubble Sort'} class={'bubble'} id={'bubble-sort'} /> : <></>
                }
                {
                    selectionCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Selection Sort'} class={'selection'} id={'selection-sort'} /> : <></>
                }
                {
                    insertionCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Insertion Sort'} class={'insertion'} id={'insertion-sort'} /> : <></>
                }
                {
                    mergeCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Merge Sort'} class={'merge'} id={'merge-sort'} /> : <></>
                }
                {
                    quickCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Quick Sort'} class={'quick'} id={'quick-sort'} /> : <></>
                }
                {
                    heapCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Heap Sort'} class={'heap'} id={'heap-sort'} /> : <></>
                }
                {
                    radixCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Radix Sort'} class={'radix'} id={'radix-sort'} /> : <></>
                }
                {
                    bucketCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Bucket Sort'} class={'bucket'} id={'bucket-sort'} /> : <></>
                }
                {
                    countCheck ? <Chart array={[...array]} size={size} width={width} height={height}
                        name={'Count Sort'} class={'count'} id={'count-sort'} /> : <></>
                }
            </div>
        </div>
    )
}
