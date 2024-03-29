import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Chart from "./components/chart";
import Comparison from "./components/comparison";

import bubbleSort from "./components/algorithms/bubbleSort";
import selectionSort from "./components/algorithms/selectionSort";
import insertionSort from "./components/algorithms/insertionSort";
import mergeSort from "./components/algorithms/mergeSort";
import quickSort from "./components/algorithms/quickSort";
import heapSort from "./components/algorithms/heapSort";
import radixSort from "./components/algorithms/radixSort";
import bucketSort from "./components/algorithms/bucketSort";
import countSort from "./components/algorithms/countSort";

import { generateRandomArray } from './components/utils';
import Footer from "./components/footer";

function App() {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState(20);
  const [array, setArray] = useState(generateRandomArray(size));
  const [delay, setDelay] = useState(4.75);

  useEffect(() => {
    handleArrayGeneration();
    // eslint-disable-next-line
  }, [size]);

  const width = 600, height = 320;

  const handleArrayGeneration = () => {
    setArray(generateRandomArray(size));
    const blocks = document.querySelectorAll('.block');
    if (blocks) {
      blocks.forEach(block => {
        block.style.backgroundColor = '#6b5b95';
      })
    }
  }

  const sorting = () => {
    const calDelay = 5025 - (delay * 1000);
    switch (document.location.pathname) {
      case "/bubble-sort":
        bubbleSort([...array], calDelay, setActive);
        break;
      case "/selection-sort":
        selectionSort([...array], calDelay, setActive);
        break;
      case "/insertion-sort":
        insertionSort([...array], calDelay, setActive);
        break;
      case "/merge-sort":
        mergeSort([...array], 0, array.length - 1, calDelay, setActive);
        break;
      case "/quick-sort":
        quickSort([...array], 0, array.length - 1, calDelay, setActive);
        break;
      case "/heap-sort":
        heapSort([...array], calDelay, setActive);
        break;
      case "/radix-sort":
        radixSort([...array], calDelay, setActive);
        break;
      case "/bucket-sort":
        bucketSort([...array], 5, calDelay, setActive);
        break;
      case "/count-sort":
        countSort([...array], calDelay, setActive);
        break;
      case "/":
      case "/comparison":
        if (document.getElementById('bubble-check').checked) {
          bubbleSort([...array], calDelay, setActive);
        }
        if (document.getElementById('selection-check').checked) {
          selectionSort([...array], calDelay, setActive);
        }
        if (document.getElementById('insertion-check').checked) {
          insertionSort([...array], calDelay, setActive);
        }
        if (document.getElementById('merge-check').checked) {
          mergeSort([...array], 0, array.length - 1, calDelay, setActive);
        }
        if (document.getElementById('quick-check').checked) {
          quickSort([...array], 0, array.length - 1, calDelay, setActive);
        }
        if (document.getElementById('heap-check').checked) {
          heapSort([...array], calDelay, setActive);
        }
        if (document.getElementById('radix-check').checked) {
          radixSort([...array], calDelay, setActive);
        }
        if (document.getElementById('bucket-check').checked) {
          bucketSort([...array], 5, calDelay, setActive);
        }
        if (document.getElementById('count-check').checked) {
          countSort([...array], calDelay, setActive);
        }
        break;
      default:
    }
  }

  return (
    <div className="App">
      {
        parseInt(document.body.offsetWidth) > parseInt(width) ?
          <div>
            <Router>
              <Header />

              <div className="text-center my-3">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th>
                            <label htmlFor="customRange3" className="form-label m-2">Animation Speed</label>
                          </th>
                          <th className="pb-3">
                            <input type="range" className="form-range" min="0.25" max="5" step="0.25" id="customRange3" value={delay} onChange={e => { setDelay(e.target.value); }} />
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <label className="form-label m-2">Array Size</label>
                          </th>
                          <th>
                            <div>
                              <select className="form-select form-select-sm mb-1" aria-label=".form-select-sm example" value={size} onChange={async e => { setSize(e.target.value); }}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <input type="checkbox" id="stop" className="d-none" />
                {
                  active ? <button type="button" className="btn btn-dark m-1" onClick={() => {
                    const stop = document.getElementById('stop');
                    if (stop) {
                      stop.checked = true;
                    }
                    setActive(false);
                  }}>
                    Stop
                  </button>
                    : <button type="button" className="btn btn-dark m-1" onClick={() => {
                      setActive(true);
                      const stop = document.getElementById('stop');
                      if (stop) {
                        stop.checked = false;
                      }
                      sorting();
                    }}>
                      Sort
                    </button>
                }
                <button type="button" className="btn btn-dark m-1" onClick={handleArrayGeneration}>Generate</button>
              </div>

              <Routes>
                <Route exact path={'/bubble-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Bubble Sort'} class={'bubble'} id={'bubble-sort'} />} />
                <Route exact path={'/selection-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Selection Sort'} class={'selection'} id={'selection-sort'} />} />
                <Route exact path={'/insertion-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Insertion Sort'} class={'insertion'} id={'insertion-sort'} />} />
                <Route exact path={'/merge-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Merge Sort'} class={'merge'} id={'merge-sort'} />} />
                <Route exact path={'/quick-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Quick Sort'} class={'quick'} id={'quick-sort'} />} />
                <Route exact path={'/heap-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Heap Sort'} class={'heap'} id={'heap-sort'} />} />
                <Route exact path={'/radix-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Radix Sort'} class={'radix'} id={'radix-sort'} />} />
                <Route exact path={'/bucket-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Bucket Sort'} class={'bucket'} id={'bucket-sort'} />} />
                <Route exact path={'/count-sort'} element={<Chart array={array} size={size} width={width} height={height}
                  name={'Count Sort'} class={'count'} id={'count-sort'} />} />
                <Route exact path={'/comparison'} element={<Comparison array={array} size={size} />} />
                <Route exact path={'/'} element={<Comparison array={array} size={size} />} />
              </Routes>
            </Router>
            <Footer />
          </div> :
          <div className="text-center"><h2>Please Rotate your device</h2></div>
      }

    </div>
  );
}

export default App;
