GiftsController.$inject = ["giftsService"];

function GiftsController(giftsService) {
    const vm = this;
    console.log("User Gift")
    activate();

    function activate(){
        giftsService.getGifts().then(res => {
            vm.gifts = res;
        });
        
    }
}
export default GiftsController;