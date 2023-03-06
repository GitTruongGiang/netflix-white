import { API_KEY } from "./confing";

export const requestQuery = {
  topRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `/trending/all/day?api_key=${API_KEY}`,
  actions: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  comdedy: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  romance: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749`,
};
