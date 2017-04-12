angular.module('AngularTest').config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/general.html",
            controller: "NavigationCtrl",
            controllerAs: "navigation"
        })
        .when("/first", {
            templateUrl: "templates/firstTemplate.html",
            controller: "NavigationCtrl",
            controllerAs: "navigation"
        })
        .when("/second", {
                templateUrl: "templates/secondTemp.html",
                controller: "NavigationCtrl",
                controllerAs: "navigation"
            }
        )
        .when("/third", {
                templateUrl: "templates/thirdTempl.html",
                controller: "NavigationCtrl",
                controllerAs: "navigation"
            }
        );
    $routeProvider.otherwise('/first');
});