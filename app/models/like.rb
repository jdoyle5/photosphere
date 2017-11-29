# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :owner_id, :photo_id, presence: true

  belongs_to :photo,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: :Photo

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
