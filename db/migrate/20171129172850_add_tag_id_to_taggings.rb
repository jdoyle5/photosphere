class AddTagIdToTaggings < ActiveRecord::Migration[5.1]
  def change
    add_column :taggings, :tag_id, :integer
    add_column :taggings, :photo_id, :integer
  end
end
