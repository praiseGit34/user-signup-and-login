// Steps:
// validate the input field data
// if the data is valid we store in localStorage
    //   after that we send them to the home (a display the username, email, and pic)
// else we give the user an error

let username = document.querySelector('#username');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm-pass');
let profilePic = document.querySelector('#picture');
let signUpButton = document.querySelector('button')


function validate(input){
    // length, characters (type text) = min=5
    // console.dir(input)

    if(input.type === "text"){
        // console.log("Text field", input.value)

        if(input.value.length >= 5){
            console.log("Valid")
        }else{
            console.error("Should have a min length of 5 characters")
        }
    }
    else if(input.type === "email"){
        console.log("Email Field", input.value)

        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(pattern.test(input.value)){
            console.log("Email is valid")
        }else{
            console.error("Email format is invalid, it should be something lik test@email.com")
        }
    }
    else if(input.type === "password"){
        // console.log("Password field", input.value)

        if(input.value === confirm.value){
            console.log("Password Matches")
        }else{
            console.error("Confirm password is not equal to the password you entered")
        }
    }else{
        console.log("Malformed Input Field")
    }
    // email format 
    // password should be the same as the confirm password
}

signUpButton.addEventListener('click', function(event){
   event.preventDefault()

   let inputFields = [username, firstname,lastname, email, password, profilePic]

   for(let input of inputFields){
    validate(input)
   }
})


