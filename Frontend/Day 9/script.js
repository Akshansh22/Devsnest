
const b = document.querySelector('.outer');
console.log(b);
for(let x=0; x<400;x++) {
    b.innerHTML += '<div class="inner"></div>';
}
var clicked=0;
var not_clicked=400;
const boxes = document.querySelectorAll('.inner');

boxes.forEach( (box)=>{
    box.addEventListener('click', ()=>{
        if(box.classList.contains('boxclicked')){
            box.classList.remove('boxclicked');
            not_clicked+=1;
            clicked-=1;
            console.log(not_clicked,clicked);
        }
        else{
            box.classList.add('boxclicked');
            clicked+=1;
            not_clicked-=1;
            console.log(not_clicked,clicked);
        }
            // document.write(clicked);
            // document.write(not_clicked);
            document.getElementById("click").innerHTML = clicked;
            document.getElementById("nclick").innerHTML = not_clicked;

    // box.addEventListener('mouseover', ()=>{
    //     if(box.classList.contains('boxclicked')){
    //         // box.classList.remove('boxclicked');
            
    //     }
    //     else{
    //         box.classList.add('boxhover');
            
    //     }
        
        
    })
    
})
