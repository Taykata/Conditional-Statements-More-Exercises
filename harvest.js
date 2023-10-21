function harvest(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workers = Number(input[3]);

    let grapes = x * y;
    let wine = 40 / 100 * grapes / 2.5;
    let leftWine = wine - z;
    let winePerHuman = leftWine / workers;

    let notEnoughLiters = z - wine;

    if (wine >= z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(winePerHuman)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(notEnoughLiters)} liters wine needed.`);
    }
}

harvest([650, 2, 175, 3]);