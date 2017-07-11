UserController.$inject = ["$stateParams", "usersService"];

function UserController($stateParams, usersService) {
    const vm = this;
      

    activate();

  function activate() {
      usersService.getUser($stateParams.id).then(res => {
        vm.user = res.event;
      });
    }
}

export default UserController;