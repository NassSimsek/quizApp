//Create a question constructor
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;

}

//Add metot in Question Prototype  Dikkat this Questionu gösterir , Parametrede ki answer gönderildiği nesneyi gösterir
Question.prototype.checkAnswer=function(answer){
   return this.answer===answer;
};

//Quiz Constructor
function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}

//Quiz getQuestion Prototype
Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}

//Quiz isFinish
Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex;
}

//Quiz Guess
Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


//create question objects
var q1=new Question("What is the best programming language?",["C#","JavaScript","Pyhton","Asp.net"],"JavaScript");
var q2=new Question("What is the best popular programming language?",["C#","Node.js","Visual Basic","JavaScript"],"JavaScript");
var q3=new Question("What is the best modern programming language?",["C#","JavaScript","Pyhton","Asp.Net"],"JavaScript");
var q4=new Question("Which of the choices below is the first and only love of Kelim's life, the greatest beauty and happiness of Kelim's life?",["Nas","Nas.js","Visual Nas","NasScript"],"Nas");
var questions=[q1,q2,q3,q4];

//Start Quiz
var quiz=new Quiz(questions);

loadQuestion();
  function loadQuestion(){
      if(quiz.isFinish()){
          showScore();
      }else{
          var question=quiz.getQuestion();
          var choices=question.choices;
          document.querySelector('#question').textContent=question.text;

          for(var i=0; i<choices.length; i++){
              var element=document.querySelector('#choice'+i);
              element.innerHTML=choices[i];

              guess('btn'+i,choices[i]);
          }
          showProgress();
      }
  }
 



function guess(id,guess){
var btn=document.getElementById(id);
btn.onclick=function(){
    quiz.guess(guess);
    loadQuestion();
}

}



  function showScore(){
      var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
      document.querySelector('.card-body').innerHTML=html;

  }


  function showProgress(){
      var totalQuestion=quiz.questions.length;
      var questionNumber=quiz.questionIndex+1;
      document.querySelector('#progress').innerHTML='Question '+ questionNumber + ' of '+totalQuestion;
  }