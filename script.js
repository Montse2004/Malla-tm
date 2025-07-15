document.addEventListener("DOMContentLoaded", () => {
  const malla = document.querySelector(".malla");

  const semestres = [
    {
      nombre: "1º Semestre",
      ramos: [
        { id: "matematicas", nombre: "Matemáticas" },
        { id: "quimica", nombre: "Química general y orgánica" },
        { id: "biologia", nombre: "Biología celular" },
        { id: "introduccion_tm", nombre: "Introducción a la Tecnología Médica" },
        { id: "ingles1", nombre: "Comunicación en Inglés" },
        { id: "filosofia", nombre: "Fundamentos Filosóficos" }
      ]
    },
    {
      nombre: "2º Semestre",
      ramos: [
        { id: "bioestadistica", nombre: "Bioestadística", prerreq: ["matematicas"] },
        { id: "bioquimica", nombre: "Bioquímica general", prerreq: ["quimica", "biologia"] },
        { id: "ingles2", nombre: "Comunicación en Inglés II", prerreq: ["ingles1"] },
        { id: "anatomia", nombre: "Anatomía Humana" },
        { id: "administracion", nombre: "Introducción a la administración" },
        { id: "biofisica", nombre: "Biofísica" }
      ]
    },
    {
      nombre: "3º Semestre",
      ramos: [
        { id: "epidemiologia", nombre: "Epidemiología y Salud Pública", prerreq: ["bioestadistica"] },
        { id: "histologia", nombre: "Histología Humana", prerreq: ["anatomia"] },
        { id: "fisiologia", nombre: "Fisiología Humana", prerreq: ["bioquimica"] },
        { id: "inmunologia", nombre: "Introducción a la Inmunología" },
        { id: "psicologia", nombre: "Psicología Aplicada" },
        { id: "teologia", nombre: "Fundamentos Teológicos", prerreq: ["filosofia"] }
      ]
    },
    {
      nombre: "4º Semestre",
      ramos: [
        { id: "enfermeria", nombre: "Fundamentos de la Enfermería" },
        { id: "farmacologia", nombre: "Farmacología General" },
        { id: "fisiopatologia", nombre: "Fisiopatología Humana", prerreq: ["fisiologia"] },
        { id: "infectologia", nombre: "Infectología General", prerreq: ["inmunologia"] },
        { id: "integracion", nombre: "Integración" },
        { id: "bioetica", nombre: "Bioética" },
        { id: "ins1", nombre: "INS" }
      ]
    },
    {
      nombre: "5º Semestre",
      ramos: [
        { id: "anatomia_ojo", nombre: "Anatomía y Morfofisiología del globo ocular" },
        { id: "optica", nombre: "Óptica Oftalmológica" },
        { id: "estrabismo1", nombre: "Estrabismo I" },
        { id: "glaucoma1", nombre: "Fisiología y estudio del Glaucoma I" },
        { id: "gestion_calidad", nombre: "Gestión de calidad en oftalmología" },
        { id: "ins2", nombre: "INS" }
      ]
    },
    {
      nombre: "6º Semestre",
      ramos: [
        { id: "polo_anterior", nombre: "Fisiopatología del Polo Anterior", prerreq: ["anatomia_ojo"] },
        { id: "optometria1", nombre: "Aplicaciones Clínicas Optométricas I", prerreq: ["estrabismo1", "glaucoma1"] },
        { id: "estrabismo2", nombre: "Estrabismo II", prerreq: ["estrabismo1"] },
        { id: "glaucoma2", nombre: "Estudio del Glaucoma II", prerreq: ["glaucoma1"] }
      ]
    },
    {
      nombre: "7º Semestre",
      ramos: [
        { id: "retina", nombre: "Retina e Imagenología Ocular" },
        { id: "optometria2", nombre: "Aplicaciones Clínicas Optométricas II", prerreq: ["optometria1"] },
        { id: "orto_pleoptico", nombre: "Estudio y tratamiento Ortóptico y pleóptico", prerreq: ["estrabismo2"] },
        { id: "gestion_estrategica", nombre: "Gestión estratégica en salud" },
        { id: "investigacion", nombre: "Introducción a la investigación" }
      ]
    },
    {
      nombre: "8º Semestre",
      ramos: [
        { id: "cirugia_refractiva", nombre: "Técnicas de apoyo en cirugía refractiva" },
        { id: "atencion_primaria", nombre: "Atención primaria en Oftalmología", prerreq: ["retina", "optometria2"] },
        { id: "neuroftalmologia", nombre: "Neuroftalmología", prerreq: ["glaucoma2"] },
        { id: "pre_internado", nombre: "Integración pre internado para oftalmología" },
        { id: "metodologia", nombre: "Metodología de la investigación", prerreq: ["investigacion"] },
        { id: "optativo1", nombre: "Optativo de profundización" }
      ]
    },
    {
      nombre: "9º Semestre",
      ramos: [
        { id: "ias", nombre: "Infección asociada a atención en salud", prerreq: ["cirugia_refractiva", "atencion_primaria", "neuroftalmologia", "pre_internado"] },
        { id: "gestion_salud", nombre: "Gestión y Administración en salud", prerreq: ["cirugia_refractiva", "atencion_primaria", "neuroftalmologia", "pre_internado"] },
        { id: "optativo2", nombre: "Optativo de profundización" },
        { id: "ins3", nombre: "INS" },
        { id: "proyecto", nombre: "Proyecto de investigación aplicada", prerreq: ["metodologia"] }
      ]
    },
    {
      nombre: "10º Semestre",
      ramos: [
        { id: "internado", nombre: "Internado mención Oftalmología y Optometría" }
      ]
    }
  ];

  // Guardar y leer los aprobados desde localStorage
  const aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

  function crearMalla() {
    semestres.forEach((semestre) => {
      const div = document.createElement("div");
      div.classList.add("semestre");

      const h2 = document.createElement("h2");
      h2.textContent = semestre.nombre;
      div.appendChild(h2);

      semestre.ramos.forEach((ramo) => {
        const r = document.createElement("div");
        r.classList.add("ramo");
        r.textContent = ramo.nombre;
        r.dataset.id = ramo.id;
        r.dataset.prerreq = JSON.stringify(ramo.prerreq || []);
        div.appendChild(r);
      });

      malla.appendChild(div);
    });
  }

  function actualizarEstado() {
    const ramos = document.querySelectorAll(".ramo");
    ramos.forEach((ramo) => {
      const id = ramo.dataset.id;
      const prerreq = JSON.parse(ramo.dataset.prerreq || "[]");
      const cumplidos = prerreq.every((r) => aprobados.includes(r));

      if (!cumplidos && prerreq.length > 0 && !aprobados.includes(id)) {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("aprobado");
      } else {
        ramo.classList.remove("bloqueado");
        if (aprobados.includes(id)) {
          ramo.classList.add("aprobado");
        } else {
          ramo.classList.remove("aprobado");
        }
      }
    });
  }

  document.body.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ramo")) return;

    const ramo = e.target;
    const id = ramo.dataset.id;
    if (ramo.classList.contains("bloqueado")) return;

    if (aprobados.includes(id)) {
      aprobados.splice(aprobados.indexOf(id), 1);
    } else {
      aprobados.push(id);
    }

    localStorage.setItem("aprobados", JSON.stringify(aprobados));
    actualizarEstado();
  });

  crearMalla();
  actualizarEstado();
});
