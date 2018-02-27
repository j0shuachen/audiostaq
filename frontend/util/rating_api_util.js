export const fetchRatings = data => (
  $.ajax({
    method: "GET",
    url: '/api/ratings',
    data
  })
);

export const fetchRating = data => (
  $.ajax({
    method: "GET",
    url: `/api/ratings/${data.id}`,
    data
  })
);


export const createRating = data => (
  $.ajax({
    method: "POST",
    url: "api/ratings",
    data
  })
);

export const updateRating = data =>(
  $.ajax({
    method: 'PATCH',
    url: `/api/ratings/${data.id}`,
    data
  })
);
