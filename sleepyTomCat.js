function sleepyTomCat(input) {

    let holidays = Number(input[0]);
    let workingDays = 365 - holidays;

    let holidaysMins = holidays * 127;
    let workingDaysMins = workingDays * 63;

    let totalMins = holidaysMins + workingDaysMins;

    let remain = 30000 - totalMins;

    let calculateHours = Math.floor(remain / 60);
    let calculateMinutes = remain % 60;

    if (totalMins <= 30000) {
        console.log("Tom sleeps well");
        console.log(`${calculateHours} hours and ${calculateMinutes} minutes less for play`);
    } else {
        let extra = totalMins - 30000;
        let calculateHoursExtra = Math.floor(extra / 60);
        let calculateMinutesExtra = extra % 60;
        console.log("Tom will run away");
        console.log(`${calculateHoursExtra} hours and ${calculateMinutesExtra} minutes more for play`);
    }
}

sleepyTomCat([20]);