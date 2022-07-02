function send() {
    number1 = document.getElementById("player1input").value
    number2 = document.getElementById("player2input").value
    document.getElementById("player1Score").innerHTML = player1Score;
    document.getElementById("player2Score").innerHTML = player2Score;
    actualAnswer = parsInt(number1) * parsInt(number2);
    questionNumber = "<h4>" + number1 + "X" + number2 + "</h4>";
    inputBox = "<br> Answer : <input type='text' id='checkInputBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
questionTurn = "player1";
answerTurn = "player2";
function check() {
    getAnswer = document.getElementById("questionInput").value;
    if (getAnswer == actualAnswer) {

        if (answerTurn = "player1") {
            updatePlayer1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = updatePlayer1Score
        }

        else {
            updatePlayer2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = updatePlayer2Score
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        answerTurn = "player1"
        document.getElementById("questionHeading").innerHTML = "Question Turn-" + player2Name;
        document.getElementById("answerHeading").innerHTML = "Answer Turn-" + player1Name;
    }
}