document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad del carrusel
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    function showImage(i) {
        images.forEach((img, idx) => {
            img.style.display = idx === i ? "block" : "none";
        });
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    setInterval(nextImage, 3000);
    showImage(index);

    // Cargar los 5 juegos más comprados del mes
    fetch('https://api.example.com/top-games')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 5; i++) {
                document.getElementById(`juego${i + 1}`).innerText = data[i].name;
            }
        });
});

