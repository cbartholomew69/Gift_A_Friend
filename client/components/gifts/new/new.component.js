import newGiftController from "./new.controller";
import newGiftTemplate from "./new.html";

const newGiftComponent = {
    controller: newGiftController,
    template: newGiftTemplate
};

angular.module("myApp").component("newGift", newGiftComponent);