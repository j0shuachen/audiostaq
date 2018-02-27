class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release
      t.string :trailer
      t.string :poster
      t.string :user_id
      t.timestamps
    end
    add_index :movies, :user_id
  end
end
