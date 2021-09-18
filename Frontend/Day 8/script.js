
const b = document.querySelector('.outer');
console.log(b);
for(let x=0; x<400;x++) {
    b.innerHTML += '<div class="inner"></div>';
}
const boxes = document.querySelectorAll('.inner');
boxes.forEach( (box)=>{
    box.addEventListener('click', ()=>{
        if(box.classList.contains('boxclicked')){
            box.classList.remove('boxclicked');
        }
        else{
            box.classList.add('boxclicked');
        }
    })
})

const defaultBlack = [
    129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
    190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
    250, 252, 266, 268, 271, 273
];

defaultBlack.forEach( (index)=>{
    boxes[index].classList.add('boxclicked');
})