import axios from "axios";

const BASE_URL = "https://data-cobragames.onrender.com/data";

export const getAllGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const games = response.data.juegos;
    console.log(response.data.juegos);
    return games;
  } catch (error) {
    console.error("Error al obtener todos los juegos:", error);
    throw error;
  }
};
