import axios from "axios";

export const fetchAllSongs = async () => {
  const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
  return res.data;
};

export const fetchGenres = async () => {
  const res = await axios.get("https://qtify-backend-labs.crio.do/genres");
  return res.data.data;
};
