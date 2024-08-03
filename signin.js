document.getElementById('signin').addEventListener('submit',function(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.pass === pass);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'userdata.html';
    } else {
        alert('Sign-in failed. Please provide valid information.');
    }
})
function goToRegistration() {
    window.location.href = 'index.html'; 
}
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('button[onclick="goToRegistration()"]');
    if (signInButton) {
        signInButton.addEventListener('click', goToSignIn);
    }
});