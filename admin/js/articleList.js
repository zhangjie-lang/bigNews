$(function () {
    // 文章列表页面
    // 获取后台文章数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1//admin/category/list',
        success: function (data) {
            console.log(data);
            
        }
    })
    
})