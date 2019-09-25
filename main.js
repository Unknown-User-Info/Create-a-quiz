document.getElementById("mark-quiz").addEventListener("click", markQuiz);

//Marking Quiz
function markQuiz() {
    //Get question answers
    let questionDate = Number(document.getElementById("question-date").value);
    let questionCondiment = document.getElementById("question-condiment").value;
    let questionFlag = document.getElementById("question-flag").value;
    let questionAnimal = document.getElementById("question-animal").value;

    questionCondiment = questionCondiment.toLowerCase();
    questionFlag = questionFlag.toLowerCase();
    questionAnimal = questionAnimal.toLowerCase();

    let score = 0;
    let numberScore = 0;

    //Correct the answers
    if (questionDate == "1867") {
        document.getElementById("question-date").classList.add("correct")
        score = score + 1;
        numberScore = numberScore + 1;
    } else {
        document.getElementById("question-date").classList.add("incorrect")
    }

    if (questionCondiment == "maple syrup" || questionCondiment == "pancake syrup" || questionCondiment == "waffle syrup" || questionCondiment == "syrup") {
        document.getElementById("question-condiment").classList.add("correct")
        score = score + 1;
        numberScore = numberScore + 1;
    } else {
        document.getElementById("question-condiment").classList.add("incorrect")
    }

    if (questionFlag == "white and red" || questionFlag == "red and white" || questionFlag == "red white" || questionFlag == "white red" || questionFlag == "white, red" || questionFlag == "white,red" || questionFlag == "red, white" || questionFlag == "red,white") {
        document.getElementById("question-flag").classList.add("correct")
        score = score + 1;
        numberScore = numberScore + 1;
    } else {
        document.getElementById("question-flag").classList.add("incorrect")
    }

    if (questionAnimal == "beaver" || questionAnimal == "the beaver") {
        document.getElementById("question-animal").classList.add("correct")
        score = score + 1;
        numberScore = numberScore + 1;
    } else {
        document.getElementById("question-animal").classList.add("incorrect")
    }

    score = score/4;

    score = score*100;

    //Display correct answers
    document.getElementById("date-answer").innerHTML = "The correct answer is '1867'";
    document.getElementById("condiment-answer").innerHTML = "The correct answer is 'maple syrup'";
    document.getElementById("flag-answer").innerHTML = "The correct answer is 'white and red' or 'red and white'";
    document.getElementById("animal-answer").innerHTML = "The correct answer is 'beaver'";

    //Display score
    document.getElementById("overall-score").innerHTML = "You got " + numberScore + "/4 " + "which is " + score + "%";
    
}