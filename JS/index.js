//Referencias
const btn = document.getElementById("add");
const task = document.getElementById("task");
const list = document.getElementById("list");

//Evento al agregar
btn.addEventListener("click", () => {
    const taskText = task.value.trim();
    if (taskText !== ""){
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        //Marcar como completa
        span.addEventListener("click", () => {
            span.classList.toggle("completada");
        })

        //Boton eliminar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "❌";
        btnBorrar.style.width = "30px";
        btnBorrar.style.textAlign = "center";
        btnBorrar.style.padding = "0.5rem";
        btnBorrar.style.marginLeft = "10px";
        btnBorrar.style.border = "none";
        btnBorrar.style.background = "transparent";
        btnBorrar.style.cursor = "pointer";

        btnBorrar.addEventListener("click", () => {
            list.removeChild(li);
        });

        //Mostrar en el DOM
        li.appendChild(span);
        li.appendChild(btnBorrar);
        list.appendChild(li);

        //Reseteo del input
        task.value = "";
    }
});

