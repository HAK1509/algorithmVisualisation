export function bubbleSort(arr: number[]){
    let tempArray: number[] = []
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tempValue: number = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tempValue
            }
            console.log(arr)
        }
    }
    console.log(arr)

    return 0
}

