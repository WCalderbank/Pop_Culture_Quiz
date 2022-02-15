const quizInfo = [
  {
    question:
      "In Game of Thrones the motto 'Winter is Coming' are the words of which House?",
    a: "House Targaren",
    b: "House Karstark",
    c: "House Stark",
    d: "House Lannister",
    answer: "C",
  },
  {
    question:
      "What year did Marty Mcfly get stuck in during'Back to the Future'",
    a: "1965",
    b: "1955",
    c: "1975",
    d: "1945",
    answer: "B",
  },
  {
    question:
      "In the tv show Scrubs, the main character JD is consistantly tormented and bullied by whom?",
    a: "A Garbage man",
    b: "A Male Nurse",
    c: "A Janitor",
    d: "A Cafeteria Cook",
    answer: "C",
  },
  {
    question: "The Term Pokemon is short for what phrase?",
    a: "Poking Monsters",
    b: "Portable Monsters",
    c: "Pintsize Monsters",
    d: "Pocket Monsters",
    answer: "D",
  },
  {
    question:
      "What is the name of mercinary Jayne Cobb's gun in the show Firefly",
    a: "Vera",
    b: "Vicky",
    c: "Veronica ",
    d: "Victoria",
    answer: "A",
  },
  {
    question: "In My Hero Academia what is Mr Aizawa's hero name?",
    a: "Wraith",
    b: "Blink",
    c: "Eraserhead",
    d: "Shadow",
    answer: "C",
  },
  {
    question: "Magneto is a mutant who can...?",
    a: "Control the weather",
    b: "Control metal",
    c: "Shapeshift",
    d: "Shoot lasers",
    answer: "B",
  },
  {
    question:
      "The character of vizcini in 'The Princess Bride' keeps exclaiming what word?",
    a: "Impossible",
    b: "Inevitable",
    c: "Incredible",
    d: "Inconcievable",
    answer: "D",
  },
  {
    question:
      "Hokey religions and ancient weapons are no match for a good _____ at your side, kid.",
    a: "Blaster",
    b: "Lightsaber",
    c: "Firearm",
    d: "Crossbow",
    answer: "A",
  },
  {
    question:
      "The bard Jaskier in the tv show 'The Witcher' is known by what name in the books series of the same name",
    a: "Buttercup",
    b: "Dandilion",
    c: "Daffodil",
    d: "Daisy",
    answer: "B",
  },
];

const questionData = document.getElementById("questionData");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const enterBtn = document.getElementById("enter_btn");

let singleQuestion = 0;

newQuestion();

function newQuestion() {
  const nextQuestion = quizInfo[singleQuestion];
  questionData.innerText = nextQuestion.question;

  a1.innerText = nextQuestion.a;
  a2.innerText = nextQuestion.b;
  a3.innerText = nextQuestion.c;
  a4.innerText = nextQuestion.d;
}

enterBtn.addEventListener("click", () => {
  singleQuestion++;
  if (singleQuestion < quizInfo.length) {
    newQuestion();
  } else {
    alert("Game Over");
  }
});
