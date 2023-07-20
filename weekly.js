function main() {

    // work info cads    
    const workCurrentWeekly = document.getElementById("work-weekly-current");
    const workPreviousWeekly = document.getElementById("work-weekly-previous");

    // play info cards
    const playCurrentWeekly = document.getElementById("play-weekly-current");
    const playPreviousWeekly = document.getElementById("play-weekly-previous");

    // study info cards
    const studyCurrentWeekly = document.getElementById("study-weekly-current");
    const studyPreviousWeekly = document.getElementById("study-weekly-previous");

    // exercise info cards
    const exerciseCurrentWeekly = document.getElementById("exercise-weekly-current");
    const exercisePreviousWeekly = document.getElementById("exercise-weekly-previous");

    // social info cards
    const socialCurrentWeekly = document.getElementById("social-weekly-current");
    const socialPreviousWeekly = document.getElementById("social-weekly-previous");

    // self-care info cards
    const selfCareCurrentWeekly = document.getElementById("self-care-weekly-current");
    const selfCarePreviousWeekly = document.getElementById("self-care-weekly-previous");


    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data[0].timeframes.daily.current);
            console.log(data);

            // const work = data.find(titleA => titleA.title == "Work");
            // const play = data.find(titleB => titleB.title == "Play");
            // const study = data.find(titleC => titleC.title == "Study");
            // const exercise = data.find(titleD => titleD.title == "Exercise");
            // const social = data.find(titleE => titleE.title == "Social");
            // const selfCare = data.find(titleF => titleF.title == "Self Care");

            const lastWeek = "Last Week";

            // work cards
            if (data[0].timeframes.weekly.current !== 1) {
                workCurrentWeekly.textContent = data[0].timeframes.weekly.current + "hrs";
            } else {
                workCurrentWeekly.textContent = data[0].timeframes.weekly.current + "hr";
            }

            if (data[0].timeframes.weekly.previous !== 1) {
                workPreviousWeekly.textContent = `${lastWeek} ${data[0].timeframes.weekly.previous}hrs`;
            } else {
                workPreviousWeekly.textContent = `${lastWeek} ${data[0].timeframes.weekly.previous}hr`;
            }

            // play cards
            if (data[1].timeframes.weekly.current !== 1) {
                playCurrentWeekly.textContent = data[1].timeframes.weekly.current + "hrs";
            } else {
                playCurrentWeekly.textContent = data[1].timeframes.weekly.current + "hr";
            }

            if (data[1].timeframes.weekly.previous !== 1) {
                playPreviousWeekly.textContent = `${lastWeek} ${data[1].timeframes.weekly.previous}hrs`;
            } else {
                playPreviousWeekly.textContent = `${lastWeek} ${data[1].timeframes.weekly.previous}hr`;
            }

            // study cards
            if (data[2].timeframes.weekly.current !== 1) {
                studyCurrentWeekly.textContent = data[2].timeframes.weekly.current + "hrs";
            } else {
                studyCurrentWeekly.textContent = data[2].timeframes.weekly.current + "hr";
            }

            if (data[2].timeframes.weekly.previous !== 1) {
                studyPreviousWeekly.textContent = `${lastWeek} ${data[2].timeframes.weekly.previous}hrs`;
            } else {
                studyPreviousWeekly.textContent = `${lastWeek} ${data[2].timeframes.weekly.previous}hr`;
            }

            // exercise cards
            if (data[3].timeframes.weekly.current !== 1) {
                exerciseCurrentWeekly.textContent = data[3].timeframes.weekly.current + "hrs";
            } else {
                exerciseCurrentWeekly.textContent = data[3].timeframes.weekly.current + "hr";
            }

            if (data[3].timeframes.weekly.previous !== 1) {
                exercisePreviousWeekly.textContent = `${lastWeek} ${data[3].timeframes.weekly.previous}hrs`;
            } else {
                exercisePreviousWeekly.textContent = `${lastWeek} ${data[3].timeframes.weekly.previous}hr`;
            }

            // social cards
            if (data[4].timeframes.weekly.current !== 1) {
                socialCurrentWeekly.textContent = data[4].timeframes.weekly.current + "hrs";
            } else {
                socialCurrentWeekly.textContent = data[4].timeframes.weekly.current + "hr";
            }

            if (data[4].timeframes.weekly.previous !== 1) {
                socialPreviousWeekly.textContent = `${lastWeek} ${data[4].timeframes.weekly.previous}hrs`;
            } else {
                socialPreviousWeekly.textContent = `${lastWeek} ${data[4].timeframes.weekly.previous}hr`;
            }

            // self-care cards
            if (data[5].timeframes.weekly.current !== 1) {
                selfCareCurrentWeekly.textContent = data[5].timeframes.weekly.current + "hrs";
            } else {
                selfCareCurrentWeekly.textContent = data[5].timeframes.weekly.current + "hr";
            }

            if (data[5].timeframes.weekly.previous !== 1) {
                selfCarePreviousWeekly.textContent = `${lastWeek} ${data[5].timeframes.weekly.previous}hrs`;
            } else {
                selfCarePreviousWeekly.textContent = `${lastWeek} ${data[5].timeframes.weekly.previous}hr`;
            }


        })
        .catch(error => {
            console.error(error);
        })
}

main();