class EventsController < ApplicationController

    def index
        @events = Events.all
        rendor json: @events
    end

    def create
        @event = Event.create!(event_params)
        redirect_to event_path(@event)
    end

    def show
        @event = Event.find(params_[:id])
        rendor json: @event

    end

    def update
        @event = Event.find(params[:id])
        @event.update!(event_params)
        redirect_to event_path(@event)
    end
    
    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        redirect_to events_path
    end

    private

    def event_params
        params.require(:event).permit(:type)
    end
end
