eventsService.$inject = ["$http"];
function eventsService($http){
    const service = this;

    service.getEvents = function(){
        console.log("Get Events");
        return $http.get("/events").then(res => res.date);
    };

    service.getEvent = function (id) {
        return $http.get(`/events/${id}`).then(res => res.date);
    };  
          
    service.saveEvent = function (newEvent) {
        return $http.post("/events", newEvent).then(res => {
           return res.date;
        });
    };          
    
    return service;
}

angular.module("myApp").service("eventsService", eventsService);
