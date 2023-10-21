function fuelTank(input) {

    let fuel = input[0];
    let liters = Number(input[1]);

    if (fuel === "Diesel") {
        fuel = "diesel";
    } else if (fuel === "Gasoline") {
        fuel = "gasoline";
    } else if (fuel === "Gas") {
        fuel = "gas";
    }

    if (fuel === "diesel" || fuel === "gasoline" || fuel === "gas") {
        if (liters >= 25) {
            console.log(`You have enough ${fuel}.`)
        } else if (liters < 25) {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}

fuelTank(["Diesel", 10]);