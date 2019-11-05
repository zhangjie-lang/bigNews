$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/index/rank',
    success: function (data) {
        var html = template('newsTpl', { data:data.data});
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