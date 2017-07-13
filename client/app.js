
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
        .state("newGift", {
            url: "/events/:event_id/gifts/new",
            template: "<new-gift></new-gift>"
        })
        .state("profile", {
            url: "/users/:user_id/profile",
            template: "<new-profile></new-profile>"
        })
        // .state("newUser", {
        //     url: "/users/:user_id/users/new,
        //     template: "<event-user></event-user>"
        // })
        .state('login', {
            url: '/login',
            template: "<gift-login></gift-login>",
            onEnter: ['Auth', '$state', function (Auth, $state) {
                console.log("Trying to hit Auth")
                Auth.currentUser().then(function () {
                    $state.go('home')
                })
            }]
        })
        .state('register', {
            url: '/register',
            template: "<gift-register></gift-register>",
            onEnter: ['Auth', '$state', function (Auth, $state) {
                console.log("Trying to hit Auth")
                Auth.currentUser().then(function () {
                    $state.go('newEvent')
                });
            }]
        })
        
    $urlRouterProvider.otherwise("/");
    
}