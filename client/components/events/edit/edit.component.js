import eventController from "./edit.controller";
import eventTemplate from "./edit.html";

const eventComponent = {
    controller: eventController,
    template: eventTemplate 
};

angular.module("myApp").component("giftEvents", eventComponent);