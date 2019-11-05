$(function () {

    //获取最新评论
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/latest_comment',
        type: 'get',
        success: function (data) {
            // console.log(data);
            var html = template('newComTpl', {
                data: data.data
            })
            $('#newComment').html(html)
        }

    })

    //前台焦点关注功能
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/attention',
        success: function (data) {
            // console.log(data);
            var html = template('focusTpl', {
                data: data.data
            })
            $('#focusAttend').html(html)
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/rank',
        success: function (data) {
            var html = template('newsTpl', { data: data.data });
            $('#newsBox').html(html);
        }
    })

    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/hotpic',
        success: function (data) {
            var html = template('imgTpl', { data: data.data });
            $('#imgBox').html(html);
        }

    })

    // 获取article文章功能-------------
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/index/category',
        type: 'get',
        success: function (data) {
            console.log(data);

            var html = template('wenzhangTpl', { data: data.data.slice(0, 6) });
            $('.level_two').html(html);
            $('.box').html(html);
        }
    })

    //获取用户信息
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/user/info',
        type: 'get',
        success: function (data) {
            var html = template('indexTpl', data);
            $('#indexBox').html(html)
        }
    });
    //个人中心头像
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/user/info',
        type: 'get',
        success: function (data) {
            var html = template('selfTpl', data);
            $('#selfBox').html(html)
        }
    });

})