import "./MainHome.css";
import CardHome from "../cardHome/CardHome";

const MainHome = () => {
  return (
    <div className="mainHome">
      <div className="box-ps4">
        <div className="boxTextHome">
          <h1>Explora y Descubre los Mejores Juegos de PS4</h1>
          <p>
            Sumérgete en un mundo de emocionantes aventuras y acción
            desenfrenada con nuestra selección exclusiva de juegos para la
            PlayStation 4. Desde éxitos de ventas hasta joyas ocultas, es tu
            destino definitivo para descubrir y disfrutar de lo mejor que la
            consola tiene para ofrecer. ¡Prepárate para vivir experiencias
            inolvidables y desatar tu pasión por el gaming con nosotros!
          </p>
        </div>
        <div className="containCards">
          <CardHome imagenProp={"imagen_ps4"} />
        </div>
      </div>
      <div className="box-ps5">
        <div className="containCards">
          <CardHome imagenProp={"imagen_ps5"} />
        </div>
        <div className="boxTextHome">
          <h1>Explora el Universo de los Juegos de Alta Definición</h1>
          <p>
            Sumérgete en un cosmos de entretenimiento sin límites con nuestra
            selección exclusiva de juegos para la PlayStation 5. Desde éxitos
            consagrados hasta nuevas experiencias revolucionarias, te invitamos
            a descubrir y disfrutar lo mejor que la próxima generación de gaming
            tiene para ofrecer. ¡Prepárate para una inmersión total y desata tu
            pasión por el gaming mientras exploras el universo de la PS5 con
            nosotros!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
