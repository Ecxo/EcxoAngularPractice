
ecxoApp.controller('GuessController', function ($scope) {
    $scope.started = false;
    $scope.min = 0;
    $scope.max = 100;
    $scope.currentGuess = Math.round($scope.min + $scope.max / 2);
    $scope.guesses = 1;
    $scope.guessmessage = "Arvaan ajattelemasi luvun väliltä " + $scope.min + " - " + $scope.max;
    $scope.start = function () {
        $scope.started = true;
    };

    $scope.smaller = function () {
        $scope.max = $scope.currentGuess - 1;
        $scope.currentGuess = Math.round(($scope.min + $scope.max) / 2);
        $scope.guesses++;
    };

    $scope.bigger = function () {
        $scope.min = $scope.currentGuess + 1;
        $scope.currentGuess = Math.floor(($scope.max + $scope.min) / 2);
        $scope.guesses++;
    };

    $scope.done = function (success) {
        if (success === true) {
            $scope.guessmessage = "Minä voitin!";
        } else {
            $scope.guessmessage = "Jaa, joko sinä huijaat tai algoritmini on virheellinen.";
        }
        $scope.guesses = 0;
        $scope.started = false;
        $scope.min = 0;
        $scope.max = 100;
        $scope.currentGuess = Math.round($scope.min + $scope.max / 2);
    }

});


