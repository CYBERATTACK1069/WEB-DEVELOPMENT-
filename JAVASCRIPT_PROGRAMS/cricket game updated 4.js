let display_line = document.querySelector(".line");

let score = {
  computer_score: 0,
  user_score: 0,
  tie: 0,
};

function generate_Random_Choice() {
  let choice;
  let Random_Number = Math.random() * 3;
  if (Random_Number <= 1) {
    choice = "BALL";
  } else if (Random_Number <= 2) {
    choice = "BAT";
  } else {
    choice = "STUMPS";
  }
  return choice;
}

function Gen_Choice(computers_Move, users_Move) {
  let display;
  if (users_Move === "BALL") {
    if (computers_Move === "BALL") {
      display = "the match is tied.";
      score.tie++;
    } else if (computers_Move === "BAT") {
      display = "the computer won.";
      score.computer_score++;
    } else {
      display = "user won.";
      score.user_score++;
    }
  }
  if (users_Move === "BAT") {
    if (computers_Move === "BALL") {
      display = "user won.";
      score.user_score++;
    } else if (computers_Move === "BAT") {
      display = "the match is tied.";
      score.tie++;
    } else {
      display = "the computer won.";
      score.computer_score++;
    }
  }
  if (users_Move === "STUMPS") {
    if (computers_Move === "BALL") {
      display = "the computer won.";
      score.computer_score++;
    } else if (computers_Move === "BAT") {
      display = "user won.";
      score.user_score++;
    } else {
      display = "the match is tied.";
      score.tie++;
    }
  }
  return display;
}

function output_diplay(computers_Move, users_Move, display) {
  display_line.innerText = `the computers choice is ${computers_Move}.\nthe users choice is ${users_Move}.\n${display}\nComputers Score : ${score.computer_score}\nUsers Score : ${score.user_score}\nTie Score : ${score.tie}`;
}

let BALL_Button = document.querySelector(".Ball");

BALL_Button.addEventListener("click", () => {
  let computer_cho = generate_Random_Choice();
  let computers_choice = Gen_Choice(computer_cho, "BALL");
  output_diplay(computer_cho, "BALL", computers_choice);
});
