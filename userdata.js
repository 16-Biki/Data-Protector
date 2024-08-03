document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('displayname').innerText = currentUser.name;
        document.getElementById('displaydob').innerText = currentUser.dob;
        document.getElementById('displayphnumber').innerText = currentUser.ph;
        document.getElementById('displayadhphnumber').innerText = currentUser.adh;
        document.getElementById('displaypanphnumber').innerText = currentUser.pn;
        document.getElementById('displaybankphnumber').innerText = currentUser.bank;
    } else {
        alert('No user data found. Please sign in.');
        window.location.href = 'signin.html';
    }
});
