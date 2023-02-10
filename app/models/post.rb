class Post < ApplicationRecord
    belongs_to :user
    belongs_to :sneaker, optional: true
    has_many :comments
end
