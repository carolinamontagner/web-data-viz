const data = [
    {
        question: "Qual é a principal característica do hip hop??",
        
        a: "Movimentos suaves e lentos",
        b: "Movimentos explosivos e energéticos",
        c: "Uso de castanholas",
        d: "Dança em par",
        correct: "b",

    },
    {
        question:" No balé clássico, como se chama a técnica de girar repetidamente sobre um pé?",
        a:"Plié",
        b:"Pirouette",
        c:"Tendu",
        d:"Relevé",
        correct: "b",
    },
    {
        question: "Qual dessas características é comum no Chair Dance?",
        a: "Uso de sapatilhas de ponta",
        b: " Ritmos latinos",
        c: "Movimentos acrobáticos com cadeiras",
        d: "Dança em pares fixos",
        correct: "c",

    },
    {
        question: "'Qual é uma característica marcante da dança Jazz?",
        a: "Movimentos rígidos e formais",
        b: "Expressão livre e movimentos energéticos",
        c: "Dança em silêncio total",
        d: "Uso exclusivo de trajes tradicionais",
        correct: "b",

    },


]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")
const optionE = document.getElementById("optionE")

const submitBtn = document.getElementById("botaoQuiz")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = data[currentQuiz]

    questionEl.innerText = currentQuizData.question
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
    optionD.innerText = currentQuizData.d
    optionE.innerText = currentQuizData.e


}

function deselectAnswer() {
    answerEls.forEach((answerEl) => (answerEl.checked = false
    )
    )

}

function getSelected(){
    let answer

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () =>{
    const answer = getSelected()

if(answer){
    if(answer === data[currentQuiz].correct)
    score++
}
currentQuiz++

if(currentQuiz < data.length){
    loadQuiz()
}
else{
    quiz.innerHTML = `<h2>Você acertou ${score}/${data.length} questões!</h2>
    <button style="width: 200px; height: 150px;" onclick="location.reload()">Vamos fazer de novo?</button>`
 
}
})