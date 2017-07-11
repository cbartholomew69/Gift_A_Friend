usersService.$inject = ["$http"];
function usersService($http){
    const service = this;

    service.getUsers = function(){
        console.log("Get Users");
        return $http.get("/users").then(res => res.date);
    };

    service.getUser = function (id) {
        return $http.get(`/users/${id}`).then(res => res.date);
    };  
          
    service.saveUser = function (newUser) {
        return $http.post("/users", newUser).then(res => {
           return res.date;
        });
    };          
    service.deleteUser= function() {
        return $http.delete("/users").then(res => res.date);        
        };
    return service;
}

angular
    .module("myApp")
    .service("usersService", usersService);