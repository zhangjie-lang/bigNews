$(function () {
    // 获取文章类别数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        success: function (data) {
            // console.log(data);
            
            var html = template('listTpl' , {
                data: data.data
            })
            $('#listBody').html(html)
        }
    })

    //新增分类
    $('#modal-body').find('#adForm').on('submit' , '#addForm' , function () {
        console.log(111);
        
        var params = $(this).serialize();
        console.log(params);
        return false
        
    })
    
})