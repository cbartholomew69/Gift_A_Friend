import navController from "./NavCtrl";
import navTemplate from "./nav.html";

const navComponent = {
    controller: navController,
    template: navTemplate 
};

angular.module("myApp").component("navBar", navComponent);
