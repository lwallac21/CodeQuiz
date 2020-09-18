const startButton = $("#start-button");
const nextButton = $("#next-button");
let shuffleQuestions, questionIndex;
const questionField = $("#question");
const answersButtons = $("answer-box");
let score = "";
let currentScore
let timerCount

let timerPenalty
let currentTime


startButton.on("click", startQuiz);
nextButton.on("click", function(){
    initializeQuestion()
});

function startQuiz() {
    quizTimer()
    $("#start-button").addClass("d-none");
    $("#question-box").removeClass("d-none");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    nextQuestion();
};
 function quizTimer() {
        timerCount = 100;
        currentScore = score * timerCount;
        countDown = setInterval(function () {
        timerCount --;
        if (timerCount <= 0) {
            clearInterval(countDown);
            alert("GAME OVER!");
        }
        document.getElementById("time-remaining").innerHTML = timerCount + " seconds";
    }, 1000);
    
 }

function nextQuestion() {
    showQuestion(shuffleQuestions[questionIndex])

}

function showQuestion(question) {
    questionField.text(question.question)
    question.answers.forEach(answer => {
        const answerBtn = $("<button>");
        answerBtn.addClass('btn, btn-primary');
        answerBtn.text(answer.text);

        if (answer.correct) {
            answerBtn.attr("dataset", answer.correct);

        }
        answerBtn.on("click", selectAnswer);
        $("#answer-box").append(answerBtn);

    });


}

function initializeQuestion() {
    nextButton.addClass("d-none")
    questionIndex++
}

function selectAnswer(event) {
    let selectedAnswer = event.target;
    let rightAnswer = selectedAnswer.hasAttribute("dataset");
    giveBtnClass(selectedAnswer, rightAnswer)
console.log(score)

}

function giveBtnClass(element, correct) {
    clearBtnClass(element)
    nextButton.removeClass("d-none")
    if (correct) {
        element.classList.add("btn-success");
        score = score +10
    }
    else {
        element.classList.add("btn-danger");
        timerCount-= 10
    }

}

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
]