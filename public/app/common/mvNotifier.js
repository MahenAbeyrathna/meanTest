/**
 * Created by MaheN on 12/18/2016.
 */
//angular.module('app').value('mvToastr',);
angular.module('app').factory('mvNotifier',['toaster'],function(toaster){
    return {
        notify : function(msg){
            toaster.success(msg);
            console.log(msg);
        }
    }
})