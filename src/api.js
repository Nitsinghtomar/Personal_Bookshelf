// src/api.js
import axios from 'axios';

export const searchBooks = async (query) => {
  const response = await axios.get(`https://openlibrary.org/search.json`, {
    params: {
      q: query,
      limit: 10,
      page: 1
    }
  });
  return response.data.docs;
};
