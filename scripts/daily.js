
function main() {

    // work info cads
    const workCurrentDaily = document.getElementById("work-daily-current");
    const workPreviousDaily = document.getElementById("work-daily-previous");

    // play info cards
    const playCurrentDaily = document.getElementById("play-daily-current");
    const playPreviousDaily = document.getElementById("play-daily-previous");

    // study info cards
    const studyCurrentDaily = document.getElementById("study-daily-current");
    const studyPreviousDaily = document.getElementById("study-daily-previous");

    // exercise info cards
    const exerciseCurrentDaily = document.getElementById("exercise-daily-current");
    const exercisePreviousDaily = document.getElementById("exercise-daily-previous");

    // social info cards
    const socialCurrentDaily = document.getElementById("social-daily-current");
    const socialPreviousDaily = document.getElementById("social-daily-previous");

    // self-care info cards
    const selfCareCurrentDaily = document.getElementById("self-care-daily-current");
    const selfCarePreviousDaily = document.getElementById("self-care-daily-previous");


    fetch("data/data.json")
        .then(response => response.json())
        .then(data => {

            const work = data.find(titleA => titleA.title == "Work");
            const play = data.find(titleB => titleB.title == "Play");
            const study = data.find(titleC => titleC.title == "Study");
            const exercise = data.find(titleD => titleD.title == "Exercise");
            const social = data.find(titleE => titleE.title == "Social");
            const selfCare = data.find(titleF => titleF.title == "Self Care");

            const yesterday = "Yesterday";


            // else statements for info cards
            // work cards
            if (work.timeframes.daily.current !== 1) {
                workCurrentDaily.textContent = work.timeframes.daily.current + "hrs";
            } else {
                workCurrentDaily.textContent = work.timeframes.daily.current + "hr";
            }

            if (work.timeframes.daily.previous !== 1) {
                workPreviousDaily.textContent = `${yesterday} ${work.timeframes.daily.previous}hrs`;
            } else {
                workPreviousDaily.textContent = `${yesterday} ${work.timeframes.daily.previous}hr`;
            }

            // play cards
            if (play.timeframes.daily.current !== 1) {
                playCurrentDaily.textContent = play.timeframes.daily.current + "hrs";
            } else {
                playCurrentDaily.textContent = play.timeframes.daily.current + "hr";
            }

            if (play.timeframes.daily.previous !== 1) {
                playPreviousDaily.textContent = `${yesterday} ${play.timeframes.daily.previous}hrs`;
            } else {
                playPreviousDaily.textContent = `${yesterday} ${play.timeframes.daily.previous}hr`;
            }

            // study cards
            if (study.timeframes.daily.current !== 1) {
                studyCurrentDaily.textContent = study.timeframes.daily.current + "hrs";
            } else {
                studyCurrentDaily.textContent = study.timeframes.daily.current + "hr";
            }

            if (study.timeframes.daily.previous !== 1) {
                studyPreviousDaily.textContent = `${yesterday} ${study.timeframes.daily.previous}hrs`;
            } else {
                studyPreviousDaily.textContent = `${yesterday} ${study.timeframes.daily.previous}hr`;
            }

            // exercise cards
            if (exercise.timeframes.daily.current !== 1) {
                exerciseCurrentDaily.textContent = exercise.timeframes.daily.current + "hrs";
            } else {
                exerciseCurrentDaily.textContent = exercise.timeframes.daily.current + "hr";
            }

            if (exercise.timeframes.daily.previous !== 1) {
                exercisePreviousDaily.textContent = `${yesterday} ${exercise.timeframes.daily.previous}hrs`;
            } else {
                exercisePreviousDaily.textContent = `${yesterday} ${exercise.timeframes.daily.previous}hr`;
            }

            // social cards
            if (social.timeframes.daily.current !== 1) {
                socialCurrentDaily.textContent = social.timeframes.daily.current + "hrs";
            } else {
                socialCurrentDaily.textContent = social.timeframes.daily.current + "hr";
            }

            if (social.timeframes.daily.previous !== 1) {
                socialPreviousDaily.textContent = `${yesterday} ${social.timeframes.daily.previous}hrs`;
            } else {
                socialPreviousDaily.textContent = `${yesterday} ${social.timeframes.daily.previous}hr`;
            }

            // self-care cards
            if (selfCare.timeframes.daily.current !== 1) {
                selfCareCurrentDaily.textContent = selfCare.timeframes.daily.current + "hrs";
            } else {
                selfCareCurrentDaily.textContent = selfCare.timeframes.daily.current + "hr";
            }

            if (selfCare.timeframes.daily.previous !== 1) {
                selfCarePreviousDaily.textContent = `${yesterday} ${selfCare.timeframes.daily.previous}hrs`;
            } else {
                selfCarePreviousDaily.textContent = `${yesterday} ${selfCare.timeframes.daily.previous}hr`;
            }

        })
        .catch(error => {
            console.error(error);
        })

}

main();