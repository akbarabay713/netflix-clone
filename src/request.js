const API_key = "cfe422613b250f702980a3bbf9e90716";

const request = {
  fetchTranding: `/trending/all/week?api_key=${API_key}&language=en-us`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_key}&page=1`,
  fetchTopRated: `/discover/movie?api_key=${API_key}&page=2`,
  fetchActionMovies: `/discover/movie?api_key=${API_key}&page=3`,
  fetchComedyMovies: `/discover/movie?api_key=${API_key}&page=4`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_key}&page=9`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_key}&page=6`,
  fetchUpComing: `/movie/upcoming?api_key=${API_key}&page=1`,
};

export default request;
