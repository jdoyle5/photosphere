# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tag_id     :integer          not null
#  photo_id   :integer          not null
#

class Tagging < ApplicationRecord
  validates :tag_id, :photo_id, presence: true

  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tag

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo
end
