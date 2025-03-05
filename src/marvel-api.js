import axios from "axios";

axios.defaults.baseURL = "https://gateway.marvel.com:443/v1/public/";
const API_KEY = import.meta.env.VITE_MARVEL_API_KEY;

export const getAllCharacters = async () => {
  const res = await axios.get(`/characters`, {
    params: {
      limit: 9,
      offset: 0,
      apikey: API_KEY,
    },
  });
  return res.data.data.results;
};

export const getCharacter = async (id) => {
  const res = await axios.get(`/characters/${id}`, {
    params: {
      apikey: API_KEY,
    },
  });
  return res.data.data.results[0];
};
