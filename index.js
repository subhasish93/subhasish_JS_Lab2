//-------Questions--------//
  
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
  } 

  

//------Quiz-------//

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionByIndex = function() {
    return this.questions[this.questionIndex];
  }
  
  Quiz.prototype.checkOptionWithAnswer = function(answer) {
    if(this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++; 
    }
  
    this.questionIndex++;
  }
  
  Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
  }
  
  function loadQuestions() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;
  
       // show options for that question
          var choices = quiz.getQuestionByIndex().choices;
          for(var i = 0; i < choices.length; i++) {
              var element = document.getElementById("choice" + i); // choice0,choice1.....
              element.innerHTML = choices[i];  // display choice of option.
              handleOptionButton("btn" + i, choices[i]);    
          }
    
        showProgress();
    }
  };
  
  function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
  };
  
  
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  };
  
  function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + ".And mark percentage is: "+(quiz.score/questions.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  };
  
  // declare questions here
  const questions = [
    new Question("1. JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("2. Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("3. Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("4. Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("5. JavaScript is a ", ["Language", "Programming Language", "D  lopment", "All"], "Programming Language")
  ];
  
  // create quiz
   var quiz = new Quiz(questions);
  
  // display quiz
  loadQuestions();
  