//display numbers in the text box
function displaynum(num){
    result.value +=num
}
//clear the content in text box
function clearbox(){
    result.value=""
}

//evaluate  expression

function evaluateExpr(){
  
    result.value=eval(result.value)
}


//backspace =====remove values from teext box

function removeitem(){
    currentexpr=result.value
    result.value=currentexpr.slice(0,-1)
}