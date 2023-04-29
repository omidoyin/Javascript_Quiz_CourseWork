const data = [
    {
        id:1,
        question: "Which of these fish is actually a fish?",
        answers: [
            {answwer: "swordfish", iscorrect:true},
            {answwer: "jellyfish", iscorrect:false},
            {answwer: "starfish", iscorrect:false},
            {answwer: "crayfish", iscorrect:false},
        ],
    },
    {
        id:2,
        question: "A flutter is a group of: ",
        answers: [
            {answwer: "bees", iscorrect:false},
            {answwer: "penguins", iscorrect:false},
            {answwer: "butterflies", iscorrect:true},
            {answwer: "camels", iscorrect:false},
        ],
    },
    {
        id:3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            {answwer: "bats", iscorrect:false},
            {answwer: "vultures", iscorrect:true},
            {answwer: "ants", iscorrect:false},
            // {answwer: "crayfish", iscorrect:false},
        ],
    },
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAnswer;

const playAgain =()=>{
    qIndex=0;
    correctCount=0;
    wrongCount=0;
    total=0;
    selectedAnswer;
    showQuestion(qIndex)
}
play.addEventListener("click", ()=>{
    playAgain()
    resultScreen.style.display="none"
    gameScreen.style.display="block"
})

const showResult =()=>{
    resultScreen.style.display="block"
    gameScreen.style.display="none"
    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`
    resultScreen.querySelector(".score").textContent = `Score is: ${(correctCount-wrongCount)*10}`
}

const showQuestion = (qNumber) =>{
    if(qIndex === data.length){
        showResult();
    }
    selectedAnswer=null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>(
        `<div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.iscorrect}>
            <label for="1">${item.answwer}</label>
         </div>`
    )).join("")
    selectAnswer();
};

const selectAnswer =()=>{
    answersContainer.querySelectorAll("input").forEach((options)=>{
        options.addEventListener("click", (e)=>{
            selectedAnswer=e.target.value;
        })
    })
}

const submitAnswer = ()=> {
    submit.addEventListener("click", ()=>{
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ :wrongCount++
        qIndex++
        showQuestion(qIndex)
        } else alert("Select an answer!")
    })
}


submitAnswer();
showQuestion(qIndex);
