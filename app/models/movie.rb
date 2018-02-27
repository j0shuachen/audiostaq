class Movie < ApplicationRecord
  validates :title, :poster, :release, :trailer, :user_id, presence: true
end
