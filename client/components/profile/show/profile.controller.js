ProfileController.$inject = ['Auth', '$rootScope', '$state', 'usersService', '$stateParams'];

function ProfileController(Auth, $rootScope, $state, usersService, $stateParams) {
    const vm = this;
    vm.profile = {};

    console.log("Help Me")

    activate();

    function activate(){
        usersService.getProfile()
        .then(res => {
          console.log(res);
          vm.profile = res;
        })
        .catch(res => {
            $state.go('home');
        });
    }
}
export default ProfileController;




