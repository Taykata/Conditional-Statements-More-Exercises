function pets(input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let foodDog = Number(input[2]);
    let foodCat = Number(input[3]);
    let foodTurtle = Number(input[4]) / 1000;

    let neededFoodDog = days * foodDog;
    let neededFoodCat = days * foodCat;
    let neededFoodTurtle = days * foodTurtle;

    let totalFood = neededFoodDog + neededFoodCat + neededFoodTurtle;
    let foodLeft = food - totalFood;

    let shortage = totalFood - food;

    if (totalFood <= food) {
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(shortage)} more kilos of food are needed.`);
    }
}

pets([2, 10, 1, 1, 1200]);