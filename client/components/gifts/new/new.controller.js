NewGiftController.$inject = ["$stateParams", "$http", "giftsService", "$state"];

function NewGiftController($stateParams, $http, giftsService, $state){
    var vm = this;
    vm.gift = {};

    vm.saveGift = function() {
        console.log($stateParams);
        giftsService.saveGift(vm.gift, $stateParams.event_id).then((res) => {
            console.log(res);
            $state.go("home");
        });
    };
}
export default NewGiftController;