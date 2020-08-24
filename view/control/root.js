app.controller('rootCon',function($scope,$rootScope,$window,$location,$timeout,$cookies,feedManager){
    $rootScope.info = window['APPINFO'];
    $scope.initialize = function(){
        if($scope.initialized)
            return;
        $scope.initialized = true;
        if(!$rootScope.info.serverId){
            $scope.goToPage(0);
        }
    };

    $scope.$on('leftLoaded',function(){
        $scope.initialize();
    });

    $scope.$on('channelSelected',function(event,data){
        if($scope.requesting)
            return;
        $scope.requesting = true;
        if(data.type === 0){
            $scope.requestId = data.id;
            feedManager.requestFeed(data.sign,{requestId:$scope.requestId,type:data.type});
        }else{
        }
    });

    $scope.goToPage = function(index){
        if($rootScope.pageIndex === index)
            return;
        $rootScope.pageIndex = 0;
        switch(index){
            case 0:{
                window.history.pushState(null,null,"/me");
                $rootScope.$broadcast("pageChange",{info:$rootScope.info,page:0});
            }
                break;
            default:
                break;
        }
    };

    $scope.$on('goToPage',function(event,data){
        $scope.gotoPage(data.index);
    });

    $scope.$on('channelResultsReceived',function(event,data){
        if($scope.requestId !== data.requestId)
            return;
        $scope.requesting = false;
    });
});