import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
  //En la primera renderización el valor de useRef es null, pero cuando coge otro valor distino
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0); // vanta va a ser inicializado a 0

  //La funcion de use effect se va a invocar ante
  //la segunda renderización, en ese punto ya va a contener un valor "myRefDiv.current"
  useEffect(() => {
    if (!vanta) {
      //Aqui hacemos la inicialización del componente
      //Activo el efecto "clouds"
      Clouds({
        THREE,
        el: myRefDiv.current,
      });
      console.log("establezco vanta a un valor diferente de cero");
    }
    // Detener el efecto al salir de la pantalla : desasociar ese recurso
    return () => {
      //Dentro de esta funciona se va a realizar la destrucción de los recursos tomados por vanta
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]); // con esto se asegura que siga funcionando bien si tuviera más variables de use

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
