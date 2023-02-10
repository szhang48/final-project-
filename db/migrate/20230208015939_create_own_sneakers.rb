class CreateOwnSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :own_sneakers do |t|
      t.integer :sneaker_id
      t.integer :user_id

      t.timestamps
    end
  end
end
