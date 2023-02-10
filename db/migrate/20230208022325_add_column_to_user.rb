class AddColumnToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :avatarUrl, :string
    add_column :users, :bio, :text
  end
end
