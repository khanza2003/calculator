//display content in calculator screen
function displayContent(content){
    result.value+=content
}
function calScreenClear(){
 result.value=""
}
function caloutput(){
    result.value = eval(result.value)
}
function removedigit(){
    result.value=result.value.slice(0,-1)
}