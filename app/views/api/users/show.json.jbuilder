json.partial! "api/users/user", user: @user
json.post_count @user.posts.post_count
json.followers @user.followers.map(&:id)
json.following @user.followees.map(&:id)
json.follows_count @user.followers.count
json.following_count @user.followees.count
if logged_in?
  json.followed_by_current_user !!@user.followers.find_by(follwer_id: current_user.id)
else
  json.followed_by_current_user false
end
jsonextract! @user, :id, :username, :img_url
