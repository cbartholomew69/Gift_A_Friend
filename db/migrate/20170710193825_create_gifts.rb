class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.references :user, foreign_key: true
      t.references :event, foreign_key: true
      t.string :item
      t.boolean :claimed

      t.timestamps
    end
  end
end
