NewProfileController.$inject = ["$stateParams", "$http", "usersService", "$state"];

function NewProfileController($stateParams, $http, usersService, $state){
    var vm = this;
    vm.profile = {};

    vm.saveProfile = function() {
        usersService.saveProfile({profile: vm.profile}).then((res) => {
            console.log(res);
            $state.go("profile");
        });
    };
}
export default NewProfileController;