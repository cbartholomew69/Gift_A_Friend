EventsController.$inject = ["eventsService"];

function EventsController(eventsService) {
    const vm = this;
    console.log("Gift events")
    activate();

    function activate(){
        eventsService.getEvents().then(res => {
            vm.events = res;
        });
        
    }
}
export default EventsController;

