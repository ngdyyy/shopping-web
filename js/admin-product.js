const productForm = document.getElementById('productForm')
const nameInput = document.getElementById('productName')
const priceInput = document.getElementById('productPrice')
const noteInput = document.getElementById('productNote')
const addProductbtn = document.getElementById('addProductbtn')
const productTable = document.getElementById('productTable')

let products = JSON.parse(localStorage.getItem('products')) || [];

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = {
        name: nameInput.value.trim(),
        price: priceInput.value.trim(),
        note: noteInput.value.trim()
    };
    products.push(product);
    localStorage.setItem('product', JSON.stringify(products));
    renderProductTable();
    productForm.reset();
});

function renderProductTable() {
    productTable.innerHTML = '';
    products.forEach((p, index) => {
        productTable.innerHTML += `
       <div class="card">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <p>${p.note}</p>
            <button class="editbtn" onclick="editProduct(${index})">Edit</button>
            <button class="deletebtn" onclick="deleteProduct(${index})">Delete</button>
        </div>
        `;
        localStorage.setItem('products', JSON.stringify(products));
    });
};

function deleteProduct(index) {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderProductTable();
    }
}

function editProduct(index) {
    const p = products[index];
    nameInput.value = p.name;
    priceInput.value = p.price;
    noteInput.value = p.note;

    addProductbtn.textContent = 'Update';
    addProductbtn.onclick = function(e)  {
        e.preventDefault();

        products[index] = {
            name: nameInput.value,
            price: priceInput.value,
            note: noteInput.value
        };

        localStorage.setItem('products', JSON.stringify(products));
        renderProductTable();
        addProductbtn.textContent = 'Add';
        addProductbtn.onclick = null;
        productForm.reset();
    }
}

renderProductTable();

const backToHome = document.getElementById('backtomain')

backToHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/html/admin.html';
});