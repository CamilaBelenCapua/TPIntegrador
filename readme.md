
Alumnos

GET api/alumnos/consultarAlumnoPorMail/:email
GET api/alumnos/consultarAlumno/:id
POST api/alumnos/agregarAlumno BODY -> DATOS
PUT api/alumnos/actualizarAlumno BODY -> DATOS
DELETE api/alumnos/borrarAlumno/:id
GET api/alumnos/listarAlumnos

Resultados

PUT api/resultados/agregarResultadosAlumno/:id BODY -> DATOS

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

Preguntas

PUT api/preguntas/agregarPreguntasExamen/:id BODY -> DATOS

Videos

PUT api/videos/agregarVideosExamen/:id BODY -> DATOS






