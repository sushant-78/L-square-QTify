import axios from "axios";

const BASE_URL = "https://qtify-backend-labs.crio.do/albums";

export const fetchTopAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/top`);
  return response.data;
};

export const fetchNewAlbums = async () => {
  const response = await axios.get(`${BASE_URL}/new`);
  return response.data;
};
