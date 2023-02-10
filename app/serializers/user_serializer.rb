class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :city, :bio
end
