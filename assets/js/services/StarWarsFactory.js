app.factory('StarWarsFactory', function ($http) {

    return {
        characters: function () {
            return $http.get('/character');
        },

        jedi: function () {
            return $http.get('/jedi');
        }
    }
});