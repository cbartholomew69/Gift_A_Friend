import profileController from "./profile.controller";
import profileTemplate from "./profile.html";

const profileComponent = {
    controller: profileController,
    template: profileTemplate 
};

angular.module("myApp").component("profile", profileComponent);