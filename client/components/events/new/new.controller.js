NewEventController.$inject = ["$stateParams", "$http", "eventsService", "$state"];

function NewEventController($stateParams, $http, eventsService, $state){
    var vm = this;
    vm.artist = {};

    vm.saveEvent = function() {
        eventsService.saveEvent(vm.event).then((res) => {
            console.log(res);
            $state.go("home");
        });
    };
}
export default NewEventController;