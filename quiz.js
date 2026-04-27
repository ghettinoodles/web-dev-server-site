const q1c1Btn = document.getElementById("q1c1Btn")
const q1c2Btn = document.getElementById("q1c2Btn")
const q2c1Btn = document.getElementById("q2c1Btn")
const q2c2Btn = document.getElementById("q2c2Btn")
const q2c3Btn = document.getElementById("q2c3Btn")
const q2c4Btn = document.getElementById("q2c4Btn")
const q3c1Btn = document.getElementById("q3c1Btn")
const q3c2Btn = document.getElementById("q3c2Btn")
const q3c3Btn = document.getElementById("q3c3Btn")
const q3c4Btn = document.getElementById("q3c4Btn")
const q4txtbox = document.getElementById("q4txtbox")
const q5c1Btn = document.getElementById("q5c1Btn")
const q5c2Btn = document.getElementById("q5c2Btn")
const q5c3Btn = document.getElementById("q5c3Btn")
const q5c4Btn = document.getElementById("q5c4Btn")
const mySubmit = document.getElementById("mySubmit")

mySubmit.onclick = function(){
    let score=0;
    let q1=0
    let q2=0
    let q3=0
    let q4=0 
    let q5=0

    //Scoring//
    if(q1c1Btn.checked){
        score++
        q1=1
    }
    if(q3c2Btn.checked){
        score++
        q3=1
    }
    if(q4txtbox.value.toLowerCase() === "request response cycle" || 
        q4txtbox.value.toLowerCase() === "request-response cycle" || 
        q4txtbox.value.toLowerCase() === "the request response cycle" || 
        q4txtbox.value.toLowerCase() === "the request-response cycle" || 
        q4txtbox.value.toLowerCase() === "request response"){
        score++
        q4=1
    }
    if(q5c4Btn.checked){
        score++
        q5=1
    }
    if(q2c1Btn.checked&&
       !q2c2Btn.checked&&
       !q2c3Btn.checked&&
       q2c4Btn.checked
    ){
        score++
        q2=1
    }

    //Result Messages//
    const result = document.getElementById("result");
    let message = "";

    if (score >= 3) {
    message = "You passed! Your score is: " + score + " out of 5!";
    result.style.color = "green";
    } 
    else {
    message = "You did not pass. Your score is: " + score + " out of 5!";
    result.style.color = "red";
    }

    result.innerText = message;


    const q1feedback = document.getElementById("q1feedback");
    let q1message = "";
    if (q1==1) {
        q1message="You got question one correct!"
        q1feedback.style.color = "green";
    }
    else{
        q1message="You got question one incorrect. The correct answer was: Yes"
    }
    q1feedback.innerText = q1message;

    const q2feedback = document.getElementById("q2feedback");
    let q2message = "";
    if (q2==1) {
        q2message="You got question two correct!"
        q2feedback.style.color = "green";
    }
    else{
        q2message="You got question two incorrect. The correct answers were: Transfer files and Store Images"
    }
    q2feedback.innerText = q2message;

    const q3feedback = document.getElementById("q3feedback");
    let q3message = "";
    if (q3==1) {
        q3message="You got question three correct!"
        q3feedback.style.color = "green";
    }
    else{
        q3message="You got question three incorrect. The correct answer was: IP address/HTTP Request"
    }
    q3feedback.innerText = q3message;

    const q4feedback = document.getElementById("q4feedback");
    let q4message = "";
    if (q4==1) {
        q4message="You got question four correct!"
        q4feedback.style.color = "green";
    }
    else{
        q4message="You got question four incorrect. The correct answer was: Request Response Cycle"
    }
    q4feedback.innerText = q4message;

    const q5feedback = document.getElementById("q5feedback");
    let q5message = "";
    if (q5==1) {
        q5message="You got question five correct!"
        q5feedback.style.color = "green";
    }
    else{
        q5message="You got question five incorrect. The correct answer was: To get a quicker response."
    }
    q5feedback.innerText = q5message;
    
}
//Reset Button//
const resetBtn = document.getElementById("resetBtn");
    resetBtn.onclick = function () {

        const inputs = document.querySelectorAll("input");
    
        inputs.forEach(input => {
            if (input.type === "radio" || input.type === "checkbox") {
                input.checked = false;
            }
            if (input.type === "text") {
                input.value = "";
            }
        });
    
        document.getElementById("result").innerText = "";
        document.getElementById("q1feedback").innerText = "";
        document.getElementById("q2feedback").innerText = "";
        document.getElementById("q3feedback").innerText = "";
        document.getElementById("q4feedback").innerText = "";
        document.getElementById("q5feedback").innerText = "";
    };
