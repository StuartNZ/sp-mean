app.controller('MainCtrl', function (StarWarsFactory) {
    var self = this;

    StarWarsFactory.characters().success(function (data) {
        self.charList = data;
    });

});