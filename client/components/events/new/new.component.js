import newEventController from "./new.controller";
import newEventTemplate from "./newhtml"'

const newEventComponent = {
    controller: newEventContoller,
    template: newEventTemplate
};

angular.module("myApp").component("newEvent", newEventComponent);
