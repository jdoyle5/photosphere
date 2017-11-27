json.extract! comment, :id, :body, :owner_id, :photo_id, :updated_at
json.username comment.owner.username
json.created time_ago_in_words(comment.updated_at)
