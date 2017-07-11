
angular.module("myApp", ["ui.router", 'Devise', 'templates']).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router($stateProvider, $urlRouterProvider) {
    console.log("In the router")
    $stateProvider
        .state("home", {
            url: "/",
            template: "<home></home>",
            onEnter: function (Auth, $state) {
                console.log("Hit this state")
            }
        })
        .state("eventIndex", {
            url: "/events",
            template: "<gift-events></gift-events>"
        })
        .state("event", {
            url: "/events/:id",
            template: "<gift-event></gift-event>"
        })
        .state("newEvent", {
            url: "/events/new",
            template: "<new-event></new-event>"
        })
        .state("editEvent", {
            url: "/events/:id/edit",
            template: "<edit-event></edit-event>"
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
            template: require('./views/register.html'),
            controller: 'AuthCtrl',
            onEnter: function (Auth, $state) {
                console.log("Trying to hit Auth")
                Auth.currentUser().then(function () {
                    $state.go('home')
                });
            }
        })
        
    $urlRouterProvider.otherwise("/");
    
}