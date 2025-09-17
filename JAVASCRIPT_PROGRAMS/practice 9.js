// console.log(
//   "This is the practice no 9 program based upon the various programs."
// );

{
  function ValidateForm(username, email, password) {
    let feedback = [];
    let strength = 0;
    if (username.length < 3) {
      feedback.push("The username must be atleast 3 characters long");
    } else {
      strength++;
    }

    if (
      !email.match("@") ||
      !email.match(".") ||
      email.includes(" ") ||
      !email.match("gmail.com")
    ) {
      feedback.push("Plz enter the valid email address.");
    } else {
      strength++;
    }

    if (password.length >= 8) {
      strength++;
    } else {
      feedback.push("password must be 8 characters long.");
    }

    if (password.match(/[A-Z]/)) {
      strength++;
    } else {
      feedback.push("The password must contain atleast 1 uppercase character.");
    }

    if (password.match(/[a-z]/)) {
      strength++;
    } else {
      feedback.push("The password must contain at least 1 lowercase character");
    }

    return {
      errors: feedback,
      password_Stength: strength,
    };
  }

  let forms = [["MA", "aadilchanda1069@gmail.com", "102djkow"]];

  for (let i = 0; i < forms.length; i++) {
    let result = ValidateForm(forms[i][0], forms[i][1], forms[i][2]);
    // console.log(`\nValidating Form is #${i + 1}`);
    console.log(`The username is: ${forms[i][0]}`);
    console.log(`The email is: ${forms[i][1]}`);
    console.log(`The password is: ${forms[i][2]}`);
    console.log(`The strength of password is: ${result.password_Stength}`);

    if (result.errors.length > 0) {
      console.log(`\nFeedback is:`);
      for (let j = 0; j < result.errors.length; j++) {
        console.log(`-${result.errors[j]}`);
      }
    }
  }
}
