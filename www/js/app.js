// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.welcome', {
    url: "/welcome",
    views: {
      'menuContent': {
        templateUrl: "templates/welcome.html"
      }
    }
  })

  .state('app.welcome-user-details', {
    url: "/welcome-user-details",
    views: {
      'menuContent': {
        templateUrl: "templates/welcome-user-details.html"
      }
    }
  })

  .state('app.one-time-pin', {
    url: "/one-time-pin",
    views: {
      'menuContent': {
        templateUrl: "templates/one-time-pin.html"
      }
    }
  })

  .state('app.saved-credit-card', {
    url: "/saved-credit-card",
    views: {
      'menuContent': {
        templateUrl: "templates/saved-credit-card.html",
        controller: 'GetCardDetailsCtrl'
      }
    }
  })

  .state('app.landing', {
    url: "/landing",
    views: {
      'menuContent': {
        templateUrl: "templates/landing.html"
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html"
      }
    }
  })

  .state('app.search', {
    url: "/help",
    views: {
      'menuContent': {
        templateUrl: "templates/help.html"
      }
    }
  })

  .state('app.history', {
    url: "/history",
    views: {
      'menuContent': {
        templateUrl: "templates/history.html",
        controller: 'MainCtrl'
      }
    }
  })

  .state('app.credit-card-details', {
    url: "/credit-card-details",
    views: {
      'menuContent': {
        templateUrl: "templates/credit-card-details.html"
      }
    }
  })

  .state('app.saved-cc', {
    url: "/saved-cc",
    views: {
      'menuContent': {
        templateUrl: "templates/saved-cc.html",
        controller: 'GetCardDetailsCtrl'
      }
    }
  })

  .state('app.personal-info', {
    url: "/personal-info",
    views: {
      'menuContent': {
        templateUrl: "templates/personal-info.html"
      }
    }
  })

  .state('app.welcome-personal-info', {
    url: "/welcome-personal-info",
    views: {
      'menuContent': {
        templateUrl: "templates/welcome-personal-info.html"
      }
    }
  })

  .state('app.response', {
    url: "/response",
    views: {
      'menuContent': {
        templateUrl: "templates/response.html"
      }
    }
  })

  .state('app.payments', {
    url: "/pay-now",
    views: {
      'menuContent': {
        templateUrl: "templates/pay-now.html",
        controller: 'PayCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});
