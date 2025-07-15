document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los ramos
  const ramos = document.querySelectorAll(".ramo");

  // Obtenemos los ramos aprobados guardados en localStorage, o un arreglo vacío si no hay
  let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;

    // Obtenemos la lista de prerrequisitos desde el atributo data-prerreq (array en formato JSON)
    const prerreq = JSON.parse(ramo.dataset.prerreq || "[]");

    // Si alguno de los prerrequisitos NO está aprobado, bloqueamos este ramo
    const bloqueado = prerreq.some(req => !aprobados.includes(req));
    if (bloqueado) {
      ramo.classList.add("bloqueado");
      // Desactivamos el click para ramos bloqueados
      ramo.style.pointerEvents = "none";
    }

    // Si el ramo ya está aprobado, aplicamos la clase y estilo correspondiente
    if (aprobados.includes(id)) {
      ramo.classList.add("aprobado");
    }

    // Si no está bloqueado, agregamos el evento click para alternar aprobado/no aprobado
    if (!bloqueado) {
      ramo.addEventListener("click", () => {
        if (ramo.classList.contains("aprobado")) {
          // Quitar aprobación
          ramo.classList.remove("aprobado");
          aprobados = aprobados.filter(r => r !== id);
        } else {
          // Marcar como aprobado
          ramo.classList.add("aprobado");
          aprobados.push(id);
        }

        // Guardar el nuevo estado en localStorage
        localStorage.setItem("aprobados", JSON.stringify(aprobados));

        // Recargar para actualizar bloqueo en otros ramos
        location.reload();
      });
    }
  });
});


