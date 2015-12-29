/**
 * Created by Lucky212 on 12/28/2015.
 */
var scrollerApp = angular.module('scrollerApp', ['ngRoute']);
scrollerApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        title: 'A-Scroller | Home',
        templateUrl: './pages/home.html',
        controller: 'mainController'
    }).when('/about', {
        title: 'A-Scroller | About',
        templateUrl: './pages/about.html',
        controller: 'aboutController'
    }).when('/contact', {
        title: 'A-Scroller | Contact',
        templateUrl: './pages/contact.html',
        controller: 'contactController'
    });
});
scrollerApp.controller('mainController', function ($scope) {
    $scope.message = 'Home Page';
});

scrollerApp.controller('aboutController', function ($scope) {
    $scope.message = 'Aboout Page';
});

scrollerApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact Page.';
});

scrollerApp.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });
}]);
