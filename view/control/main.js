app.controller('mainCon',function($scope,$rootScope,$compile){
    $scope.$on('channelResultsReceived',function(event,data){
        if($scope.requestId !== data.requestId)
            return;
        $scope.requesting = true;
    });

    $scope.$on('pageChange',function(event,data){
        if(data.page === 0){
            $scope.loadMain();
        }else{
        }
    });

    $scope.loadMain = function(){

    };

    $scope.$on('channelResultsReceived',function(event,data){
        console.log('entered');
        let header = document.getElementById('main_header_contents');
        header = angular.element(header);
        header.html('');
        let html = "";
        if(data.type === 0)
           html = "<div>我的收藏夹</div>"
        header.html(html);
    });
});