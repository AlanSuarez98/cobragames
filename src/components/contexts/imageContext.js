// ImageContext.js
import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [imagenProp, setImagenProp] = useState(null);

  return (
    <ImageContext.Provider value={{ imagenProp, setImagenProp }}>
      {children}
    </ImageContext.Provider>
  );
};
