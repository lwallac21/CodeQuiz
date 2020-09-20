//Variable declarations
const startButton = $("#start-button");
const nextButton = $("#next-button");
let shuffleQuestions, questionIndex;
const questionField = $("#question");
const answersButtons = $("answer-box");
let scoreName = $("#score-name");
let score = "";
let currentScore = 0;
let timerCount;
let playerName;

//Click events for the 2 main buttons
startButton.on("click", startQuiz);
nextButton.on("click", function(){
    questionIndex++
    initializeQuestion();
    quizScore();
});

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
    scoreName.text(playerName.text)
    shuffleQuestions = questions;
    questionIndex = 0;
    nextQuestion();
};

//quiz Timer Function
 function quizTimer() {
        timerCount = 100;
        countDown = setInterval(function () {
        timerCount --;
        if (timerCount <= 0) {
            clearInterval(countDown);
            alert("GAME OVER!");
        }
        document.getElementById("time-remaining").innerHTML = timerCount + " seconds";
    }, 1000);
    
 }

 function quizScore() {
    let showScore = currentScore
    currentScore = score * timerCount
    
     
     $("#score-box").text(currentScore+showScore)


 }

 //For next and start buttons, gets next question object in questions
function nextQuestion() {
    showQuestion(shuffleQuestions[questionIndex])

}

//function for getting the next question object inside the questions array
function showQuestion(question) {
    questionField.text(question.question)
    question.answers.forEach(answer => {
        const answerBtn = $("<button>");
        answerBtn.addClass('btn, btn-primary');
        answerBtn.text(answer.text);

        if (answer.correct) {
            answerBtn.attr("dataset", answer.correct);

        }
        if (questionIndex >= questions.length - 1) {
            alert("Game over! Your final score was: ", currentScore)
            return
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
    giveBtnClass(selectedAnswer, rightAnswer)
console.log(score)

}

//changes classes to show correct, adds score
function giveBtnClass(element, correct) {
    clearBtnClass(element)
    nextButton.removeClass("d-none")
    if (correct) {
        element.classList.add("btn-success");
        score += 1
    }
    else {
        element.classList.add("btn-danger");
        timerCount-= 10
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
    }
]