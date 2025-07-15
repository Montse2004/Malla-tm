document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prerreq = JSON.parse(ramo.dataset.prerreq || "[]");
    const bloqueado = prerreq.some(req => !aprobados.includes(req));

    if (bloqueado) {
      ramo.classList.add("bloqueado");
      ramo.style.pointerEvents = "none";
    }

    if (aprobados.includes(id)) {
      ramo.classList.add("aprobado");
    }

    if (!bloqueado) {
      ramo.addEventListener("click", () => {
        if (ramo.classList.contains("aprobado")) {
          ramo.classList.remove("aprobado");
          aprobados = aprobados.filter(r => r !== id);
        } else {
          ramo.classList.add("aprobado");
          aprobados.push(id);
        }
        localStorage.setItem("aprobados", JSON.stringify(aprobados));
        location.reload();
      });
    }
  });
});

