json.extract! @movie, :id, :title, :poster, :trailer, :release
json.user do
  json.extract! @movie.user, :username, :id
end
