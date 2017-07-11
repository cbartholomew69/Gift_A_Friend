class EventsController < ApplicationController

    def index
        @events = Event.all
        render json: @events
    end

    def show
        @event = Event.find(params_[:id])
        render json: @event

    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render json: [
                event: @event
            ]
        else
            render status: 500,
                    json: {
                      error: @event.errors
                    }
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
          render json: {
            event: @event
          }
        else
      render status: 500,
             json: {
                 error: @event.errors
             }
        end     
    end
    
    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
          render json: [
            message: 'Successfully deleted event'
          ]
        else
          render status: 500, 
                 json: {
                   error: 'Could not delete Event'
                 }
        end        
    end

    private

    def event_params
        params.require(:event).permit(:category)
    end
end
