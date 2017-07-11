DeleteController.$inject = ["eventsService", "$stateParams"];

function DeleteController(eventsService, $stateParams) {
    const vm = this;

    vm.event = {};

    function deleteEvent(){
        eventsService.deleteEvent($stateParams.id).then(res => {
          vm.event = res.event;
          console.log(res.event);
        });
    }
    
}
