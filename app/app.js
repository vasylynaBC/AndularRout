angular.module('AngularTest',['ngRoute','Controllers'])

 .directive("example", function(){
       
    
        return {
            templateUrl: "templates/firstTemplate.html",
            restrict: "E"

        }; 
    
    });
