UsersController.$inject = ["usersService"];

function UsersController(usersService) {
    const vm = this;
    console.log("All users")
    activate();

    function activate(){
        usersService.getUsers().then(res => {
            vm.users = res;
        });
        
    }
}
export default UsersController;