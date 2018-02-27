json.rating do
 @ratings.each do |x|
   json.set! x.movie_id do
      json.extract! x, :rating
    end
  end
end
