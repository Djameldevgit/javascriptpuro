// Obtener los elementos del DOM
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleButton");
const sidebarButton = document.querySelector("#sidebar button"); // Seleccionar el botón dentro del sidebar

// Agregar un evento de clic al botón para abrir/cerrar el sidebar
toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    console.log("Clase 'open' alternada: ", sidebar.classList.contains("open"));
});

// Agregar un evento de clic al botón dentro del sidebar (por ejemplo, para cerrar el sidebar)
sidebarButton.addEventListener("click", () => {
    sidebar.classList.remove("open");
    console.log("Sidebar cerrado desde el botón dentro del sidebar.");
});
