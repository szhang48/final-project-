class Sneaker < ApplicationRecord
    has_many :own_sneakers
    has_many :want_sneakers
    has_many :owners, through: :own_sneakers, source: :user
    has_many :wanters, through: :want_sneakers, source: :user
end
