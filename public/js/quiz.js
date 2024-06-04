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
        question: "Qual é uma característica marcante da dança Jazz?",
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

    let id_usuario = sessionStorage.getItem("ID_USUARIO");

    fetch("/medidas/quiz", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       // crie um atributo que recebe o valor recuperado aqui
       // Agora vá para o arquivo routes/usuario.js
       idUsuario: id_usuario,
        acertos: score
 
       
     })
   })
   console.log("aaaa")
    quiz.innerHTML = `<h2>Você acertou ${score}/${data.length} questões!</h2>
    <button style=" display: inline-block;
    background: #ecc998;
    color: #000;
    border: none;
    padding: 10px 20px;
    align-content: center;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;;" onclick="location.reload()">Vamos fazer de novo?</button>`
}
})