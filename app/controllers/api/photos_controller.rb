class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      @photos = User.find(params[:user_id]).photos
    elsif params[:tag_id]
      @photos = Tag.find(params[:tag_id]).tagged_photos
    else
      @photos = Photo.all
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(:id, params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  def photo_params
    params.require(:photo).permit(:img_url, :title, :owner_id)
  end

end
