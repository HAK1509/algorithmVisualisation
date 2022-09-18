import {swap} from "./swap";

// Declaration of function, with passing the left and right pointer as the index of the starting and last element of the array
export function quickSort(arr: number[], leftPointer: number = 0, rightPointer: number = arr.length - 1){
    // If the left and right pointers are on the same element or crossed it means that the sub array / array is sorted
    if (leftPointer >= rightPointer){
        return;
    }
    // Setting the index as the result of the function below
    let index: number = partion(arr, leftPointer, rightPointer);
    // Recursively calling the outer function on the smaller / left sub array, getting the index as the end of the smaller sub array as the index will be the final place of the pivot
    quickSort(arr, leftPointer, index - 1);
    // Recursively calling the outer function on the bigger / right sub array
    quickSort(arr, index + 1, rightPointer)
    // Returning the sorted array
    return arr;
}

let partion = (arr: number[], leftPointer: number, rightPointer: number) => {
    // Setting the pivot index (the point which will be swapped on each call) as the leftmost index currently
    let pivotIndex: number = leftPointer;
    // Setting the pivot point as the last element of the list which other elements are compared to
    let pivotValue: number = arr[rightPointer]
    // Looping over the sub array up to the currently set pivot value
    for (let i = leftPointer; i < pivotValue; i++){
        // Checking the current value is smaller than the pivot value
       if (arr[i] < pivotValue){
           // If so swap the current which is the left pointer with the pivot value which the value before it
           swap(arr, i, pivotIndex)
           // As we have swapped left pointer with the pivot index increment it in preperation for the next swap
           pivotIndex++
       }
    }
    // In the final stage swap the right pointer aka the pivot to its final position
    swap(arr, pivotIndex, rightPointer)
    return pivotIndex
}

// TODO needs to be made much more efficient, takes way too long currently