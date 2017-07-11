
auth.$inject = ['$rootScope', 'Auth', '$state'];

function auth($rootScope, Auth, $state){
    var config ={headers: {'X-HTTP-Method-Override': 'POST'}};
    const vm = this;
    
    vm.register = function() {
        Auth.register(vm.user, config).then(function(user){
            $rootScope.user = user
            alert("Thanks for signing up, " + user.name);
            $state.go('home');
        },     function(errorResponse){
        });
    }; 

    vm.login = function(){
        Auth.login(vm.user, config).then(function(user){
            $rootScope.user = user
            alert("Your're all signed in, " + user.name);
            $state.go('home');
        },      function(errorResponse){
        });
    }

    return vm;
}

const logInComponent = {
    controller: auth,
    template: require('../views/login.html')
};


const registerComponent = {
    controller: auth,
    template: require('../views/register.html')
};

angular.module("myApp").component("giftLogin", logInComponent);
angular.module("myApp").component("giftRegister", registerComponent);

export default auth;
