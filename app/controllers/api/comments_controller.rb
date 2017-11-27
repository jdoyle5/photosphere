class Api::CommentsController < ApplicationController
  def index
    if params[:photo_id]
      @comments = Photo.find(params[:photo_id]).comments
    else
      @comments = Comment.all
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  def show

  end

  def update

  end

  def comment_params
    params.require(:comment).permit(:body, :owner_id, :photo_id)
  end


end
