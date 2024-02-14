import axios from "axios";

const API_KEY = "96fcf2435e17c897bfb8357297f7878f";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchPopular = async () => {
  try {
    const { data } = await axios.get("/trending/movie/day", {
      params: {
        language: "en-US",
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Oops, something went wrong with fetching popular movies!");
    return [];
  }
};

const getMovieDetailsPage = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, {
      params: {
        language: "en-US",
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Oops, something went wrong with fetching movie details!");
    return null;
  }
};

const searchMovie = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: {
        language: "en-US",
        api_key: API_KEY,
        query,
        page: 1,
      },
    });
    return data.results;
  } catch (error) {
    console.error("Oops, something went wrong with searching for movies!");
    return [];
  }
};

const getMovieCast = async (movieId) => {
  try {
    const {
      data: { cast },
    } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        language: "en-US",
        api_key: API_KEY,
        page: 1,
      },
    });
    return cast;
  } catch (error) {
    console.error("Oops, something went wrong with fetching movie cast!");
    return [];
  }
};

const getMovieReviews = async (movieId) => {
  try {
    const {
      data: { results },
    } = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        language: "en-US",
        api_key: API_KEY,
        page: 1,
      },
    });
    return results;
  } catch (error) {
    console.error("Oops, something went wrong with fetching movie reviews!");
    return [];
  }
};

export {
  fetchPopular,
  getMovieDetailsPage,
  searchMovie,
  getMovieCast,
  getMovieReviews,
};
