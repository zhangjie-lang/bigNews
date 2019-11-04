$(function () {
    // 功能一：获取统计数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/data/info',
        success: function (data) {
            console.log(data);
            
            var html = template('paraCount' , {
                data: data
            })
            $('#paraCou').html(html)
        }
    })
    
})