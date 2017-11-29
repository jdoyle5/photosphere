# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  img_url    :string           not null
#  title      :string
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :likes,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :taggings,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Tagging

  has_many :tags,
    through: :taggings,
    source: :tag


    def date_created
      self.created_at
    end

end
