$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/index/rank',
    success: function (data) {
        var html = template('contentTpl', { data:data.data});
        $('#contentBox').html(html);
    }
})