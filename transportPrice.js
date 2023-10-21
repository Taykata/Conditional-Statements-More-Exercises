function transportPrice(input) {

    let kilometers = Number(input[0]);
    let time = input[1];

    let taxi = 0.70;
    let bus = 0.09 * kilometers;
    let train = 0.06 * kilometers;

    if (kilometers < 20) {
        if (time === "day") {
            taxi = 0.70 + 0.79 * kilometers;
        } else {
            taxi = 0.70 + 0.90 * kilometers;
        }
        console.log(taxi.toFixed(2));
    } else if (kilometers >= 20 && kilometers < 100) {
        console.log(bus.toFixed(2));
    } else {
        console.log(train.toFixed(2));
    }
}

transportPrice([5, "day"]);