NavController.$inject = ['Auth', '$rootScope'];

function NavController(Auth, $rootScope){
    const vm = this;
    vm.signedIn = Auth.isAuthenticated;
    vm.logout = Auth.logout;

     Auth.currentUser().then(function (user){
        $rootScope.user = user;
    });

    $rootScope.$on('devise:new-registration', function (e, user){
        $rootScope.user = user;
    });

    $rootScope.$on('devise:login', function (e, user){
        $rootScope.user = user;
    });

    $rootScope.$on('devise:logout', function (e, user){
       alert("You have been logged out.")
       $rootScope.user = undefined
    //    $state.go('welcome');
    });
}

export default NavController;