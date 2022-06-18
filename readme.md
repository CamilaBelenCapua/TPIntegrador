
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

Preguntas

PUT api/preguntas/agregarPreguntasExamen/:id BODY -> DATOS

Videos

PUT api/videos/agregarVideosExamen/:id BODY -> DATOS

PRUEBAS

POST api/usuarios/agregarProfesores/ BODY -> DATOS, los mismo datos que el alumno, dentro del metodo data que da de alta al profesor, hay que agregar un atributo rol que diga PROFESOR (ver ejemplos en este tp)
VERIFICAR TODOS LOS ENDPOINTS QUE PREGUNTAN POR ID, y luego de preguntar por id, verificar por rol, por ejemplo borraralumno que se manda un id, antes de borrarlo (como ahora hay alumnos y profesores) hay que verificar que ese id pertenezca a un alumno. Para hacer eso hay que hacer findOne(ver ejemplos) a la BD, traer el usuario que pertenezca con ese id y verificar que el rol de ese usuario sea alumno, si es asi eliminar sino tirar error y no eliminar.

VERR

GET api/examenes/consultarSaldo/:id_Examen
GET api/examenes/consultarCursoPago/:idAlumno
PUT api/examenes/actualizarPago/:id_Examen  BODY -> el monto que paga
PUT api/examenes/actualizarNota/:id_Examen





