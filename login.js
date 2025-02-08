const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');
const closeSignup = document.getElementById('close-signup');
const closeSignin = document.getElementById('close-signin');

signupForm.classList.add('active');

switchToSignin.addEventListener('click', () => {
    signupForm.classList.remove('active');
    signinForm.classList.add('active');
});

switchToSignup.addEventListener('click', () => {
    signinForm.classList.remove('active');
    signupForm.classList.add('active');
});

closeSignup.addEventListener('click', () => {
    signupForm.classList.remove('active');
});

closeSignin.addEventListener('click', () => {
    signinForm.classList.remove('active');
});

function redirectToIndex() {
    window.location.href = "first.html"; 
}

