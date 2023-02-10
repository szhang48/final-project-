class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :likes, :dislikes, :user_id, :post_id
end
