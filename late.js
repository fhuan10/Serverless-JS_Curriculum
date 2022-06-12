// start coding your function here!

function running_late(date) {
    const currentDate = new Date(date);
    let hours = currentDate.getHours();

    if (hours > 21) {
        return 'It is late!';
    }
    return 'It is still early!';
}
exports.running_late = running_late;