class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post
  
    validates :text, presence: { minimum: 3}
  
    
    def username
      self.user.username
    end
end
