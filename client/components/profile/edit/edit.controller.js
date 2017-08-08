editProfileController.$inject = ["$stateParams", "usersService", "$state"];

function editProfileController($stateParams, usersService, $state) {
    const vm = this;
    vm.updateProfile = updateProfile;

    function activate() {
        usersService.getProfile($stateParams.id).then(res => {
            console.log(res);
            vm.profile = res.user;
        });
    }
    activate();

    function updateProfile() {
        console.log(vm.profile)
        usersService.updateUser(vm.profile)
        .then(res => {
            console.log(res);
            $state.go('profile')
        })
    }
    
}

angular
    .module('myApp')
    .controller('editProfileController', editProfileController);

export default editProfileController;  