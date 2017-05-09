angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('VehiculosCtrl', function ($scope, vehiculosServices, $state) {

    $scope.vehiculos = vehiculosServices.all();
    $scope.remove = function (chat) {
        vehiculosServices.remove(chat);
    };

    $scope.details = function (vehiculoId) {
        console.log(vehiculoId);
        $state.go('tab.vehiculodetail', { vehiculoId: vehiculoId });
    }
})

.controller('VehiculoDetailCtrl', function ($scope, vehiculosServices, $stateParams) {
    $scope.vehiculo = vehiculosServices.get($stateParams.vehiculoId);
})
.controller('VehiculoNewCtrl', function ($scope, vehiculosServices, $state) {
    $scope.vehiculo = {};

    $scope.add = function () {
        console.log($scope.vehiculo);
        var a = vehiculosServices.getFoto($scope.vehiculo.tipo);
        $scope.vehiculo.foto = a.foto;
        vehiculosServices.add($scope.vehiculo);
        $scope.vehiculo = {};
        $state.go(tab.vehiculos);
    }
})

.controller('AccountCtrl', function ($scope, $ionicLoading, $compile) {
    google.maps.event.addDomListener(window, 'load', function () {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function (pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });

});
