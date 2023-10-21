function flowerShop(input) {

    let mangolii = Number(input[0]);
    let zumbuli = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let gift = Number(input[4]);

    let sum = (mangolii * 3.25) + (zumbuli * 4) + (roses * 3.5) + (cactus * 8);

    let tax = 5 / 100 * sum;
    let profit = sum - tax;

    let shortage = gift - profit;

    let leftMoney = profit - gift;

    if (profit < gift) {
        console.log(`She will have to borrow ${Math.ceil(shortage)} leva.`);
    } else {
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50]);