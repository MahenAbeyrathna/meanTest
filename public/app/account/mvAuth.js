/**
 * Created by MaheN on 12/18/2016.
 */
angular.module('app').factory('mvAuth',function ($http,mvIdentity,$q) {
    return {
        authenticateUser: function(userName, password){
           var dfr = $q.defer();
           $http.post('/login',{userName:userName, password:password}).then(function(res){
               if(res.data.success){
                   mvIdentity.currentUser= res.data.user;
                   dfr.resolve(true);
               }
               else{
                   console.log('server send fails');
                   dfr.resolve(false);
               }
           });
           return dfr.promise;
       }
    }
});