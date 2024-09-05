// Steps:
// validate the input field data
// if the data is valid we store in localStorage
//   after that we send them to the home (a display the username, email, and pic)
// else we give the user an error

let username = document.querySelector("#username");
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm-pass");
let profilePic = document.querySelector("#picture");
let signUpButton = document.querySelector("button");

function validate(input) {
  // length, characters (type text) = min=5
  // console.dir(input)

  if (input.type === "text") {
    // console.log("Text field", input.value)

    if (input.value.length >= 5) {
      console.log(`${input.id} is valid.Thank you`);
      return true;
    } else {
      console.error("Should have a min length of 5 characters");
      return false;
    }
  } else if (input.type === "email") {
    // console.log("Email Field", input.value);
    let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (pattern.test(input.value)) {
      console.log("Email is valid");
      return true;
    } else {
      console.error("Email format is invalid, it should be something lik test@email.com");
      return false;
    }
  } else if (input.type === "password") {
    // console.log("Password field", input.value)

    if (input.value === confirm.value) {
      console.log("Password Matches");
      return true;
    } else {
      console.error("Confirm password is not equal to the password you entered");
      return false;
    }
  } else if (input.type === "file") {
    if (input.files.length > 0) {
      console.log("you have selected a profile picture");
      return true;
    } else {
      console.error("no file has been selected");
      return false;
    }
  } else {
    console.log("Malformed Input Field");
  }

}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  const inputFields = [username, firstname, lastname, email, password, profilePic];
  let formData = {
    username: username.value,
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value,
    profilePic: profilePic.value,
  }
  localStorage.set("userInfo", JSON.stringify(formData));
  console.log(formData);
});