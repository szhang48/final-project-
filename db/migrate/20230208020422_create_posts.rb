class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :user_id
      t.integer :sneaker_id, :default => 0
      t.integer :likes, :default => 0
      t.integer :dislikes, :default => 0

      t.timestamps
    end
  end
end
