document.getElementById('reg').addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('Name').value;
    const dob=document.getElementById('dob').value;
    const ph=document.getElementById('ph').value;
    const adh=document.getElementById('adh').value;
    const pn=document.getElementById('pn').value;
    const bank=document.getElementById('bank').value;
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;

    const user = { name, dob, ph, adh, pn,bank,email, pass };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Congratulations you have to successfully completed your registration.');
    if (confirm('Do you want to go to the sign-in page now? if Yes then click on OK. if No then click on Cancel.')) {
        window.location.href = 'signin.html';
    }
})

function goToSignIn() {
    window.location.href = 'signin.html';
}
// Attach the functions to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('button[onclick="goToSignIn()"]');
    if (signInButton) {
        signInButton.addEventListener('click', goToSignIn);
    }
});
