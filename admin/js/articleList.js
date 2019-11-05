$(function () {
    // 文章列表页面
    // 获取后台文章数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
        success: function (data) {
            console.log(data);
            var html = template('sateTpl', {
                data: data.data.data
            })
            $('#listBdy').html(html)
        }
    })

    //删除文章功能
    $('#listBdy').on('click', '.delete', function () {
        var id = $(this).attr('data-id') - 0;
        var isConfirm = confirm('您确定要删除文章吗?')
        if (isConfirm) {
            $.ajax({
                type: 'post',
                url: 'http://47.111.184.55:8888/api/v1/admin/article/delete',
                data: {
                    id: id
                },
                success: function () {
                    location.reload()
                }
            })
        }
    })

    //文章分类列表展示
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        success: function (data) {
          var html = template('allcaTpl', {
              data: data.data
          })
          $('#selCategory').html(html)
        }
    })
    
     //文章筛选功能
     $('#selecForm').on('submit', function () {
         var params = $(this).serialize()
         console.log(params);
         $.ajax({
             type: 'get',
             url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
             data: params,
             success: function (data) {
                var html = template('sateTpl', {
                    data: data.data.data
                })
                $('#listBdy').html(html)
                 
             }
         })
         return false
     })

})