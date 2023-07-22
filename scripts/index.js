
function main() {

    // card headers
    const workHeader = document.querySelector(".work-title");
    const playHeader = document.querySelector(".play-title");
    const studyHeader = document.querySelector(".study-title");
    const exerciseHeader = document.querySelector(".exercise-title");
    const socialHeader = document.querySelector(".social-title");
    const selfCareHeader = document.querySelector(".self-care-title");

    // Get the current page's path
    const currentPagePath = window.location.pathname;

    // Check if the current page is inside the 'pages' directory
    const isInsidePagesDirectory = currentPagePath.includes('/pages/');

    // Construct the correct relative path to data.json based on the current page
    const dataJsonPath = isInsidePagesDirectory ? '../../data/data.json' : '../data/data.json';



    fetch(dataJsonPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const work = data.find(titleA => titleA.title == "Work");
            const play = data.find(titleB => titleB.title == "Play");
            const study = data.find(titleC => titleC.title == "Study");
            const exercise = data.find(titleD => titleD.title == "Exercise");
            const social = data.find(titleE => titleE.title == "Social");
            const selfCare = data.find(titleF => titleF.title == "Self Care");

            workHeader.textContent = work.title;
            playHeader.textContent = play.title;
            studyHeader.textContent = study.title;
            exerciseHeader.textContent = exercise.title;
            socialHeader.textContent = social.title;
            selfCareHeader.textContent = selfCare.title;

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
}

main();