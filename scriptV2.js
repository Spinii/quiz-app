let quizContainer = document.getElementById("kviz");
let kvizQuestion = document.getElementById("kviz-tekst");
let btn1 = document.getElementById("btn1");
let buttonsContainer = document.getElementById("buttons");

let currentQuestionIndex = -1;
let userScore = 0;

const quizData = [
    {
        pitanje: "Prvo pitanje: What is the capital of France?",
        odgovori: ["A) Šibenik", "B) London", "C) Lyon", "D) Paris"],
        tocanOdgovor: "D) Paris"
    },
    {
        pitanje: "Drugo pitanje: What is the capital of Croatia?",
        odgovori: ["A) New York", "B) Melburn", "C) Zagreb", "D) Tokyo"],
        tocanOdgovor: "C) Zagreb"
    },
    {
        pitanje: "Trece pitanje: In which year did the United States declare its independence?",
        odgovori: ["A) 1776", "B) 1789", "C) 1801", "D) 1812"],
        tocanOdgovor: "A) 1776"
    },
    {
        pitanje: "Cetvrto pitanje: Who wrote the play 'Romeo and Juliet'?",
        odgovori: ["A) Jane Austen", "B) William Shakespeare", "C) Charles Dickens", "D) Mark Twain"],
        tocanOdgovor: "B) William Shakespeare"
    },
    {
        pitanje: "Peto pitanje: What is the chemical symbol for gold?",
        odgovori: ["A) Gd", "B)  Ag", "C)  Au", "D)  Fe"],
        tocanOdgovor: "C)  Au"
    }
]


function startQuiz(){
    displayQuestion();
}


function displayQuestion(){
    kvizQuestion.style = "none";
    kvizQuestion.innerHTML = `${currentQuestionIndex + 1}: ${quizData[currentQuestionIndex].pitanje}`;

    buttonsContainer.style.display = "block";
    btn1.style.display = "none";

    buttonsContainer.innerHTML = "";

    quizData[currentQuestionIndex].odgovori.forEach((odgovor, index) => {
        let btn = document.createElement("button");
        btn.innerHTML = odgovor;
        btn.addEventListener("click", function(){
            checkAnswer(btn.innerHTML, quizData[currentQuestionIndex].tocanOdgovor);
        });
        buttonsContainer.appendChild(btn);
    })
}

function checkAnswer(odabraniOdgovor, tocanOdgovor){
    if(odabraniOdgovor === tocanOdgovor){
        kvizQuestion.innerHTML = "Tocan odgovor! Molim nastavite dalje!";
        kvizQuestion.style.backgroundColor = "green"
        kvizQuestion.style.padding = "1rem";
        kvizQuestion.style.color = "white";
        kvizQuestion.style.fontWeight = "bold";
        userScore++
    }
    else{
        kvizQuestion.innerHTML = "Nazalost netocan odgovor! Nastavite dalje!"
        kvizQuestion.style.backgroundColor = "red"
        kvizQuestion.style.padding = "1rem";
        kvizQuestion.style.color = "white";
        kvizQuestion.style.fontWeight = "bold";
    }

    btn1.style.display = "block";
    btn1.innerHTML = "Dalje"

    buttonsContainer.style.display = "none";

}


btn1.addEventListener("click", function(){
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
})


function endQuiz(){
    kvizQuestion.innerHTML = `Cestitamo! Odgovorili ste na ${userScore} od ${quizData.length} pitanja!`
    buttonsContainer.style.display = "none";
    btn1.style.display = "block";
    btn1.innerHTML = "Ponovi quiz!"
    currentQuestionIndex = 0;
    btn1.addEventListener("click", () => {
        location.reload();
    })
}