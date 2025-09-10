const users = JSON.parse(localStorage.getItem('users')) || [];

const tableBody = document.getElementById("user_table");

users.forEach(user => {
    const row = document.createElement("tr");

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email || user.username || 'Sin email';

    const passCell = document.createElement("td");
    passCell.textContent = user.password;

    row.appendChild(emailCell);
    row.appendChild(passCell);

    tableBody.appendChild(row);
});

