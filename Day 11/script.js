const quizDB=[
    {
        question: "Q1: Which of these is India’s first extensive on-demand grocery delivery app?",
        a: "Grofers",
        b: "Zomato",
        c: "Amazon",
        d: "BigBasket",
        ans:"ans4"
    },
    {
        question: "Q2: Who is the founder of the education app Byju's?",
        a: "Bhavish Aggarwal",
        b: "Byju Raveendran",
        c: "Ritesh Agarwal",
        d: "Salman Khan",
        ans:"ans2"
    },
    {
        question: "Q3: The global hospitality services Airbnb has invested in which Indian startup?",
        a: "Oyo Rooms",
        b: "Stayzilla",
        c: "Makemytrip",
        d: "Yatra",
        ans:"ans1"
    },
    {
        question: "Q4: Which of the food delivery services is headquartered in Bangalore?",
        a: "Uber Eats",
        b: "Zomato",
        c: "Swiggy",
        d: "BigBasket",
        ans:"ans3"
    },{
        question: "Q5: Which of these delivery apps is funded by Google?",
        a: "Dunzo",
        b: "Zomato",
        c: "Foodpanda",
        d: "BiryanibyKilo",
        ans:"ans1"
    }
];

const question=document.querySelector('.question');
const opt1=document.querySelector('#opt1')
const opt2=document.querySelector('#opt2')
const opt3=document.querySelector('#opt3')
const opt4=document.querySelector('#opt4')
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.option');

const showScore=document.querySelector('#showScore');


let count=0;
let score=0;

const loadQuestion=()=>{
    question.innerText=quizDB[count].question;
    opt1.innerText=quizDB[count].a;
    opt2.innerText=quizDB[count].b;
    opt3.innerText=quizDB[count].c;
    opt4.innerText=quizDB[count].d;

}

loadQuestion();  

const deselectAll=()=>{
    answers.forEach((currentAnswerElement)=>currentAnswerElement.checked=false);
}
const getCheckAnswer=()=>{
    let answer;

    answers.forEach((currentAnswerElement)=>{
        if(currentAnswerElement.checked){
            answer=currentAnswerElement.id;
        }
        
    })
    return answer;
}

submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();

    if(checkedAnswer===quizDB[count].ans){
        score++;
    };
    count++;
    deselectAll();

    if(count<quizDB.length){
        loadQuestion();
    }
    else{
        // document.getElementById("score").innerHTML = score/quizDB.length;
        
        showScore.innerHTML= '<h3>You Scored <span id="score"></span> of <span id="total"></span></h3><button class="btn" onclick="location.reload()">Play Again</button>';
        document.getElementById("score").innerHTML=score;
        document.getElementById("total").innerHTML=quizDB.length;
        showScore.classList.remove('scoreArea');
    }

})