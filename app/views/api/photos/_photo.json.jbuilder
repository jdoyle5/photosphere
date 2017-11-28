json.extract! photo, :id, :img_url, :title, :owner_id, :created_at
json.username photo.owner.username
json.likes photo.likes.count
json.liked_by_current_user !!photo.likes.find_by(owner_id: current_user.id)
