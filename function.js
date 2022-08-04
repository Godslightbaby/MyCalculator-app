const output =document.getElementById("output");


const ALL_BUTTONS = document.getElementsByClassName('btn7')
 


function btnclick(number){
output.value += number
}


function result(){
    let result = eval(output.value)
    output.value = result;
}

function delet(){
    output.value = output.value.slice (0, -1)
}

function reset(){
    output.value = ""
}

var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "lightgray";
      document.getElementById("output").style.backgroundColor =  "white";
      document.getElementById("h3").style.color = "black"
      document.getElementById("h5").style.color = "black"
      
      document.getElementById("btn").style.backgroundColor = "hsl(0, 5%, 81%)";
      document.getElementById("dels").style.background = "hsl(176, 100%, 44%)";
      document.getElementById("sets").style.background = "hsl(176, 100%, 44%)";
      document.getElementById("equals").style.background = " hsl(25, 98%, 40%)";
      document.getElementById("one").style.background = " hsl(25, 98%, 40%)";
      output.style.color = "black"
     for(let i = 0; i < ALL_BUTTONS.length; i++){
      ALL_BUTTONS[i].style.color = "black"
      ALL_BUTTONS[i].style.backgroundColor = "lightgray"
    }


    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = " hsl(222, 26%, 31%)";
      document.getElementById("h5").style.color = "white";
      document.getElementById("h3").style.color = "white";
      document.getElementById("output").style.backgroundColor =  "hsl(224, 36%, 15%)";
      document.getElementById("btn").style.backgroundColor = " hsl(223, 31%, 20%)";
      document.getElementById("dels").style.background = "hsl(225, 21%, 49%)";
      document.getElementById("sets").style.background = "hsl(225, 21%, 49%)";
      document.getElementById("equals").style.background = " hsl(6, 70%, 34%)";
      document.getElementById("two").style.background = " hsl(6, 70%, 34%)";
      output.style.color = "white"
      for(let i = 0; i < ALL_BUTTONS.length; i++){
        ALL_BUTTONS[i].style.color = "hsl(221, 14%, 31%)"
        ALL_BUTTONS[i].style.backgroundColor = "white"
      }
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(268, 75%, 9%)";
        document.getElementById("h5").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("h3").style.color = "hsl(52, 100%, 62%)";
        document.getElementById("output").style.backgroundColor =  "hsl(268, 71%, 12%)";
        document.getElementById("btn").style.backgroundColor = "hsl(268, 71%, 12%)";
        document.getElementById("dels").style.background = "hsl(281, 89%, 26%)";
        document.getElementById("sets").style.background = "hsl(281, 89%, 26%)";
        document.getElementById("equals").style.background = " hsl(177, 92%, 70%)";
        document.getElementById("three").style.background = " hsl(177, 92%, 70%)";
        output.style.color = " hsl(52, 100%, 62%)"
        for(let i = 0; i < ALL_BUTTONS.length; i++){
          ALL_BUTTONS[i].style.color = "hsl(52, 100%, 62%)"
          ALL_BUTTONS[i].style.backgroundColor = "hsl(268, 47%, 21%)"
        }
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});