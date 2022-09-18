export function swap(arr: number[], a: number, b: number) {
    let tempValue: number = arr[a]
    arr[a] = arr[b]
    arr[b] = tempValue
}
