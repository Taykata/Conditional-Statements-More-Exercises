function pipesInPool(input) {

    let volumePool = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let totalPipe1 = pipe1 * hours;
    let totalPipe2 = pipe2 * hours;

    let sumPipe = totalPipe1 + totalPipe2;

    let fullness = sumPipe * 100 / volumePool;

    let percentPipe1 = totalPipe1 * 100 / sumPipe;
    let percentPipe2 = totalPipe2 * 100 / sumPipe;

    let overflows = sumPipe - volumePool;

    if (sumPipe <= volumePool) {
        console.log(`The pool is ${fullness.toFixed(2)}% full. Pipe 1: ${percentPipe1.toFixed(2)}%. Pipe 2: ${percentPipe2.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${overflows.toFixed(2)} liters.`);
    }
}

pipesInPool([1000, 100, 120, 3]);