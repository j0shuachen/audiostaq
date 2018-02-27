class Movie < ApplicationRecord
  validates :title, :poster, :release, :trailer, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  def average_rating
    if self.ratings.size > 0
      self.ratings.average(:rating)
    else
      # 'undefined'
      nil
    end
  end


end
