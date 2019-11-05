$(function () {
    // 前台页面搜索功能
    var params = location.search.substr(1).split('=')[1];
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
        data: {
            key: params
        },
        success: function (data) {
         console.log(data);
         
        }
    })

    //添加评论
    $('.comment_form').on('submit',function () {
        var params = $(this).serialize()
    })
    
})