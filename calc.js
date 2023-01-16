function displaydata(data){
    result.value+=data
}
function cleardata(data){
    result.value=""
}
function evaluateexp(){
    result.value=eval(result.value)
}
function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}
