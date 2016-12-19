angular.module('app').controller('mNavBarLoginCntrl',function($scope,$http,mvIdentity,mvAuth){
    $scope.identity= mvIdentity;
    $scope.signIn = function(userName,password){
        mvAuth.authenticateUser(userName,password).then(function (success) {
            if(success){
                console.log('log in success');
            }
            else {
                console.log('login failed');
            }
        });
    }
});