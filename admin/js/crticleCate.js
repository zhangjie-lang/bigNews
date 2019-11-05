$(function () {
    // 获取文章类别数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        success: function (data) {
            var html = template('listTpl', {
                data: data.data
            })
            $('#listBody').html(html)
        }
    })

    // //删除功能
    // $('#listBody').on('click', '.delete', function () {
    //     var isPrompt = confirm('您确认要删除文章类别吗')
    //     if (isPrompt) {
    //         var id = $(this).attr('data-id')
    //         console.log(id);

    //         $.ajax({
    //             type: 'post',
    //             url: 'http://47.111.184.55:8888/api/v1/admin/category/delete',
    //             data: {
    //                 id: id
    //             },
    //             success: function (data) {
    //                 console.log(data);

    //                 location.reload()
    //             }
    //         })
    //     }
    // })

    //新增分类
    $('#addForm').on('submit', function () {
        var params = $(this).serialize();
        console.log(params);
        
        if (params.substring(0, 2) === 'id') {
            // 实现文章类别编辑功能
            $.ajax({
                type: 'post',
                url: 'http://47.111.184.55:8888/api/v1/admin/category/edit',
                data: params,
                success: function (data) {
                    console.log(data);
                    
                    location.reload()
                }
            })
        }
        else {
            $.ajax({
                type: 'post',
                url: 'http://47.111.184.55:8888/api/v1/admin/category/add',
                data: params,
                success: function (data) {
                    location.reload()
                }
            })
        }

        return false
    })

    //编辑分类功能
    // $('#addModal').modal({
    //     show: false,
    //     backdrop: false
    // });
    // $('#listBody').on('click', '.modify', function () {
    //     console.log(111);

    //     var id = $(this).attr('data-id')
    //     //让模态框显示
    //     $('#addModal').modal('show');
    //     //将获取到的id的值保存在隐藏域中   
    //     $.ajax({
    //         type: 'get',
    //         url: 'http://47.111.184.55:8888/api/v1/admin/category/search',
    //         data: {
    //             id: id
    //         },
    //         success: function (data) {
    //             $('#recipient-id').val(data.data[0].id)
    //             $('#recipient-name').val(data.data[0].name)
    //             $('#recipient-slug').val(data.data[0].slug)
    //             $('#model_add').html('修改')

    //         }
    //     })
    //     return false

    // })

})