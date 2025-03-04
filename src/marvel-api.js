import axios from "axios";

axios.defaults.baseURL = "https://gateway.marvel.com:443/v1/public/";
const apiKey = "apikey=c5d6fc8b83116d92ed468ce36bac6c62";

export const getAllCharacters = async () => {
  const res = await axios.get(`/characters?limit=9&offset=210&${apiKey}`);
  return res.data.data.results;
};

export const getCharacter = async (id) => {
  const res = await axios.get(`/characters/${id}?${apiKey}`);
  return res.data.data.results[0];
};
