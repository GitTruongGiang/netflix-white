import { API_KEY } from "../app/confing";

export const nameMovie = [
  {
    name: "TopRate",
    api: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  { name: "Trending", api: `/trending/all/day?api_key=${API_KEY}` },
  {
    name: "Actions",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  },
  {
    name: "Comedy",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  },
  {
    name: "Romance",
    api: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749`,
  },
];
