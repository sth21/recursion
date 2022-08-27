function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.splice(0, midPoint));
    const rightArr = mergeSort(arr);
    let mergeArr = [];
    while (rightArr.length > 0 || leftArr.length > 0) {
        if (leftArr[0] > rightArr[0]) {
            mergeArr[mergeArr.length] = rightArr[0];
            rightArr.splice(0, 1);
        } else if (rightArr[0] > leftArr[0]) {
            mergeArr[mergeArr.length] = leftArr[0];
            leftArr.splice(0, 1);
        } else if (leftArr.length === 0) {
            mergeArr[mergeArr.length] = rightArr[0];
            rightArr.splice(0, 1);
        } else {
            mergeArr[mergeArr.length] = leftArr[0];
            leftArr.splice(0, 1);
        }
    }
    return mergeArr;
}