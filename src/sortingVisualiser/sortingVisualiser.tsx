import React, {FC, useEffect, useState} from "react";
import './sortingVisualiser.css'
import '../sortingAlgorithms/bubbleSort'
import {bubbleSort} from "../sortingAlgorithms/bubbleSort";
import {quickSort} from "../sortingAlgorithms/quickSort";


function SortingVisualiser(){
    const [array, setArray] = useState<any>([])

    useEffect(() => {
        resetArray()
    }, [])

    function resetArray(){
        const array = []
        function randomIntFromInterval(min: number, max: number){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        for(let i = 0; i < 5000; i++){
            array.push(randomIntFromInterval(5, 50));
        }
        setArray(array)
    }

    function bubbleSortVisualiser(){
        setArray([])
        setTimeout(() => {setArray(bubbleSort(array))}, 1)
    }

    function quickSortVisualiser(){
        setArray([])
        setTimeout(() => {setArray(quickSort(array))}, 1)
    }

    return (
        <div className="array-container">
            <div className="array-buttons">
            <button onClick={() => resetArray()}> Reset Array </button>
            <button onClick={() => bubbleSortVisualiser()}> Bubble Sort </button>
            <button onClick={() => quickSortVisualiser()}> Quick Sort </button>
                <div className="graph-of-values">
                    {array.map((value: number, index: number) => (
                        <div className="array-bar" key={index} style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default SortingVisualiser