import newProfileController from "./new.controller";
import newProfileTemplate from "./new.html";

const newProfileComponent = {
    controller: newProfileController,
    template: newProfileTemplate
};

angular.module("myApp").component("newProfile", newProfileComponent);
