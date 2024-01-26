import CardAnswer from "../cardAnswer/CardAnswer";
import "./AnswerHome.css";

const AnswerHome = () => {
  return (
    <div className="answerHome">
      <h1>Preguntas Frecuentes</h1>
      <div className="containerAnswer">
        <CardAnswer
          answer={"¿Que diferencia hay entre una cuenta primaria y secundaria?"}
          description={
            "PRIMARIA: Se juega desde tu usuario y no requiere estar conectado a internet - SECUNDARIA: se juega del usuario que se les otorga y conectado a internet"
          }
        />
        <CardAnswer
          answer={"¿En qué consta nuestra garantía?"}
          description={
            "Nuestra garantía consta de un sistema de resolución de problemas y recambio de juegos. Esto quiere decir que si usted tiene un problema con nuestro producto nos avisa y le damos solución. Si por algún motivo no se soluciona procederemos al recambio del juego. ¡IMPORTANTE! Como sabrán nosotros enviamos el producto con unas instrucciones de instalación y condiciones de uso, si estas son violadas o realizadas de manera errónea no se podrá sacar provecho de nuestro sistema de garantía"
          }
        />
        <CardAnswer
          answer={"¿Que es un juego Digital?"}
          description={
            "Un juego digital es un juego original que se descarga desde los servidores de sony directamente a su disco duro. No hay diferencia en el contenido con la versión física, solo cambia el medio de soporte, con los juegos digitales no tiene que estar cambiando el disco, tampoco se desgasta el lente de su consola"
          }
        />
        <CardAnswer
          answer={"¿Cuánto tiempo dura un juego digital?"}
          description={
            "Los juegos digitales tienen durabilidad ilimitada, NO vencen, NO caducan, NI expiran. Mientras se cumplan los sencillos pasos de instalación se podrá disfrutar el juego sin limitaciones"
          }
        />
        <CardAnswer
          answer={"¿Los juegos se bloquean?"}
          description={
            "Nuestros juegos NO se bloquean, TIENEN GARANTÍA, además con tu compra te enviamos una guía paso a paso muy sencillo para evitar cometer errores en la instalación"
          }
        />
        <CardAnswer
          answer={"¿Podre jugar online?"}
          description={
            "Sí, el juego tiene todas las funciones habilitadas incluidas multijugador; en PS4 se requiere que usted tenga PSPlus propio para acceder a las opciones multijugador"
          }
        />
        <CardAnswer
          answer={"¿En que idioma viene el juego?"}
          description={
            "Por lo general están en inglés (subtitulos español), pero muchos incluyen ahora el idioma español latino o español de España"
          }
        />
        <CardAnswer
          answer={"¿Puedo borrar la cuenta que me pasaron?"}
          description={"NO debe borrarlo, si lo hace perderá el juego"}
        />
        <CardAnswer
          answer={"¿Que tengo que hacer si tengo algun problema?"}
          description={"Informarnos a través de nuestros medios de contactos"}
        />
      </div>
    </div>
  );
};

export default AnswerHome;
