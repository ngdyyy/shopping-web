const backToLoginbtn = document.getElementById('backtologin')

backToLoginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/html/login.html';
});