// start coding your function here!

function running_late(date) {
    if (date.getHours() >= 22) {
        console.log('It is late!');
    } else {
        console.log('It is early!');
    }
}

exports.running_late = running_late;