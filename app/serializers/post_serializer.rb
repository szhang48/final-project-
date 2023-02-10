class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :sneaker_id, :likes, :dislikes
end
