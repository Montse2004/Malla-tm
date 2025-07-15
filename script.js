/* style.css */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fdf6f9;
  color: #333;
}

header {
  background-color: #c98098; /* burdeo clarito pastel */
  color: white;
  padding: 1.5em 0;
  text-align: center;
}

h1, h2 {
  margin: 0.2em;
}

main {
  padding: 20px;
  max-width: 900px;
  margin: auto;
}

.semestre {
  background-color: #fbe7ef; /* rosado pastel */
  margin: 15px 0;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.semestre:hover {
  background-color: #f1d6e4; /* un poco más oscuro */
}

.semestre h3 {
  margin: 0;
  font-size: 1.2em;
  color: #8e3a59;
}

.contenido {
  list-style-type: none;
  margin-left: 20px;
  margin-top: 10px;
  display: none;
  padding-left: 0;
}

li.asignatura {
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff0f5;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}

li.asignatura:hover {
  background-color: #fce4ec;
}

li.asignatura .prereq {
  font-size: 0.85em;
  color: #555;
  margin-top: 5px;
  display: none;
}

/* Colores por tipo de asignatura */
.basico   { background-color: #fde2e4; } /* rosa claro */
.clinico  { background-color: #e8c0c8; } /* burdeo clarito pastel */
.optativo { background-color: #d8e2dc; } /* gris verdoso suave */
.electivo { background-color: #e0c3fc; } /* lavanda pastel */

footer {
  text-align: center;
  padding: 1em;
  background-color: #c98098;
  color: white;
  margin-top: 40px;
}

