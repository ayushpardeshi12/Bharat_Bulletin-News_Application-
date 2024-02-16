import axios from "axios";
const API_KEY = "9f2f81c144f641d4828cf10de8f67562";

export const fetchNewsArticles = async (searchTerm) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      searchTerm
    )}&apiKey=${API_KEY}`
  );

  const data = response.data;
  return data;
};
