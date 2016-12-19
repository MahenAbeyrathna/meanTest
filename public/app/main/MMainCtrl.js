angular.module('app').controller('mMainCtrl',function($scope){
    $scope.courses=[
        {name:'C# for sociopaths',featured:true,published:new Date('1/1/2016')},
        {name:'C# for non-sociopaths',featured:true,published:new Date('8/10/2016')},
        {name:'C# super',featured:true,published:new Date('5/10/2016')},
        {name:'C# duper',featured:false,published:new Date('9/10/2016')},
        {name:'C# like',featured:true,published:new Date('6/10/2016')},
        {name:'C# test',featured:false,published:new Date('5/10/2016')},
        {name:'C# love it',featured:true,published:new Date('3/12/2016')}
    ]
});