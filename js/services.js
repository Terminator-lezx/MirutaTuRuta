angular.module('starter.services', [])

.factory('vehiculosServices', function () {
    // Might use a resource here that returns a JSON array
    var fotos = [{
        id: 1,
        foto: 'img/tuRutaMiRuta/carro.png'
    }, {
        id: 2,
        foto: 'img/tuRutaMiRuta/moto.png'
    }];
    // Some fake testing data
    var vehiculos = [{
        id: 0,
        placa: 'XYZ111',
        nombre: 'La Amenaza Roja',
        color: 'Red',
        tipo: '1',
        foto: 'img/tuRutaMiRuta/carro.png'
    }, {
        id: 1,
        placa: 'XXX199',
        nombre: 'El de mi mama',
        color: 'Pink',
        tipo: '1',
        foto: 'img/tuRutaMiRuta/carro.png'
    }, {
        id: 2,
        placa: 'WWW777',
        nombre: 'El Nene',
        color: 'DarkBlue' ,
        tipo: '2',
        foto: 'img/tuRutaMiRuta/moto.png'
    }, {
        id: 3,
        placa: 'ZZZ190',
        nombre: 'El cospire',
        color: 'Gray',
        tipo: '1',
        foto: 'img/tuRutaMiRuta/carro.png'
    }, {
        id: 4,
        placa: 'NMO789',
        nombre: 'El vejestorio',
        color: 'Green',
        tipo: '2',
        foto: 'img/tuRutaMiRuta/moto.png'
    },
    {
        id: 5,
        placa: 'AAA789',
        nombre: 'El Azotador',
        color: 'DarkRed',
        tipo: '1',
        foto: 'img/tuRutaMiRuta/carro.png'
    }];

    return {
        all: function () {
            return vehiculos;
        },
        add: function (vehiculo) {
            vehiculos.push(vehiculo);
        },
        remove: function (chat) {
            vehiculos.splice(vehiculos.indexOf(chat), 1);
        },
        get: function (vehiculoId) {
            for (var i = 0; i < vehiculos.length; i++) {
                if (vehiculos[i].placa === vehiculoId) {
                    return vehiculos[i];
                }
            }
            return null;
        },
        getFoto: function (tipoId) {
            for (var i = 0; i < fotos.length; i++) {
                if (fotos[i].id === parseInt(tipoId)) {
                    return fotos[i];
                }
            }
            return null;
        }
    };
});
