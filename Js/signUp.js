// Get the signUpForm
var signUpForm = document.getElementById('signUp');

// When the user clicks anywhere outside of the signUpForm, close it
window.onclick = function(event) {
  if (event.target == signUpForm) {
    signUpForm.style.display = "none";
  }
}
