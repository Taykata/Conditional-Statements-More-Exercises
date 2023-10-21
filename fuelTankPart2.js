function fuelTankPart2(input) {

    let fuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

    let price = 0;

    let finalPrice = 0;

    if (fuel === "Gasoline") {

        if (card === "Yes") {
            price = liters * (2.22 - 0.18);
        } else {
            price = liters * 2.22;
        }
    } else if (fuel === "Diesel") {

        if (card === "Yes") {
            price = liters * (2.33 - 0.12);
        } else {
            price = liters * 2.33;
        }
    } else if (fuel === "Gas") {

        if (card === "Yes") {
            price = liters * (0.93 - 0.08);
        } else {
            price = liters * 0.93;
        }
    }

    if (liters >= 20 && liters <= 25) {
        finalPrice = price - 8 / 100 * price;
    } else if (liters > 25) {
        finalPrice = price - 10 / 100 * price;
    } else {
        finalPrice = price;
    }

    console.log(`${finalPrice.toFixed(2)} lv.`);
}

fuelTankPart2(["Diesel", 19, "No"]);