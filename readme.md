Usuarios

GET api/usuarios/consultarUsuarioPorMail/:email
GET api/usuarios/consultarUsuario/:id
POST api/usuarios/agregarAlumno BODY -> DATOS
POST api/usuarios/agregarProfesor BODY -> DATOS
PUT api/usuarios/actualizarAlumno BODY -> DATOS
DELETE api/usuarios/borrarAlumno/:id
GET api/usuarios/listarAlumnos
POST api/usuarios/login

Resultados

PUT api/resultados/agregarResultadosAlumno/:id BODY -> DATOS

Examenes

GET api/examenes/listarExamenes
GET api/examenes/consultarExamen/:id
POST api/examenes/agregarExamen BODY -> DATOS
PUT api/examenes/actualizarExamen BODY -> DATOS 
DELETE api/examenes/borrarExamen/:id

Preguntas

PUT api/preguntas/agregarPreguntasExamen/:id BODY -> DATOS

Videos

PUT api/videos/agregarVideosExamen/:id BODY -> DATOS






