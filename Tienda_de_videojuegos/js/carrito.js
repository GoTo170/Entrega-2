document.addEventListener("DOMContentLoaded", function() {
    const cartDiv = document.getElementById('items-carrito');
    const comprarBtn = document.getElementById('comprar');
    const cancelarBtn = document.getElementById('cancelar');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartDiv.innerHTML = '';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <p>${item.name}</p>
                <p>Precio: $${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartDiv.appendChild(itemDiv);
        });
    }

    renderCart();

    comprarBtn.addEventListener('click', () => {
        if (!localStorage.getItem('user')) {
            alert('Debe iniciar sesión para comprar.');
            return;
        }
        alert('Compra realizada con éxito');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    cancelarBtn.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });
});

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}
