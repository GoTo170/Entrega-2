document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Suponer que la autenticación es exitosa
            localStorage.setItem('user', JSON.stringify({ username }));
            alert('Inicio de sesión exitoso');
            window.location.href = 'index.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;

            // Suponer que el registro es exitoso
            alert('Registro exitoso');
            window.location.href = 'login.html';
        });
    }
});
