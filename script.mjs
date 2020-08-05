var questionDb = [{
    question: "Commonly used data types DO NOT include: ", 
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},

{
    question: "Arrays in JavaScript can be used to store: ", 
    choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above"
},

{
    question: "A useful tool used during development and debugging for printing content to the debugger is:", 
    choices: ["JavaScript", "Terminal or Bash", "For loops", "console.log"],
    answer: "console.log"
}

]
    var timeLeft = questionDb.length * 15
    var setIntervalId = null
    var indexQuestionDb = 0


    document.getElementById("startBtn").addEventListener("click", function(){
        document.getElementById("begin").classList.add("hide")
        document.getElementById("questions").classList.remove("hide")  

        setIntervalId = setInterval(countDown, 1000)
    })


    function countDown(){
        timeLeft--
        document.getElementById("timer").textContent = "Timer: " + timeLeft
        if(timeLeft === 0) {
            clearInterval(setIntervalId);
        }

        document.getElementById("questionTitle").textContent = questionDb[indexQuestionDb].question
        
        var choices = questionDb[indexQuestionDb].choices
        document.getElementById("choices").textContent = ""

        //Generate questions & answers
        for (var i =0; i < choices.length; i++){
            var button = document.createElement("button")
            document.getElementById("choices").classList.add("btn-primary")

            button.textContent = choices[i]

            button.addEventListener("click", function(choice){
                var rightAnswer = questionDb[indexQuestionDb].answer


                if(choice == rightAnswer){
                    alert("Correct")
                }else{
                    alert("Wrong")
                }
                indexQuestionDb++
            })
            document.getElementById("choices").appendChild(button)
        }
        
    }