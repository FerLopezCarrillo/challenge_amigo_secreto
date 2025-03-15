// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("amigo");
    const btnAgregar = document.getElementById("btnAgregar");
    const btnSortear = document.getElementById("btnSortear");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    let nombres = [];

    // Función para agregar nombres
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        if (nombres.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    });

    // Función para sortear un amigo
    btnSortear.addEventListener("click", () => {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        resultado.textContent = "🔄 Sorteando...";
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * nombres.length);
            resultado.textContent = `🎉 ¡El amigo secreto es: ${nombres[randomIndex]}! 🎉`;
        }, 2000);
    });

    // Función para actualizar la lista de amigos en la pantalla
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        nombres.forEach((nombre, index) => {
            const li = document.createElement("li");
            li.textContent = nombre;
            
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.style.marginLeft = "10px";
            btnEliminar.addEventListener("click", () => eliminarNombre(index));
            
            li.appendChild(btnEliminar);
            listaAmigos.appendChild(li);
        });
    }

    // Función para eliminar un nombre de la lista
    function eliminarNombre(index) {
        nombres.splice(index, 1);
        actualizarLista();
    }
});