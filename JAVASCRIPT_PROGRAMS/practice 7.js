{
  console.log("=========== TESTING PASSWORD STRENGHT ===========\n");
  function CheckPassStrength(password) {
    let strenght = 0;
    let feedback = [];

    if (password.length < 8) {
      feedback.push("The password should be at least 8 characters long");
    } else {
      strenght++;
    }

    if (password.match(/[A-Z]/)) {
      strenght++;
    } else {
      feedback.push(
        "The password should be at least contain 1 UPPERCASE letter."
      );
    }

    if (password.match(/[a-z]/)) {
      strenght++;
    } else {
      feedback.push(
        "The password should contain at least 1 lowercase character."
      );
    }

    if (password.match(/[0-9]/)) {
      strenght++;
    } else {
      feedback.push("The password contain at least 1 digit(number)");
    }

    if (password.match(/[^A-Za-z0-9]/)) {
      // This is the regex pattern that is looking for any charactrer that is not an uppercase a loercase or a digit means a special symbol.

      strenght++;
    } else {
      feedback.push("The password should contain at least 1 special symbol");
    }

    let strenght_lvl = "";
    if (strenght < 2) {
      strenght_lvl = "Weak";
    } else if (strenght < 4) {
      strenght_lvl = "Medium";
    } else {
      strenght_lvl = "Strong";
    }

    return {
      strenght: strenght_lvl,
      feedback: feedback,
      score: strenght,
    };
  }

  let passwords = ["pass", "Pa_word3", "P@ssw0rd!"];
  for (let i = 0; i < passwords.length; i++) {
    let result = CheckPassStrength(passwords[i]);
    // console.log("The password lenght is:", passwords.lenght);
    console.log("\nPassword:", passwords[i]);
    console.log("The Strenght is:", result.strenght);
    console.log(`The score is: ${result.score}/5`);
    // console.log("The score is:", result.score + "/5");

    if (result.feedback.length > 0) {
      console.log("Feedback:");
      for (let j = 0; j < result.feedback.length; j++) {
        console.log(`${result.feedback[j]}\t`);
      }
    }
  }
}
