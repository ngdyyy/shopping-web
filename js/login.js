const loginform = document.getElementById('loginform')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const startbtn = document.getElementById('start-btn')

const adminAccount = {
    nameAdmin: 'Nguyen Quang Duy',
    emailAdmin: 'nqduy130206@gmail.com',
    phoneAdmin: '0345084525',
}

startbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (email === adminAccount.emailAdmin && name === adminAccount.nameAdmin && phone === adminAccount.phoneAdmin) {
        window.location.href = '/html/admin.html';
    }
    else {
        window.location.href = '/html/index.html';
    }
});