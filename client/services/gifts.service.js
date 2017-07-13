giftsService.$inject = ["$http"];
function giftsService($http){
    const service = this;

    service.getGifts = function(){
        console.log("Get Gifts");
        return $http.get("/gifts").then(res => res.data);
    };

    service.getGift = function (id) {
        return $http.get(`/gifts/${id}`).then(res => res.data);
    };  

    service.updateGift = function (gift) {
        return $http.put(`/gifs/${gift.id}`, gift).then(res => res.data);
    }; 
          
    service.saveGift = function (newGift, eventId) {
        return $http.post(`/gifts/${eventId}/gifts`, newGift).then(res => {
           return res.data;
        });
    };

    service.deleteGift = function() {
        return $http.delete("/gifts").then(res => res.data);        
    };
    
    return service;
}

angular
    .module("myApp")
    .service("giftsService", giftsService);