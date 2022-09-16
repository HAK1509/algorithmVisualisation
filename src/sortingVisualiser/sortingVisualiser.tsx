import React, {useEffect, useState} from "react";
import './sortingVisualiser.css'
import '../sortingAlgorithms/bubbleSort'
import {bubbleSort} from "../sortingAlgorithms/bubbleSort";


function SortingVisualiser(){
    const [array, setArray] = useState<number []>([])
    useEffect(() => {
        resetArray()
    }, [])
    function resetArray(){
        const array = []
        for(let i = 0; i < 100; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        setArray(array)
    }
    function randomIntFromInterval(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function insertionSortVisualiser(){
        console.log(bubbleSort([7, 6, 5, 4, 3, 2, 1]))
    }
    return (
        <div className="array-container">
            {array.map((value, index) => (
                <div className="array-bar" key={index} style={{height: `${value}px`}}>
                </div>
            ))}
            <div className="array-buttons">
                <button onClick={() => resetArray()}> Reset Array </button>
                <button onClick={() => insertionSortVisualiser()}> Insertion Sort </button>

            </div>
        </div>
    )
}


export default SortingVisualiser