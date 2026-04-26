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
    if(q1c1Btn.checked){
        score++
    }
    if(q3c2Btn.checked){
        score++
    }
    if(q4txtbox.value.toLowerCase() === "request response cycle" || 
        q4txtbox.value.toLowerCase() === "request-response cycle" || 
        q4txtbox.value.toLowerCase() === "the request response cycle" || 
        q4txtbox.value.toLowerCase() === "the request-response cycle" || 
        q4txtbox.value.toLowerCase() === "request response"){
        score++
    }
    if(q5c4Btn.checked){
        score++
    }
    if(q2c1Btn.checked&&
       !q2c2Btn.checked&&
       !q2c3Btn.checked&&
       q2c4Btn.checked
    ){
        score++
    }

    alert("Your score is: " + score+" out of 5!");

}