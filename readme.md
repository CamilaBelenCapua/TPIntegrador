
Alumnos

GET api/alumnos/consultarAlumnoPorMail/:email
GET api/alumnos/consultarAlumno/:id
POST api/alumnos/agregarAlumno BODY -> DATOS
PUT api/alumnos/actualizarAlumno BODY -> DATOS
DELETE api/alumnos/borrarAlumno/:id

Examenes

GET api/examenes/listarExamenes
GET api/examenes/consultarExamen/:id
POST api/examenes/agregarExamen BODY -> DATOS
PUT api/examenes/actualizarExamen BODY -> DATOS 
DELETE api/examenes/borrarExamen/:id

VERR

GET api/examenes/consultarSaldo/:id_Examen
GET api/examenes/consultarCursoPago/:idAlumno
PUT api/examenes/actualizarPago/:id_Examen  BODY -> el monto que paga
PUT api/examenes/actualizarNota/:id_Examen

Resultados

GET api/resultados/consultarResultado/:id
POST api/resultados/agregarResultado BODY -> DATOS
PUT api/resultados/actualizarResultado BODY -> DATOS
DELETE api/resultados/borrarResultado/:id

Preguntas

GET api/preguntas/consultarPregunta/:id
POST api/preguntas/agregarPregunta BODY -> DATOS
PUT api/preguntas/actualizarPregunta BODY -> DATOS 
DELETE api/preguntas/borrarPregunta:id 

Videos

GET api/videos/consultarVideo/:id
POST api/videos/agregarVideo BODY -> DATOS
PUT api/videos/actualizarVideo BODY -> DATOS
DELETE api/videos/borrarVideo:id






