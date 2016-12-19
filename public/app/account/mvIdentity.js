/**
 * Created by MaheN on 12/18/2016.
 */
angular.module('app').factory('mvIdentity',function(){
    return{
        currentUser : undefined,
        isAuthenticated: function(){
            return !!this.currentUser;
        }
    }
})