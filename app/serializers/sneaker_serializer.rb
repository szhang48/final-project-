class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :shoe, :release_date, :colorway, :uuid, :brand, :style_id, :retail_price, :market_value, :img_url
end
