app.controller('leftCon',function($scope,$cookies,$rootScope,$compile){
    $scope.selected = "";
    $scope.$on('pageChange',function(event,data){
        if(data.page === 0)
            $scope.refreshMainPage();
        else{}
    });
    $scope.goToPage = function(index){
        $scope.$emit('goToPage',{index:index});
    };

    $scope.emitSign = function(sign){
        if($scope.requesting)
            return;
        $scope.requesting = true;
        $scope.selected = sign;
        $scope.requestId = sign + '_'+Date.now();
        let type = 0;
        switch(sign){
            case 'collection':
                type = 0;
                break;
            case 'mails':
                type=1;
                break;
            case 'replay':
                type = 2;
                break;
            default:
                break;
        }
        $scope.$emit('channelSelected',{type:type,sign:sign, id:$scope.requestId});
    };

    $scope.$on('channelResultsReceived',function(event,data){
        if($scope.requestId !== data.requestId)
            return;
        $scope.requesting = false;
    });

    $scope.refreshMainPage = function(){
        let left = document.getElementById("left_contents");
        if(left){
            left = angular.element(left);
            left.html('');
            let html = '<button ng-click="emitSign(\'collection\')" ng-disabled="selected ===\'collection\'">我的收藏</button>'+
                '<button ng-click="emitSign(\'mails\')" ng-disabled="selected ===\'mails\'">站内来信</button>'+
                '<button ng-click="emitSign(\'reply\')" ng-disabled="selected ===\'reply\'">读者评论</button>';
            left.append($compile(html)($scope));
            if(!$cookies.getObject('lastMe')){
                $scope.emitSign('collection');
            }else{
                let Sign = LZString.decompressFromBase64($cookies.getObject('lastMe'));
                $scope.emitSign(Sign);
            }
        }
    };

    $scope.$emit('leftLoaded',null);
});