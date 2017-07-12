class GiftsController < ApplicationController
  
    def index
        @gifts = Gift.all
        render json: @gifts
    end

    def show
        @gift = Gift.find(params[:id])
        render json: @gift

    end

    def create
        @gift = Gift.new(gift_params)
        if @gift.save
            render json: [
                gift: @gift
            ]
        else
            render status: 500,
                    json: {
                      error: @gift.errors
                    }
        end
    end

    def update
        @gift = Gift.find(params[:id])
        if @gift.update(gift_params)
          render json: {
            gift: @gift
          }
        else
      render status: 500,
             json: {
                 error: @gift.errors
             }
        end     
    end
    
    def destroy
        @gift = Gift.find(params[:id])
        if @gift.destroy
          render json: [
            message: 'Successfully deleted gift'
          ]
        else
          render status: 500, 
                 json: {
                   error: 'Could not delete gift'
                 }
        end        
    end

    private

    def gift_params
        params.require(:gift).permit(:item, :claimed)
    end
end
