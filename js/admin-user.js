const userForm = document.getElementById('userForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const jobInput = document.getElementById('job')
const addbtn = document.getElementById('addbtn')
const userTable = document.getElementById('userTable')

let users = JSON.parse(localStorage.getItem('users')) || [];

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        job: jobInput.value.trim()
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    renderUserTable();
    userForm.reset();
});

function renderUserTable() {
    userTable.innerHTML = '';
    users.forEach((u, index) => {
        userTable.innerHTML += `
        <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.job}</td>
        <td>
        <button class="deletebtn" onclick="deleteUser(${index})">Delete</button>
        <button class="editbtn" onclick="editUser(${index})">Edit</button>
        </td>
        </tr>
        `;
    });
};

function deleteUser(index) {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        renderUserTable();
    }
};

function editUser(index) {
    const u = users[index];
    nameInput.value = u.name;
    emailInput.value = u.email;
    jobInput.value = u.job;

    addbtn.textContent = 'Update';
    addbtn.onclick = function(e) {
        e.preventDefault();

        users[index] = {
            name: nameInput.value,
            email: emailInput.value,
            job: jobInput.value
        };

        localStorage.setItem('users', JSON.stringify(users));
        renderUserTable();
        addbtn.textContent = 'Add';
        addbtn.onclick = null;
        userForm.reset();
    };
};

renderUserTable();

const backToHome = document.getElementById('backtomain')

backToHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/html/admin.html';
});