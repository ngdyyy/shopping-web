const loginbtn = document.getElementById('loginbtn')

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = '/html/login.html';
})