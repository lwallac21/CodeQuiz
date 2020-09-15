const startButton = $("#start-button")
const nextButton = $("#next-button")
let shuffleQuestions, questionIndex
var questionField = $("#question")
var answersButtons = $("answer-box")
let score
startButton.on("click", startQuiz);

function startQuiz() {
    var timerCount = 100
    var countDown =setInterval(function() {
        timerCount = timerCount - 1;
        if (timerCount <= 0)
        {
            clearInterval(countDown);
            alert("GAME OVER!");
        }
    document.getElementById("time-remaining").innerHTML = timerCount + " seconds";
    }, 1000);
    $("#start-button").addClass("d-none");
    $("#question-box").removeClass("d-none");
    $("#next-button").removeClass("d-none");
    shuffleQuestions = questions.sort(() => Math.random()-.5);
    questionIndex = 0;
    nextQuestion();
    console.log(questionIndex)
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
        $("#answer-box").append(answerBtn);
    });


}

function selectAnswer() {
    if (answer.correct) {
        this.addClass(btn.correct)
    }

}

const questions = [
    {
        question: "What is the Jquery selector key symbol?",
        answers: [
            {text:  '$', correct: true },
            {text: "#", correct: false},
            {text: "?", correct: false},
            {text: "+", correct: false},
        ]
    }
]