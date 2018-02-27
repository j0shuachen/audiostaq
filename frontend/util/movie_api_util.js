export const fetchMovies = data => (
  $.ajax({
    method: "GET",
    url: '/api/movies',
    data
  })
);

export const fetchMovie = data => (
  $.ajax({
    method: "GET",
    url: `/api/movies/${data.id}`,
    data
  })
);

export const createMovie = data => (
  $.ajax({
    method: "POST",
    url: "api/movies",
    data
  })
);
