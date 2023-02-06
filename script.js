var scoreSweet = 000
var scoreSpicy = 000

//Hides refresh button on load, could be optimized in the future
window.onload = function() {
    document.getElementById("refresh").style.display="none"
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 0 + totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score
    var scoreDiv = document.getElementById("score") //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    document.getElementById("refresh").style.display="inline" //Reveals the refresh page button
    document.body.scrollTop = 0 // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0 // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
    window.location = "/index.html"
    if(window.location.pathname === "/sweet.html"){
        document.getElementById("numberSweet").innerHTML = score
    }
    else if(window.location.pathname === "/spicy.html"){
        document.getElementById("numberSpicy").innerHTML = score
    }
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}