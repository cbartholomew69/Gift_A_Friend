eventsService.$inject = ["$http"];
function eventsService($http){
    const service = this;

    service.getEvents = function(){
        console.log("Get Events");
        return $http.get("/events").then(res => res.data);
    };

    service.getEvent = function (id) {
        return $http.get(`/events/${id}`).then(res => res.data);
    };  
          
    service.saveEvent = function (newEvent) {
        return $http.post("/events", newEvent).then(res => {
           return res.data;
        });
    };          
    service.deleteEvent = function(id) {
        //return $http.delete("/gifts").then(res => res.data);
        return $http.delete("/events/" + id).then(res => { 
            return res
        });        
    }
    return service;
}
angular
    .module("myApp")
    .service("eventsService", eventsService);
