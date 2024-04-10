let outputScreen = document.getElementById("output-screen")

function display(num){
    outputScreen.value +=num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(err){
        alert("invalid")
    }
}

function clearing(){
   outputScreen.value = "";
}

function delet(){
    outputScreen.value = outputScreen.value.slice(0,-2)
}