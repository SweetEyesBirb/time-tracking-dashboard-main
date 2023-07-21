function main() {

    // work info cads    
    const workCurrentMonthly = document.getElementById("work-monthly-current");
    const workPreviousMonthly = document.getElementById("work-monthly-previous");

    // play info cards
    const playCurrentMonthly = document.getElementById("play-monthly-current");
    const playPreviousMonthly = document.getElementById("play-monthly-previous");

    // study info cards
    const studyCurrentMonthly = document.getElementById("study-monthly-current");
    const studyPreviousMonthly = document.getElementById("study-monthly-previous");

    // exercise info cards
    const exerciseCurrentMonthly = document.getElementById("exercise-monthly-current");
    const exercisePreviousMonthly = document.getElementById("exercise-monthly-previous");

    // social info cards
    const socialCurrentMonthly = document.getElementById("social-monthly-current");
    const socialPreviousMonthly = document.getElementById("social-monthly-previous");

    // self-care info cards
    const selfCareCurrentMonthly = document.getElementById("self-care-monthly-current");
    const selfCarePreviousMonthly = document.getElementById("self-care-monthly-previous");


    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            const lastMonth = "Last Month";

            // work cards
            if (data[0].timeframes.monthly.current !== 1) {
                workCurrentMonthly.textContent = data[0].timeframes.monthly.current + "hrs";
            } else {
                workCurrentMonthly.textContent = data[0].timeframes.monthly.current + "hr";
            }

            if (data[0].timeframes.monthly.previous !== 1) {
                workPreviousMonthly.textContent = `${lastMonth} ${data[0].timeframes.monthly.previous}hrs`;
            } else {
                workPreviousMonthly.textContent = `${lastMonth} ${data[0].timeframes.monthly.previous}hr`;
            }

            // play cards
            if (data[1].timeframes.monthly.current !== 1) {
                playCurrentMonthly.textContent = data[1].timeframes.monthly.current + "hrs";
            } else {
                playCurrentMonthly.textContent = data[1].timeframes.monthly.current + "hr";
            }

            if (data[1].timeframes.monthly.previous !== 1) {
                playPreviousMonthly.textContent = `${lastMonth} ${data[1].timeframes.monthly.previous}hrs`;
            } else {
                playPreviousMonthly.textContent = `${lastMonth} ${data[1].timeframes.monthly.previous}hr`;
            }

            // study cards
            if (data[2].timeframes.monthly.current !== 1) {
                studyCurrentMonthly.textContent = data[2].timeframes.monthly.current + "hrs";
            } else {
                studyCurrentMonthly.textContent = data[2].timeframes.monthly.current + "hr";
            }

            if (data[2].timeframes.monthly.previous !== 1) {
                studyPreviousMonthly.textContent = `${lastMonth} ${data[2].timeframes.monthly.previous}hrs`;
            } else {
                studyPreviousMonthly.textContent = `${lastMonth} ${data[2].timeframes.monthly.previous}hr`;
            }

            // exercise cards
            if (data[3].timeframes.monthly.current !== 1) {
                exerciseCurrentMonthly.textContent = data[3].timeframes.monthly.current + "hrs";
            } else {
                exerciseCurrentMonthly.textContent = data[3].timeframes.monthly.current + "hr";
            }

            if (data[3].timeframes.monthly.previous !== 1) {
                exercisePreviousMonthly.textContent = `${lastMonth} ${data[3].timeframes.monthly.previous}hrs`;
            } else {
                exercisePreviousMonthly.textContent = `${lastMonth} ${data[3].timeframes.monthly.previous}hr`;
            }

            // social cards
            if (data[4].timeframes.monthly.current !== 1) {
                socialCurrentMonthly.textContent = data[4].timeframes.monthly.current + "hrs";
            } else {
                socialCurrentMonthly.textContent = data[4].timeframes.monthly.current + "hr";
            }

            if (data[4].timeframes.monthly.previous !== 1) {
                socialPreviousMonthly.textContent = `${lastMonth} ${data[4].timeframes.monthly.previous}hrs`;
            } else {
                socialPreviousMonthly.textContent = `${lastMonth} ${data[4].timeframes.monthly.previous}hr`;
            }

            // self-care cards
            if (data[5].timeframes.monthly.current !== 1) {
                selfCareCurrentMonthly.textContent = data[5].timeframes.monthly.current + "hrs";
            } else {
                selfCareCurrentMonthly.textContent = data[5].timeframes.monthly.current + "hr";
            }

            if (data[5].timeframes.monthly.previous !== 1) {
                selfCarePreviousMonthly.textContent = `${lastMonth} ${data[5].timeframes.monthly.previous}hrs`;
            } else {
                selfCarePreviousMonthly.textContent = `${lastMonth} ${data[5].timeframes.monthly.previous}hr`;
            }

        })
        .catch(error => {
            console.error(error);
        })
}

main();