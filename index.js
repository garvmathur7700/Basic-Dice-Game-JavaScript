var player1 = Math.floor((Math.random() * 6) + 1);
var player2 = Math.floor((Math.random() * 6) + 1);

var image1Source = "./images/dice" + player1 + ".png";
var image2Source = "./images/dice" + player2 + ".png";

document.querySelector(".img1").setAttribute("src", image1Source);
document.querySelector(".img2").setAttribute("src", image2Source);

if(player1 > player2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins";
}
else if (player1 === player2) {
    document.querySelector(".container h1").innerHTML = "Draw!";
}
else {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins🚩";
}