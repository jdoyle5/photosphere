class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.followee_id = params[:followee_id]
    @follow.follower_id = current_user.id
    if @follow.save
      @user = @follow.followee
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by({followee_id: params[:followee_id], follower_id: params[:follower_id]})
    @user = @follow.followee
    @follow.destroy
    render 'api/users/show'
  end

  def show
    @follow = Follow.find(params[:id])
    render 'api/follows/show'
  end

  def followers
    @follows = Follow.where(followee_id: params[:user_id])
    render 'api/follows/followers'
  end

  def followees
    @follows = Follow.where({follower_id: params[:user_id]})
    render 'api/follows/followees'
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :id)
  end


end
