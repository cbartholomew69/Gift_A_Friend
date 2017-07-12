NewEventController.$inject = ["$stateParams", "$http", "eventsService", "$state"];

function NewEventController($stateParams, $http, eventsService, $state){
    var vm = this;
    vm.event = {};

    vm.saveEvent = function() {
        eventsService.saveEvent({event: vm.event}).then((res) => {
            console.log(res);
            $state.go("eventIndex");
        });
    };
}
export default NewEventController;