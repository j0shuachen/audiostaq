class Rating < ApplicationRecord

  validates :user_id, :movie_id, :rating, presence: true
  validates :user_id, uniqueness: { scope: :movie_id }

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :movie,
  primary_key: :id,
  foreign_key: :movie_id,
  class_name: :Movie

end
