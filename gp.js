p1name = localStorage.getItem("p1name");
p2name = localStorage.getItem("p2name");
p1score = 0;
p2score = 0;

document.getElementById("name1").innerHTML = p1name + ":";
document.getElementById("name2").innerHTML = p2name + ":";

document.getElementById("p1score").innerHTML = p1score;
document.getElementById("p2score").innerHTML = p2score;

document.getElementById("namee1").innerHTML = "Question Turn - "+ p1name;
document.getElementById("namee2").innerHTML = "Answer Turn - "+ p2name;

function send() {
  
    n1 = document.getElementById("i3").value;
    n2 = document.getElementById("i4").value;
    aa = parseInt(n1) * parseInt(n2);

    question_number = "<h4>" + n1 + "X" + n2 + "</h4>";
    input_box = "<br> Answer: <input id='answer_input' type='number' placeholder='enter your answer here'>"
      check_button =  "<br><br><button id='check' onclick='check()'> Check</button>";

        row = question_number + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("n1").value ="";
        document.getElementById("n2").value ="";

        

}

qt = "pl1"
at = "pl2"



function check(){
  useranswer = document.getElementById("answer_input").value
  if(useranswer == aa){
    if(at == "pl1"){
        p1score = p1score + 1;
        document.getElementById("p1score").innerHTML = p1score
    }
    else{
        p2score = p2score + 1
        document.getElementById("p2score").innerHTML = p2score
    }
}

    if(qt == "pl1"){
        qt = "pl2"
        document.getElementById("namee1").innerHTML = "Question turn - " + p2name;
    }
    else{
        qt = "pl1"
        document.getElementById("namee1").innerHTML = "Question turn - " + p1name;
    }


    if(at == "pl1"){
        at = "pl2"
        document.getElementById("namee2").innerHTML = "Answer turn - " + p2name;
    }
    else{
        at = "pl1"
        document.getElementById("namee2").innerHTML = "Answer turn - " + p1name;
    }

    document.getElementById("output").innerHTML = " "

    }





      