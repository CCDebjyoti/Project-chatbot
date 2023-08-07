
function getBotResponse(input) {
    input = input.toLowerCase();
    let x = Math.floor(Math.random() * 10);

    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }


    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "help") {
        return "for further queries contact us at chatbt@gmail.com";

    }

}