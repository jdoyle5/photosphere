class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.owner_id = current_user.id
    if @like.save
      @photo = like.photo
      render 'api/photos/show'
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find_by(owner_id: current_user.id, photo_id: params[:id])
    @like.destroy
    @photo = @like.photo
    render 'api/photos/show'
  end

  def like_params
    params.require(:like).permit(:owner_id, :photo_id)
  end

end
