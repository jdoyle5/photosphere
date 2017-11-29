class AddIndexToTaggings < ActiveRecord::Migration[5.1]
  def change
    add_index :taggings, :tag_id
    add_index :taggings, :photo_id
  end
end
