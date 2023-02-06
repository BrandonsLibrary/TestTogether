//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates sweet score
function calculateSweet() {
    var calculation = document.querySelectorAll('input[type="checkbox"]:checked').length
    localStorage.setItem("sweetScore", calculation.toString())
    return true
}

//Calculates spicy score
function calculateSpicy() {
    var calculation = document.querySelectorAll('input[type="checkbox"]:checked').length
    localStorage.setItem("spicyScore", calculation.toString())
    return true
}

//Update scores on index
function updateScores() {
    var numberSweet = localStorage.getItem("sweetScore")
    var numberSpicy = localStorage.getItem("spicyScore")
    document.getElementById("numberSweet").innerHTML = numberSweet
    document.getElementById("numberSpicy").innerHTML = numberSpicy
}

//Depricated functions
/*function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 0 + totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score
    var scoreDiv = document.getElementById("score") //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Your Score: " + score.toString() //Sets the div text to your score
    document.getElementById("refresh").style.display="inline" //Reveals the refresh page button
    document.body.scrollTop = 0 // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0 // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes() //Calls the clearBoxes function to clear all the boxes
    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "" //Makes the score div blank
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}*/