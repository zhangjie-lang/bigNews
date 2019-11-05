$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/index/rank',
    success: function (data) {
        var html = template('articleTpl', { data:data.data});
        $('#articleBox').html(html);
    }
})


