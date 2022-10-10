import React from 'react';
import './style.css';

export default function Chart(props) {
    let array = props.array;
    const borderLessWidth = props.width - 5;
    const width = (borderLessWidth * 0.9) / props.size;
    const space = (borderLessWidth * 0.1) / (props.size - 1);

    return (
        <div>
            <h1 className='text-center text-muted my-4'>
                {props.name}
            </h1>
            <div className='array' id={`${props.id}`} style={{ width: `${props.width}px`, height: `${props.height}px` }}>
                {
                    array.map((value, index) => {
                        return <div className={`block ${props.class}`} key={index} style={{ height: `${value * 3}px`, width: `${width}px`, transform: `translate(${index * width + index * space + 1}px)` }}>
                            <label className='block_id'>{value}</label>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
