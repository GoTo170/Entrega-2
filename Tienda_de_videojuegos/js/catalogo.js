document.addEventListener("DOMContentLoaded", function() {
    const catalogoDiv = document.getElementById('juegos');

    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            data.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('juego');
                gameCard.innerHTML = `
                    <h3>${game.name}</h3>
                    <p>${game.genre}</p>
                    <button onclick="viewGame(${game.id})">Ver Más</button>
                `;
                catalogoDiv.appendChild(gameCard);
            });
        });
});

function viewGame(id) {
    fetch(`https://digimon-api.vercel.app/api/digimon${id}`)
        .then(response => response.json())
        .then(game => {
            alert(`
                Nombre: ${game.name}
                Descripción: ${game.description}
                Precio: $${game.price}
                Género: ${game.genre}
            `);
        });
}
