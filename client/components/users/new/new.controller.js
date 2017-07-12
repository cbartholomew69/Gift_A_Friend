NewUserController.$inject = ["$stateParams", "$http", "usersService", "$state"];

function NewUserController($stateParams, $http, usersService, $state){
    var vm = this;
    vm.user = {};

    vm.saveUser = function() {
        usersService.saveUser(vm.user).then((res) => {
            console.log(res);
            $state.go("userIndex");
        });
    };
}
export default NewUserController;