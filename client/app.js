
angular.module("myApp", ["ui.router", 'Devise', 'templates']).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router($stateProvider, $urlRouterProvider) {
    console.log("In the router")
    $stateProvider
        .state("home", {
            url: "/",
            template: "<gift-events></gift-events>",
            onEnter: function (Auth, $state) {
                console.log("Hit this state")
            }
        })
        .state("event", {
            url: "/event/:id",
            template: "<gift-event></gift-event>"
        })
        .state("newEvent", {
            url: "/event/new",
            template: "<new-event></new-event>"
        })
        .state('login', {
            url: '/login',
            template: require('./views/login.html'),
            controller: 'AuthCtrl',
            onEnter: function (Auth, $state) {
                console.log("Trying to hit Auth")
                Auth.currentUser().then(function () {
                    $state.go('home')
                })
            }
        })
        .state('register', {
            url: '/register',
            templateUrl: require('./views/register.html'),
            controller: 'AuthCtrl',
            onEnter: function (Auth, $state) {
                console.log("Trying to hit Auth")
                Auth.currentUser().then(function () {
                    $state.go('home')
                })
            }
        });
    $urlRouterProvider.otherwise("/");

}