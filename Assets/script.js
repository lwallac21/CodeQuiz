//Variable declarations
const startButton = $("#start-button");
const nextButton = $("#next-button");
const endButton = $("#end-button")
let shuffleQuestions, questionIndex;
const questionField = $("#question");
const answersButtons = $("answer-box");
let highscores = JSON.parse(window.localStorage.getItem("highscores")) || []
const maxHighscores = 5
let scoresList = document.getElementById("scores-list");
let scoreName = $("#score-name");
let showScore
let score = 0;
let currentScore;
let timerCount;
let playerName;
let answerBtn;

//Click events for the 2 main buttons
startButton.on("click", startQuiz);
nextButton.on("click", function () {
    questionIndex++
    initializeQuestion();
    quizScore();
    console.log(currentScore)
});
endButton.on("click", writeScore)

// Start quiz button function
function startQuiz() {
    playerName = $("#player-name").val();
    if ($("#player-name").val() == "") {
        alert("Please enter a name.")
        return;
    }

    //start quizTimer call and quizScore call
    quizTimer()

    //hide and show the necessary buttons
    $("#start-button").addClass("d-none");
    $("#question-box").removeClass("d-none");
    $("#player-name").addClass("d-none")
    $("#display-name").text(playerName.text)
    shuffleQuestions = questions;
    questionIndex = 0;
    nextQuestion();
};

//quiz Timer Function
function quizTimer() {
    timerCount = 100;
    countDown = setInterval(function () {
        timerCount--;
        if (timerCount <= 0) {
            clearInterval(countDown);
            alert("You have run out of time!");
        }
        document.getElementById("time-remaining").innerHTML = timerCount + " seconds";
    }, 1000);

}

function quizScore() {
    currentScore = score * timerCount
    showScore = currentScore + currentScore
    showScore+=currentScore

    $("#score-box").text(showScore)


}

//For next and start buttons, gets next question object in questions
function nextQuestion() {
    if (questionIndex < 9) {
        showQuestion(shuffleQuestions[questionIndex])
    }
    else hideAll();
}

//End of quiz hide all!
function hideAll() {
    $("#answer-box").addClass("d-none")
    $("#question-box").addClass("d-none")
    $("next-button").addClass("d-none")
    $("#end-button").removeClass("d-none")
    $("#controller").text("Your final score is " + currentScore)
    clearInterval(countDown);
}

function writeScore() {
    event.preventDefault()
    let newScore = {
        name: playerName,
        score: showScore
    }
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    $("#quiz").addClass("d-none");
    $("#high-score").removeClass("d-none");
    highscores.sort((a,b) =>  b.score - a.score)

    var newArray = highscores.slice(0,5);
    
    highscores.push("highscores", JSON.stringify(highscores))
    
    scoresList.innerHTML= newArray.map(score => {
        return `<li class="list-group-item">${score.name}-${score.score}</li>`

    }).join("");
    
    
}



//function for getting the next question object inside the questions array
function showQuestion(question) {
    questionField.text(question.question)
    question.answers.forEach(answer => {
        answerBtn = $("<button>");
        answerBtn.addClass('answerbtn btn btn-primary');
        answerBtn.text(answer.text);

        if (answer.correct) {
            answerBtn.attr("dataset", answer.correct);

        }
        answerBtn.on("click", selectAnswer);
        $("#answer-box").append(answerBtn);
    });


}

//hides next button after each question and hides old question buttons
function initializeQuestion() {
    nextButton.addClass("d-none");
    $("#answer-box").children().hide();
    nextQuestion();
}

//answerBtns select answer click event function that figures out whether clicked button is correct
function selectAnswer(event) {
    let selectedAnswer = event.target;
    let rightAnswer = selectedAnswer.hasAttribute("dataset");
    giveBtnClass(selectedAnswer, rightAnswer);
    document.querySelector(".answerbtn").disabled = true;
    
};

//changes classes to show correct, adds score
function giveBtnClass(element, correct) {
    clearBtnClass(element)
    nextButton.removeClass("d-none")
    if (correct) {
        element.classList.add("btn-success");
        score = score + 1;
    }
    else {
        element.classList.add("btn-danger");
        timerCount -= 10
    }

}
// gets rid of correct and wrong button classes
function clearBtnClass(element) {
    element.classList.remove("btn-success");
    element.classList.remove("btn-danger")
}



const questions = [
    {
        question: "What is the Jquery selector key symbol?",
        answers: [
            { text: '$', correct: true },
            { text: "#", correct: false },
            { text: "?", correct: false },
            { text: "+", correct: false },
        ]
    },
    {
        question: "What data type can NOT be saved in an object",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Array", correct: false },
            { text: "None of the above", correct: true },
        ]
    },
    {
        question: "What goes into the parentheses when DEFINING a function",
        answers: [
            { text: "arguments", correct: false },
            { text: "parameters", correct: true },
            { text: "keys", correct: false },
            { text: "messages", correct: false },
        ]
    },
    {
        question: "Which is an object in vanilla javascript?",
        answers: [
            { text: 'window', correct: true },
            { text: "house", correct: false },
            { text: "car", correct: false },
            { text: "Lawrence Wallace", correct: false },
        ]
    },
    {
        question: "Is Lawrence good at Javascript coding",
        answers: [
            { text: "yes, very good", correct: false },
            { text: "yes somewhat good", correct: false },
            { text: "no, very bad", correct: true },
            { text: "when he puts his mind to it.", correct: false },
        ]
    },
    {
        question: "What is the Jquery selector key symbol?",
        answers: [
            { text: '$', correct: true },
            { text: "#", correct: false },
            { text: "?", correct: false },
            { text: "+", correct: false },
        ]
    },
    {
        question: "What is the Jquery selector key symbol?",
        answers: [
            { text: '$', correct: true },
            { text: "#", correct: false },
            { text: "?", correct: false },
            { text: "+", correct: false },
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: 'JavaScript Object Notation', correct: true },
            { text: "Java Object Notation", correct: false },
            { text: "Just start object now", correct: false },
            { text: "Jason Statham's Oscar Nomination", correct: false },
        ]
    },
    {
        question: "How often should you commit to github when working on a javascript project",
        answers: [
            { text: 'Very often!', correct: true },
            { text: "When completed", correct: false },
            { text: "Never. Just push it, first time, every time.", correct: false },
            { text: "Don't know.", correct: false },
        ]
    }
]