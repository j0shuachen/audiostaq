class AddNullFalseToMovies < ActiveRecord::Migration[5.1]
  def change
    change_column :movies, :title, :string, null: false
    change_column :movies, :release, :string, null: false
    change_column :movies, :trailer, :string, null: false
    change_column :movies, :poster, :string, null: false
    change_column :movies, :user_id, :integer, using: 'user_id::integer', null: false
  end
end
