class CreateRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    add_index :ratings, :user_id
    add_index :ratings, :movie_id
    add_index :ratings, [:user_id, :movie_id], unique: true
  end
end
