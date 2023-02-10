class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :likes, :default => 0
      t.integer :dislikes, :default => 0
      t.integer :user_id
      t.integer :post_id

      t.timestamps
    end
  end
end
