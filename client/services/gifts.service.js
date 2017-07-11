giftsService.$inject = ["$http"];
function giftsService($http){
    const gift = this;

    service.getGifts = function(){
        console.log("Get Gifts");
        return $http.get("/gifts").then(res => res.date);
    };

    service.getGift = function (id) {
        return $http.get(`/gifts/${id}`).then(res => res.date);
    };  
          
    service.saveGift = function (newUser) {
        return $http.post("/gifts", newGift).then(res => {
           return res.date;
        });
    };          
    service.deleteGift = function() {
        return $http.delete("/gifts").then(res => res.date);        
        };
    return service;
}

angular
    .module("myApp")
    .service("giftsService", giftsService);