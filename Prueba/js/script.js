function perfil() {
    let nombre = "Frank";
    let apellido = "Garcia";
    let edad = 25;
    let correo = "frank@example.com";

    document.getElementById("resultado1").innerHTML = 
    `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Apellido:</strong> ${apellido}<br>
        <strong>Edad:</strong> ${edad}<br>
        <strong>Correo:</strong> ${correo}
    `;
}