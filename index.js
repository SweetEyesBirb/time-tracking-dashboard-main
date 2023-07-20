
function main() {

    /*
    // Get all the tab links
    const tabLinks = document.querySelectorAll('.tab');

    // Add click event listeners to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // event.preventDefault(); // Prevent the default link behavior

            // Remove the "active" class from all tab links
            tabLinks.forEach(tab => tab.classList.remove('active'));

            // Add the "active" class to the clicked tab link
            this.classList.add('active');
        });
    }); */

    // card headers
    const workHeader = document.querySelector(".work-title");
    const playHeader = document.querySelector(".play-title");
    const studyHeader = document.querySelector(".study-title");
    const exerciseHeader = document.querySelector(".exercise-title");
    const socialHeader = document.querySelector(".social-title");
    const selfCareHeader = document.querySelector(".self-care-title");


    fetch("data.json")
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
            console.error(error);
        })


}

main();