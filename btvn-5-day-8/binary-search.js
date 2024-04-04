// const arr = ['1', 5, '2', '8', '9', 1, 4];
const arr = ['meo', 5, 'chuot', 'ga', 'heo', 1, 4];

function binarySearch(arr = [], key) {
    const sortedArray = selectionSort(arr);
    let start = 0;
    let end = sortedArray.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

function selectionSort(arr = []) {
    let i, j, min_idx;
    for (i = 0; i < arr.length; i++) 
    {
        min_idx = i;
        for (j = i; j < arr.length; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
                swap(arr, min_idx, i);
            }
        }
    }
    return arr;
}

function swap(arr = [], x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

console.log(selectionSort(arr));
console.log(binarySearch(arr, 'meo'));
console.log(arr);