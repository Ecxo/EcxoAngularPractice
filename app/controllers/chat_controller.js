
ecxoApp.controller('ChatController', function ($scope, $timeout, $window, $firebaseArray) {

    $scope.message = "";
    $scope.nickname = "";
    $scope.error = "";

    var ref = new Firebase('/messages');

    ref.on("value", function (snapshot) {
        update(snapshot.val());

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    $scope.send = function () {

        if ($scope.message.length > 0) {
            if ($scope.nickname.length < 1 || $scope.nickname.length > 10) {
                $scope.nickname = "anon";
            }

            var msg = {
                name: $scope.nickname,
                message: $scope.message,
                date: new Date().toGMTString()
            };
            ref.push(msg);
            $scope.message = "";
            $scope.error = "";

        }
        else {
            $scope.error = "Kirjoita viesti!";
        }
    };

    function update(msgs) {
        $timeout(function () {
            $scope.messages = $firebaseArray(ref);
        }, 0);
    }

});


