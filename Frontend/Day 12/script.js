let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        if(paragraph.style.textDecoration="none"){
            paragraph.style.textDecoration="line-through";}
        else{
            paragraph.style.textDecoration="underline";
        }
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);

    })
})

