var numSquares = 6; 
var colors = generateRandColor(numSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colourDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var headerMessage = document.querySelector("h1");
var changeColorBtn = document.querySelector("#changeColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3; 
    colors = generateRandColor(numSquares);
    goalColor = pickColor();
    colourDisplay.textContent = goalColor; 
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6; 
    colors = generateRandColor(numSquares);
    goalColor = pickColor();
    colourDisplay.textContent = goalColor; 
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

changeColorBtn.addEventListener("click", function(){
    resetColor(numSquares);
    goalColor = pickColor();
    colourDisplay.textContent = goalColor; 
})
colourDisplay.textContent = goalColor; 


for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === goalColor){
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            changeColorBtn.textContent = "Play Again?";
            headerMessage.style.backgroundColor = goalColor; 
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function resetColor(num) {
    var newColors = generateRandColor(num);
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = newColors[i];
    }
    colors = newColors; 
    headerMessage.style.backgroundColor = "steelblue";
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color; 
    }
}

function pickColor() {
    var randColor = Math.floor(Math.random() * colors.length );
    return colors[randColor]; 
}

function generateRandColor(num) {
    var colourArr = [];
    for(var i = 0; i < num; i++){
        colourArr.push(randomColor());
    }
    return colourArr; 
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}

