EventController.$inject = ["$stateParams", "eventsService", "$state"];

function EventController($stateParams, eventsService, $state) {
    const vm = this;
    vm.deleteEvent = deleteEvent;

    activate();

  function activate() {
      eventsService.getEvent($stateParams.id).then(res => {
        console.log(res);
        vm.event = res;
      });
    }

  function deleteEvent() {
    eventsService.deleteEvent($stateParams.id)
    .then(res => {
      console.log(res.message);
      // change the state here
      $state.go("eventIndex")
    })
    .catch(res => {
      console.log(res.error);
    })
  }
}

export default EventController;





