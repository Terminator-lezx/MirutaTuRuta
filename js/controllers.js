angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) { })

.controller('VehiculosCtrl', function ($scope, vehiculosServices, $state) {

    $scope.vehiculos = vehiculosServices.all();
    $scope.remove = function (chat) {

        vehiculosServices.remove(chat);
        $state.go('tab.vehiculos');
    };
    $scope.go = function (vehiculoId) {
        $state.go('tab.vehiculodetail', { 'vehiculoId': vehiculoId });
        $state.go('vehiculoId', vehi)
    }
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
        $state.go('tab.vehiculos');
    }
})

.controller('AccountCtrl', function ($scope, $ionicLoading, $compile) {
    alert('asdasd');
    function onDeviceReady() {
        alert('asdasd');
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.getElementById('btnTakePhoto').onclick = function () {
            navigator.camera.getPicture(function (imageUri) {
                var pic = document.getElementById('divPic');
                pic.innerHTML = "<img src='" + imageUri + "'/>";
            }, null, null);
        };
    }
});
