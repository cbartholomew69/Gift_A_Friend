UserController.$inject = ["$stateParams", "usersService"];

function UserController($stateParams, usersService) {
    const vm = this;
      

    activate();

  function activate() {
      usersService.getUser($stateParams.id).then(res => {
        vm.user = res.user;
        vm.events = res.events;
      });
    }
}

export default UserController;