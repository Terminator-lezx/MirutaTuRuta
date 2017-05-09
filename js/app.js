// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })
    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })
    .state('tab.vehiculos', {
        url: '/vehiculos',
        views: {
            'tab-vehiculos': {
                templateUrl: 'templates/tab-vehiculos.html',
                controller: 'VehiculosCtrl'
            }
        }
    })
      .state('tab.vehiculodetail', {
          url: '/vehiculo/:vehiculoId',
          views: {
              'tab-vehiculos': {
                  templateUrl: 'templates/vehiculo-detail.html',
                  controller: 'VehiculoDetailCtrl'
              }
          }
      })
    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })
    .state('tab.vehiculoNew', {
        url: '/vehiculoNew',
        views: {
            'tab-vehiculos': {
                templateUrl: 'templates/vehiculoNew.html',
                controller: 'VehiculoNewCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/tab/dash');

});
