let input=document.getElementById("inputBox");
let string="";
const buttons=Array.from(document.getElementsByClassName("Btn"));
const deleteBtn=document.getElementById("delete");
const equal=document.getElementById("equal");
const clear=document.getElementById("clear");
// console.log(clear)
clear.addEventListener("click",function(){
    string="";
    input.value=string;
})
deleteBtn.addEventListener("click",function(){
    string=string.substring(0,string.length-1);
    input.value=string;
})
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        string+=button.getAttribute("value");
        input.value=string;
    })
}) 

equal.addEventListener('click', function() {
    // console.log(eval(string));
    try {
        string=eval(string);
        input.value=string;
        string="";
    } catch (e) {
        input.value = 'Error';
        string="";
    }
});
