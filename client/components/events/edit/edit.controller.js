EventController.$inject = ["$stateParams", "eventsService", "$state"];

function EventController($stateParams, eventsService, $state) {
    const vm = this;
    vm.updateEvent = updateEvent;

    function activate() {
      eventsService.getEvent($stateParams.id).then(res => {
        console.log(res);
        vm.event = res;
      });
    }
    activate();
    
  function updateEvent() {
    eventsService.updateEvent(vm.event)
    .then(res => {
      console.log(res);
      $state.go("event", {id: vm.event.id});
    })
    .catch(res => {
      console.log(res);
    })
  }
}

export default EventController;
