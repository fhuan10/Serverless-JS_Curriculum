// start coding your function here!
function find_max(arr) {
    let maxNum = arr[0];

    // Find the largest number in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}

exports.find_max = find_max;