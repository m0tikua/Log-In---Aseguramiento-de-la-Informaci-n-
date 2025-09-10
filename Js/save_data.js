const form = document.getElementById('loginForm');

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío del formulario

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const users = JSON.parse(localStorage.getItem("users")) || [] ;

    users.push({ email, password});

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "html/dashboard.html";


});