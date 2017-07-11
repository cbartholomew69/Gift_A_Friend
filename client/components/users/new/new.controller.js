NewUserController.$inject = ["$stateParams", "$http", "usersService", "$state"];

function NewUserController($stateParams, $http, usersService, $state){
    var vm = this;
    vm.event = {};

    vm.saveUser = function() {
        eventsService.saveUser(vm.event).then((res) => {
            console.log(res);
            $state.go("home");
        });
    };
}
export default NewUserController;