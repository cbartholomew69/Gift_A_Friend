import eventsController from "./events.controller";
import eventsTemplate from "./events.html";

const eventsComponent = {
    controller: eventsController,
    template: eventsTemplate
};

angular.module("myApp").component("events", eventsComponent);