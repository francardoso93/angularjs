angular.module("videoapp").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/home", {
        templateUrl: "view/home.html",
    })
   .when("/videos", {
       templateUrl: "view/allVideos.html",
   })
   .when("/highlights", {
       templateUrl: "view/highlightedVideos.html",
   })
   .when("/searchResults", {
       templateUrl: "view/searchResultsVideos.html",
    })
    .otherwise({ redirectTo: '/home' });
});
