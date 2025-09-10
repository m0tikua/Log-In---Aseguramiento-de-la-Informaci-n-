const formulario = document.getElementById('loginForm');
const campoEmail = document.getElementById('emailInput');
const campoPassword = document.getElementById('passwordInput');
const botonSubmit = document.getElementById('btn');
const messageDiv = document.getElementById('message');

function showMessage(text = '', type = 'info') {
    if (!messageDiv) return;
    messageDiv.textContent = text;
    messageDiv.style.color = (type === 'success') ? 'green' :
                             (type === 'error') ? 'red' : 'black';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Ahora valida mínimo 5 caracteres y al menos 1 mayúscula
function validatePassword(password) {
    const hasMinLength = password.length >= 5;
    const hasUppercase = /[A-Z]/.test(password);
    return hasMinLength && hasUppercase;
}

function habilitarBoton() {
    const email = campoEmail.value.trim();
    const password = campoPassword.value.trim();
    botonSubmit.disabled = !(validateEmail(email) && validatePassword(password));
}

// Validación en tiempo real de email
campoEmail.addEventListener('input', () => {
    const email = campoEmail.value.trim();
    if (!validateEmail(email) && email !== '') {
        showMessage('Correo electrónico inválido.', 'error');
    } else {
        showMessage();
    }
    habilitarBoton();
});

// Validación en tiempo real de contraseña
campoPassword.addEventListener('input', () => {
    const password = campoPassword.value.trim();
    if (password !== '' && !validatePassword(password)) {
        showMessage('La contraseña debe tener al menos 5 caracteres y una mayúscula.', 'error');
    } else {
        showMessage();
    }
    habilitarBoton();
});

// Validación al enviar formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const email = campoEmail.value.trim();
    const password = campoPassword.value.trim();

    if (email === '' || password === '') {
        showMessage('Por favor, completa todos los campos.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Por favor, ingresa un correo electrónico válido.', 'error');
        campoEmail.focus();
        return;
    }

    if (!validatePassword(password)) {
        showMessage('La contraseña debe tener al menos 5 caracteres y una mayúscula.', 'error');
        campoPassword.focus();
        return;
    }

    // Si todo está bien, mostrar mensaje de éxito y redirigir
    showMessage('Inicio de sesión exitoso. Redirigiendo...', 'success');

    setTimeout(() => {
        window.location.href = 'html/dashboard.html';
    }, 1500);
});

// Configuración inicial
document.addEventListener('DOMContentLoaded', () => {
    campoEmail.focus();
    habilitarBoton();
});

