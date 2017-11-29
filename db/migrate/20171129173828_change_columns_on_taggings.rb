class ChangeColumnsOnTaggings < ActiveRecord::Migration[5.1]
  def change
    change_column :taggings, :tag_id, :integer, null: false
    change_column :taggings, :photo_id, :integer, null: false
  end
end
