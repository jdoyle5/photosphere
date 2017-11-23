class Api::PhotosController < ApplicationController
  def index
    @photos = Photos.all
    render :index
  end

  def create

  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy

  end


end
