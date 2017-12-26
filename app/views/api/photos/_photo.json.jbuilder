json.extract! photo, :id, :img_url, :title, :owner_id, :created_at
json.username photo.owner.username
json.user_photo photo.owner.img_url
json.likes photo.likes.count
json.liked_by_current_user !!photo.likes.find_by(owner_id: current_user.id)
