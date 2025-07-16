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
            guardar();
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

        btnBorrar.addEventListener("click", (e) => {
            e.stopPropagation();
            list.removeChild(li);
            guardar();
        });

        //Mostrar en el DOM
        li.appendChild(span);
        li.appendChild(btnBorrar);
        list.appendChild(li);

        //Reseteo del input
        task.value = "";

        guardar();
    }
});

function guardar(){
    const tareas = [];
    document.querySelectorAll("#list li").forEach(li => {
        tareas.push({
            tarea: li.firstChild.textContent,
            completada: li.firstChild.classList.contains("completada")
        });
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(localStorage.getItem("tareas"));
}

function cargar(){
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach(taskObj => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskObj.tarea;
        console.log(taskObj);
        if (taskObj.completada) {
            span.classList.add("completada");
        }

                //Marcar como completa
        span.addEventListener("click", () => {
            span.classList.toggle("completada");
            guardar();
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

        btnBorrar.addEventListener("click", (e) => {
            e.stopPropagation();
            list.removeChild(li);
            guardar();
        });

        //Mostrar en el DOM
        li.appendChild(span);
        li.appendChild(btnBorrar);
        list.appendChild(li);

        
    })
}
cargar();
