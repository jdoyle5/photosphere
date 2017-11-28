class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :owner_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :likes, :owner_id
    add_index :likes, :photo_id
  end
end
