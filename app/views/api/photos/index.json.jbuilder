@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :img_url, :title, :owner_id
  end
end
