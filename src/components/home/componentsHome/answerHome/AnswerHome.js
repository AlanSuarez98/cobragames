import { useNavigate } from "react-router";
import "./AnswerHome.css";

const AnswerHome = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contacto");
  };
  return (
    <div className="answerHome">
      <h1>Preguntas Frecuentes</h1>
      <div className="containerAnswer">
        <details name="answers" open>
          <summary>
            ¿Que diferencia hay entre una cuenta primaria y secundaria?
          </summary>
          <p>
            PRIMARIA: Se juega desde tu usuario y no requiere estar conectado a
            internet - SECUNDARIA: se juega del usuario que se les otorga y
            conectado a internet
          </p>
        </details>
        <details name="answers" open>
          <summary>¿En qué consta nuestra garantía?</summary>
          <p>
            Nuestra garantía consta de un sistema de resolución de problemas y
            recambio de juegos. Esto quiere decir que si usted tiene un problema
            con nuestro producto nos avisa y le damos solución. Si por algún
            motivo no se soluciona procederemos al recambio del juego.
            ¡IMPORTANTE! Como sabrán nosotros enviamos el producto con unas
            instrucciones de instalación y condiciones de uso, si estas son
            violadas o realizadas de manera errónea no se podrá sacar provecho
            de nuestro sistema de garantía
          </p>
        </details>
        <details name="answers" open>
          <summary>¿Que es un juego Digital?</summary>
          <p>
            Un juego digital es un juego original que se descarga desde los
            servidores de sony directamente a su disco duro. No hay diferencia
            en el contenido con la versión física, solo cambia el medio de
            soporte, con los juegos digitales no tiene que estar cambiando el
            disco, tampoco se desgasta el lente de su consola
          </p>
        </details>
        <details name="answers" open>
          <summary>¿Cuánto tiempo dura un juego digital?</summary>
          <p>
            Los juegos digitales tienen durabilidad ilimitada, NO vencen, NO
            caducan, NI expiran. Mientras se cumplan los sencillos pasos de
            instalación se podrá disfrutar el juego sin limitaciones
          </p>
        </details>
        <details name="answers" open>
          <summary>¿Los juegos se bloquean?</summary>
          <p>
            Nuestros juegos NO se bloquean, TIENEN GARANTÍA, además con tu
            compra te enviamos una guía paso a paso muy sencillo para evitar
            cometer errores en la instalación
          </p>
        </details>
        <details name="answers" open>
          <summary>¿Podre jugar online?</summary>
          <p>
            Sí, el juego tiene todas las funciones habilitadas incluidas
            multijugador; en PS4 se requiere que usted tenga PSPlus propio para
            acceder a las opciones multijugador
          </p>
        </details>
        <details name="answers" open>
          <summary>¿En que idioma viene el juego?</summary>
          <p>
            Por lo general están en inglés (subtitulos español), pero muchos
            incluyen ahora el idioma español latino o español de España
          </p>
        </details>
        <details name="answers" open>
          <summary>¿Puedo borrar la cuenta que me pasaron?</summary>
          <p>NO debe borrarlo, si lo hace perderá el juego</p>
        </details>
        <details name="answers" open>
          <summary>¿Que tengo que hacer si tengo algun problema?</summary>
          <p>
            Informarnos a través de nuestros medios de{" "}
            <span onClick={handleContact}>contactos</span>
          </p>
        </details>
      </div>
    </div>
  );
};

export default AnswerHome;
