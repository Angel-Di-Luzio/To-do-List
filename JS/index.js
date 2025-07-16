//Referencias
const btn = document.getElementById("add");
const task = document.getElementById("task");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
    const taskText = task.value.trim();
    if (taskText !== ""){
        const li = document.createElement("li");
        li.textContent = taskText;

        //Marcar como completa
        li.addEventListener("click", () => {
            li.classList.toggle("completada");
        })

        //Boton eliminar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "❌";
        btnBorrar.style.marginLeft = "10px";
        btnBorrar.style.border = "none";
        btnBorrar.style.background = "transparent";
        btnBorrar.style.cursor = "pointer";

        btnBorrar.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(btnBorrar);
        list.appendChild(li);
        task.value = "";
    }
});