(function(){
    angular.module('myApp', ['ui.router', 'Devise', 'templates'])
    .controller('FirstController', function(){
        console.log("FirstController loaded");
    });
})();