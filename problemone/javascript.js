function fibs(num) {
    let arr = [];
    for (let i = 0; i < num; ++i) {
        if (arr.length === 0) {
            arr[0] = 0;
        } else if (arr.length === 1) {
            arr[1] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
}

// This was my attempt at a solution without viewing other code
function fibsRec(num) {
    if (num === 1) return [0];
    if (num === 2) return fibsRec(1).concat([1]);
    return fibsRec(num - 1).concat([fibsGetValue(num)]);
}

function fibsGetValue(num) {
    if (num === 1) return 0;
    if (num === 2) return 1;
    return fibsGetValue(num - 1) + fibsGetValue(num - 2);
}

// This was my solution after viewing other code
const fibsRecTwo = (num, arr = [0, 1]) => (num <= 2) ? arr : fibsRecTwo(num - 1, arr.concat(arr[arr.length - 1] + arr[arr.length - 2]));