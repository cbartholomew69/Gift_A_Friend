ProfileController.$inject = ['Auth', '$rootScope', '$state', 'usersService'];

function ProfileController(Auth, $rootScope, $state, usersService) {
    const vm = this;
    console.log("Help Me")

    activate();

    function activate(){
        usersService.getProfile()
        .then(res => {
          console.log(res);
          vm.profile = res;
        });
    }
}
export default ProfileController;




