usersService.$inject = ["$http"];
function usersService($http){
    const service = this;

    service.getUsers = function(){
        console.log("Get Users");
        return $http.get("/users").then(res => res.data);
    };

    service.getUser = function (id) {
        return $http.get(`/users/${id}`).then(res => res.data);
    };

    service.getProfile = function () {
        return $http.get('users/profile').then(res => {
            return res.data
        });
    };

    service.updateUser = function (user) {
        return $http.put(`/users/${user.id}`, user).then(res => res.data);
    }; 

    service.saveUser = function (newUser) {
        return $http.post("/users", newUser).then(res => {
           return res.data;
        });
    };

    service.deleteUser= function() {
        return $http.delete("/users").then(res => res.data);        
    };
    
    return service;
}

angular
    .module("myApp")
    .service("usersService", usersService);