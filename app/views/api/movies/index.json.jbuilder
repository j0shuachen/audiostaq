json.movies @movies.each do |movie|
  json.extract! movie, :id, :title, :poster, :trailer, :release
  u = movie.user
  prof = {username: u.username, id: u.id}
  json.user prof
  json.avg movie.average_rating
end
