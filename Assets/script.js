const startButton = $("#start-button")
const nextButton = $("#next-button")
let shuffleQuestions, questionIndex
const questionField = $("#question")
const answersButtons = $("answer-box")
let score = 0
let timerCount = 0
let timerPenalty



startButton.on("click", startQuiz);
nextButton.on("click", function(){
    questionIndex++
    showQuestion()
})
function startQuiz() {
    quizTimer(timerCount)
    $("#start-button").addClass("d-none");
    $("#question-box").removeClass("d-none");
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    questionIndex = 0;
    nextQuestion();
}
 function quizTimer(timerCount) {
        timerCount = 100
        countDown = setInterval(function () {
        timerCount = timerCount - 1;
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
}

function selectAnswer(event) {
    let selectedAnswer = event.target;
    let rightAnswer = selectedAnswer.hasAttribute("dataset");
    if (rightAnswer) {
        selectedAnswer.addClass("btn-success");
        score = score+10
    }
    else {
        selectedAnswer.addClass("btn-warning");
        timerCount = timerCount - 10
    }
console.log(score)

}

animals.rightAnswer.length(score)

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