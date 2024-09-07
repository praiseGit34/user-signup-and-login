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

// Create a function to clear the form
function clearForm() {
  username.value = "";
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  password.value = "";
  confirm.value = "";
  profilePic.value = "";
}

// Function to display errors below the input field
function showError(input, message) {
  let error = input.nextElementSibling;
  if (!error || error.tagName !== 'DIV') {
    error = document.createElement('div');
    error.style.color = 'red';
    input.parentNode.insertBefore(error, input.nextSibling);
  }
  error.textContent = message;
}

function validate(input) {
  if (input.type === "text") {
    if (input.value.length >= 5) {
      showError(input, ""); // Clear previous error
      return true;
    } else {
      showError(input, "Should have a min length of 5 characters");
      return false;
    }
  } else if (input.type === "email") {
    let pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (pattern.test(input.value)) {
      showError(input, "");
      return true;
    } else {
      showError(input, "Email format is invalid, it should be something like test@email.com");
      return false;
    }
  } else if (input.type === "password") {
    if (password.value === confirm.value) {
      showError(input, "");
      return true;
    } else {
      showError(confirm, "Confirm password should match the password you entered before");
      return false;
    }
  } else if (input.type === "file") {
    if (input.files.length > 0) {
      showError(input, "");
      return true;
    } else {
      showError(input, "No file has been selected");
      return false;
    }
  } else {
    console.log("Malformed Input Field");
    return false;
  }
}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  const inputFields = [username, firstname, lastname, email, password, profilePic];
  let isValid = true;

  // Validate each input field
  inputFields.forEach((input) => {
    if (!validate(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    // Store in localStorage
    let formData = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      profilePic: profilePic.value,
    };
    localStorage.setItem("userInfo", JSON.stringify(formData));
    clearForm(); // Clear form fields
    window.location.href = "./home.html"; // Redirect to home page
  }
});
