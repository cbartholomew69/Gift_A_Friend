import giftsController from "./gifts.controller";
import giftsTemplate from "./gifts.html";

const giftsComponent = {
    controller: giftsController,
    template: giftsTemplate 
};

angular.module("myApp").component("userGifts", giftsComponent);