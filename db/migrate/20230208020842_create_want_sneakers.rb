class CreateWantSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :want_sneakers do |t|
      t.string :sneaker_id
      t.string :user_id

      t.timestamps
    end
  end
end
