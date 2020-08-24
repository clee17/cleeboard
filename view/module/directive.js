app.directive('header',function($compile,$rootScope) {
    return {
        restrict: "E",
        scope:{
            icon:"@",
            text:"@",
            pindex:"@"
        },
        templateUrl:'/view/module/header.html',
        link:function(scope,element,attr) {
            scope.pindex = Number(scope.pindex);
            let children = element.children();
            let rootElement = children[1];
            let subDiv = rootElement.children[0];
            subDiv = angular.element(subDiv);
            rootElement = angular.element(rootElement);
            subDiv.css('color','dimgray');
            if(scope.text)
                subDiv.html(scope.text);
            else if(scope.icon)
                subDiv.html('<i class="fas fa-'+scope.icon+'"></i>');
            scope.select = function(index){
                if(index === scope.pindex){
                    scope.selected = true;
                    subDiv.css('background','lightblue');
                    subDiv.css('border-radius','0.8rem');
                    subDiv.css('color','dimgray');
                    rootElement.css('border-left','solid 4px rgba(240,153,51,1)')
                }else{
                    scope.selected = false;
                    subDiv.css('background','lightgray');
                    subDiv.css('border-radius','1.8rem');
                    subDiv.css('color','rgba(255,255,255,0.8)');
                    rootElement.css('border-left','white');
                }
            };

            scope.$on("pageChange",function(event,data){
                scope.select(data.page);
            });

            scope.select($rootScope.pageIndex);
            element
                .on('mouseenter',function(){
                    if(scope.selected)
                        return;
                    subDiv.css('background','lightblue');
                    subDiv.css('color','dimgray');
                })
                .on('mouseleave',function(){
                    if(scope.selected)
                        return;
                    subDiv.css('background','lightgray');
                    subDiv.css('color','dimgray');
                })
                .on('click',function(){
                    if($rootScope.pageIndex === scope.pindex)
                        return;
                    if(!scope.pindex)
                        return;
                    scope.$emit('goToPage',{index:scope.pindex});
                })
        }
    }
});

app.directive('headerButton',function($compile,$rootScope) {
    return {
        restrict: "E",
        scope:{
            icon:"@",
            text:"@",
        },
        templateUrl:'/view/module/header.html',
        link:function(scope,element,attr) {
            let children = element.children();
            let rootElement = children[1];
            let subDiv = rootElement.children[0];
            subDiv = angular.element(subDiv);
            subDiv.css('color','rgba(124,137,30,1)');
            if(scope.text)
                subDiv.html(scope.text);
            else if(scope.icon)
                subDiv.html('<i class="fas fa-'+scope.icon+'"></i>');
            element
                .on('mouseenter',function(){
                    if(scope.selected)
                        return;
                    subDiv.css('background','rgba(124,137,30,1)');
                    subDiv.css('color','rgba(255,255,255,0.8)');
                })
                .on('mouseleave',function(){
                    if(scope.selected)
                        return;
                    subDiv.css('background','lightgray');
                    subDiv.css('color','rgba(124,137,30,1)');
                })
        }
    }
});