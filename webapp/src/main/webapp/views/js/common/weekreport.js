/**
 * Created by ZhangYifan on 2016/8/12.
 */



(function (angular) {
    'use strict'
    /**
     * 用于周报页面
     *
     */
    angular.module('zn-choose', [])
        .controller('chooseController', ['$scope', function ($scope) {
            $scope.choose=6;

            $scope.four = true;
            $scope.template = { name: 'header.html', url: '/views/header.html'}

        }]);
})(angular)
$("#confirm").on("click",function(){//登录
    var url="/views/week-report/report-view.html";
    if(window.location.hash!=""){
        url="/views/"+window.location.hash.replace("#/","")+".html";
    }
    console.log(url);
    $.ajax({
        url: '/weekreport/login',
        type: 'POST',
        data:{
            name:$("#inputid").val(),
            pwd:$("#inputpwd").val()
        },
        dataType: 'html',
        timeout: 1000,
        error: function(){console.log('Error loading document');},
        success: function(result){
            result= $.parseJSON(result);
            if(result.result!=0)
                $("#loaderror").show();
            else
                location.href=url;
        }
    });
});
$("#cancel").on("click",function(){//取消按钮,清空input
    $(this).parents("#center-div").children("div").children("input").val("");
});






