La aplicación es un gestor de examenes, con dos roles de usuario. Por un lado el profesor, el cual podrá:
* Ver los examenes de los alumnos. 
* Actualizar los datos de cualquier alumno, como asi tambien crearlos o eliminarlos.
* Agregar si se dió de alta un profesor.
* Editar los examenes.
* Listar los examentes y consultarlos.
* Crear los resultados de cada examen para cada alumno.
* Crear los examenes, las preguntas y los videos.

Por otro lado el alumno podrá ver su examen mediante un id.

Usuarios

GET api/usuarios/consultarUsuarioPorMail/:email
GET api/usuarios/consultarUsuario/:id
POST api/usuarios/agregarAlumno BODY -> DATOS
POST api/usuarios/agregarProfesor BODY -> DATOS
PUT api/usuarios/actualizarAlumno/:id BODY -> DATOS
DELETE api/usuarios/borrarAlumno/:id
GET api/usuarios/listarAlumnos
POST api/usuarios/login BODY -> DATOS

Resultados

PUT api/resultados/agregarResultadosAlumno/:id BODY -> DATOS

Examenes

GET api/examenes/listarExamenes
GET api/examenes/consultarExamen/:id
POST api/examenes/agregarExamen BODY -> DATOS
PUT api/examenes/actualizarExamen/ :id BODY -> DATOS 
DELETE api/examenes/borrarExamen/:id

Preguntas

PUT api/preguntas/agregarPreguntasExamen/:id BODY -> DATOS

Videos

PUT api/videos/agregarVideosExamen/:id BODY -> DATOS






