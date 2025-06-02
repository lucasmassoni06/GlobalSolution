
const questions =[
  {
    question: "O que é uma enchente?",
    answers: [
      {id: 1, text: "Um fenômeno natural relacionado à seca", correct:false},
      {id: 2, text: "Um acúmulo excessivo de água em áreas habitadas", correct:true},
      {id: 3, text: "Um tipo de terremoto", correct:false},
      {id: 4, text: "Uma chuva fraca e constante", correct:false},
    ],
  },
  {
    question: "Qual é uma causa comum das enchentes urbanas?",
    answers: [
      {id: 1, text: "Falta de vento", correct:false},
      {id: 2, text: "Temperatura elevada", correct:false},
      {id: 3, text: "Obstrução de bueiros e galerias pluviais", correct:true},
      {id: 4, text: "Plantio de árvores", correct:false},
    ],
  },
  {
    question: "Qual é o principal efeito das enchentes para a população?",
    answers: [
      {id: 1, text: "Maior acesso à água potável", correct:false},
      {id: 2, text: "Perda de bens e risco à vida", correct:true},
      {id: 3, text: "Melhora da qualidade do ar", correct:false},
      {id: 4, text: "Aumento da biodiversidade", correct:false},
    ],
  },
  {
    question: "Qual é a diferença entre enchente e alagamento?",
    answers: [
      {id: 1, text: "Enchente é o transbordamento de rios; alagamento é o acúmulo de água em áreas urbanas", correct:true},
      {id: 2, text: "Alagamento ocorre no campo, enchente na cidade", correct:false},
      {id: 3, text: "Não existe diferença", correct:false},
      {id: 4, text: "Enchente ocorre sem água", correct:false},
    ],
  },
  {
    question: "Como os resíduos sólidos (lixo) contribuem para enchentes?",
    answers: [
      {id: 1, text: "Eles ajudam a filtrar a água", correct:false},
      {id: 2, text: "Refletem a luz solar", correct:false},
      {id: 3, text: "Obstruem os sistemas de drenagem", correct:true},
      {id: 4, text: "Aumentam o escoamento da água", correct:false},
    ],
  },
  {
    question: "Em caso de enchente, o que você NÃO deve fazer?",
    answers: [
      {id: 1, text: "Procurar locais altos", correct:false},
      {id: 2, text: "Desligar aparelhos elétricos", correct:false},
      {id: 3, text: "Entrar em áreas alagadas", correct:true},
      {id: 4, text: "Seguir instruções da Defesa Civil", correct:false},
    ],
  },
  {
    question: "Qual ação urbana ajuda a reduzir enchentes?",
    answers: [
      {id: 1, text: "Asfaltar todas as calçadas", correct:false},
      {id: 2, text: "Construir áreas permeáveis e plantar árvores", correct:true},
      {id: 3, text: "Jogar lixo em bueiros", correct:false},
      {id: 4, text: "Canalizar todos os rios", correct:false},
    ],
  },
  {
    question: "Como as enchentes afetam a saúde pública?",
    answers: [
      {id: 1, text: "Reduzem alergias", correct:false},
      {id: 2, text: "Diminuem doenças respiratórias", correct:false},
      {id: 3, text: "Podem causar doenças transmitidas por água contaminada", correct:true},
      {id: 4, text: "Melhoram a qualidade da água", correct:false},
    ],
  },
  {
    question: "O uso do solo influencia nas enchentes como?",
    answers: [
      {id: 1, text: "Quanto mais impermeável, maior o risco", correct:true},
      {id: 2, text: "Quanto mais agricultura, mais enchente", correct:false},
      {id: 3, text: "Não tem influência", correct:false},
      {id: 4, text: "Solo seco evita enchentes", correct:false},
    ],
  },
  {
    question: "Qual dessas atitudes ajuda a prevenir enchentes?",
    answers: [
      {id: 1, text: "Concretar todos os quintais", correct:false},
      {id: 2, text: "Construir em encostas íngremes", correct:false},
      {id: 3, text: "Jogar lixo no lixo e manter bueiros limpos", correct:true},
      {id: 4, text: "Cortar árvores da cidade", correct:false},
    ],
  },
]

const questionElement = document.getElementById("question"); 
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("button-proximo");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function resetState() {
  nextButton.style.display = "none";
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.dataset.id = answer.id;
    button.classList.add("button-quiz");
    button.addEventListener("click", selectAnswer);
    answersButton.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const selectedId = selectedButton.dataset.id;
  const answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.find((answer) => answer.correct);
  const isCorrect = selectedId == correctAnswer.id.toString();
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answersButton.children).forEach((button) => {
    if (button.dataset.id == correctAnswer.id.toString()) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}


function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Jogar de Novo!";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () =>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton ();
  } else {
    startQuiz ();
  }
})

startQuiz();