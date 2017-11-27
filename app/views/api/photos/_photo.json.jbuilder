json.extract! photo, :id, :img_url, :title, :owner_id, :created_at
json.username photo.owner.username
