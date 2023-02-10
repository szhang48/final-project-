class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :title
      t.string :category
      t.string :shoe
      t.string :release_date
      t.string :colorway
      t.string :uuid
      t.string :brand
      t.string :style_id
      t.string :retail_price
      t.string :market_value
      t.string :img_url

      t.timestamps
    end
  end
end
