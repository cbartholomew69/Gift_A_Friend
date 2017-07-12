import GiftController from "./gift.controller";
import giftTemplate from "./gift.html";

const giftComponent = {
    controller: GiftController,
    template: giftTemplate
};

angular.module("myApp").component("userGift", giftComponent);