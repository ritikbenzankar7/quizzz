
let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id: 4,
      question: " 'DB' computer abbreviation usually means?",
      answer: "DataBase",
      options: [
        "DataBase",
        "Double Byte",
        "Data Block",
        "None of these"
      ]
    },
    {
      id: 5,
      question: "What is FMD?",
      answer: "Fluorescent Multi-Layer Disc",
      options: [
        "Fluorescent Multi-Layer Disc",
        "Flash Media Driver",
        "Fast-Ethernet Measuring Device",
        "None of these"
      ]
    },
    {
      id: 6,
      question: "How many bits is a byte?",
      answer: "8",
      options: [
        "8",
        "4",
        "16",
        "32"
      ]
    },
    {
      id: 7,
      question: "A JPG is:",
      answer: "A format for an image file",
      options: [
        "A format for an image file",
        " A Jumper Programmed Graphic",
        "A type of hard disk",
        "A unit of measure for memory"
      ]
    },
    {
      id: 8,
      question: "Which was an early mainframe computer?",
      answer: "ENIAC",
      options: [
        "ENIAC",
        "EDVAC",
        "UNIC",
        "BRAINIA"
      ]
    },
    {
      id: 9,
      question: "Main circuit board in a computer is:",
      answer: "Mother board",
      options: [
        "Mother board",
        "Decoder",
        "Highlight",
        "None of these"
      ]
    },
    {
      id: 10,
      question: "ISP stands for:",
      answer: "Internet Service Provider",
      options: [
        "Internet Service Provider",
        "Internet Survey Period",
        "Integreted Service Provider",
        "Internet Security Protocol"
      ]
    },
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "newend.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }