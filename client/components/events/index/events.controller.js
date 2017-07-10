EventsController.$inject = ["eventsService"];
function EventsController(eventsService) {
    const vm = this;

    activate();

    function activate(){
        eventsService.getEvents().then(res => {
            vm.events = res;
        });
        
    }
}
export default EventsController;
