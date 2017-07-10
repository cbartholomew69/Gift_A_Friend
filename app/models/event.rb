class Event < ApplicationRecord
    has_many :gifts, dependent: :destroy
end
