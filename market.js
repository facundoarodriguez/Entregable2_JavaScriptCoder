let cart = [];

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsContainer.innerHTML = '';

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Borrar';
    removeButton.style.marginLeft = '10px';
    removeButton.onclick = function() {
      removeFromCart(index);
    };

    li.appendChild(removeButton);
    cartItemsContainer.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function addToCart(productName, productPrice) {
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCartUI();
  showNotification('Producto añadido al carrito');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productElement = this.closest('.product');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    addToCart(productName, productPrice);
  });
});

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = 'notification2';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}

const btnPay = document.getElementById('pay');

btnPay.addEventListener('click', () => {
  const noHaceNada = document.createElement('p');
  noHaceNada.textContent = 'No hace nada jeje';
  btnPay.after(noHaceNada);
  setTimeout(() => {
    noHaceNada.remove();}, 2000);
  });




























/* let persona = 0
let personaJSON = 0

function Persona(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
    this.mostrarDatos = function() {
        console.log('Nombre:' +persona.nombre);
        console.log('Apellido:' +persona.apellido);
        console.log('Edad:' +persona.edad)
    }
}

function pedirDatos(){
    let nombreUsuario = prompt('Ingrese su nombre:')
    let apellidoUsuario = prompt('Ingrese su apellido:')
    let edadUsuario = parseInt(prompt('Ingrese su edad:'))

    persona = new Persona(nombreUsuario, apellidoUsuario, edadUsuario);

    /* persona.mostrarDatos(); */

/*   localStorage.setItem('Persona', JSON.stringify(persona));
}

function convertirDatos(){
    personaJSON = localStorage.getItem('persona')
    persona = JSON.parse(personaJSON)
    persona.mostrarDatos();
} */ 