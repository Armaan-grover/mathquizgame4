var player1Name,player2Name;

function login(){
player1Name=document.getElementById("player1Input").value;
player2Name=document.getElementById("player2Input").value;
localStorage.setItem("player1name",player1Name);
localStorage.setItem("player2name",player2Name);
window.location="quiz_game_page.html";
 }