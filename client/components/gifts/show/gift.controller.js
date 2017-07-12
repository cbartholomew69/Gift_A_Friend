GiftController.$inject = ["$stateParams", "giftsService"];

function GiftController($stateParams, giftsService) {
    const vm = this;
      

    activate();

  function activate() {
      giftsService.getGift($stateParams.id).then(res => {
        vm.gift = res.gift;
      });
    }
}

export default GiftController;