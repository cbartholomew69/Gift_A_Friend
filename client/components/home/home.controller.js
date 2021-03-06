homeController.$inject = ["$rootScope", "Auth"];

function homeController($rootScope, Auth) {
    const vm = this;
    vm.hello = "";
    vm.user = {};

    Auth.currentUser().then(function(user) {
        vm.user = user;
    });

}

angular
    .module("myApp")
    .controller("homeController", homeController);

export default homeController;