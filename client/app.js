const angular = require('angular');
require("angular-ui-router");

angular.module("myApp", ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouteProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            template: "<events></events>"
        })
        .state("home", {
            url: "/event/:id",
            template: "<events></events>"
        })
        .state("newEvent", {
            url: "/event/new",
            template: "<new-event></new-event>"
        });
    $urlRouteProvider.otherwise("/");

}