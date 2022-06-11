// start coding your function here!

function running_late(date) {
    var currentDate = new Date(date);
    var hours = currentDate.getHours();


    if (currentDate.getHours() >= 22) {
        console.log('It is late!');
    } else {
        console.log('It is early!');
    }
}

module.exports = running_late;