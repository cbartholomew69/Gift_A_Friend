EventController.$inject = ["$stateParams", "eventsService"];

function EventController($stateParams, eventsService) {
    const vm = this;

    activate();

  function activate() {
      eventsService.getEvent($stateParams.id).then(res => {
        vm.event = res.event;
      });
    }
}

export default EventController;
