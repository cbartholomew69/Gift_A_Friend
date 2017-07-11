import usersController from "./users.controller";
import usersTemplate from "./users.html";

const usersComponent = {
    controller: usersController,
    template: usersTemplate 
};

angular.module("myApp").component("giftUsers", usersComponent);