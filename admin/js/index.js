$(function () {
    
    //获取最新评论
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/latest_comment',
        type: 'get',
        success: function (data) {
            // console.log(data);
            var html = template('newComTpl' , {
                data: data.data
            })
            $('#newComment').html(html)
        }

    })

    //前台焦点关注功能
    $.ajax({
        type: 'get',
        url:  'http://47.111.184.55:8888/api/v1/index/attention',
        success: function (data) {
            // console.log(data);
            var html = template('focusTpl',{
                data: data.data
            })
            $('#focusAttend').html(html)
        }
    })

})