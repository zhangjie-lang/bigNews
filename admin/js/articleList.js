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
    
     //分页功能
     //进到文章列表页面，就获取符合条件的文章封装成了一函数。
     function getData(myPage) {
        $.ajax({
          type: 'get',
          url: 'http://47.111.184.55:8888/api/v1/admin/article/query',         
          data: {
            page: myPage, // 当前第几页
            perpage: 5    // 每页展示条数
          },
          success: function (backData) {         
            console.log(backData)
            var resHtml = template('sateTpl', {
                data: backData.data.data
            })
            $('#listBdy').html(resHtml)

            var totalPages = backData.data.totalPage

            if (myTotalPage != totalPages) {
              myTotalPage = totalPages

              $pagination.twbsPagination('destroy')
              $pagination.twbsPagination($.extend({}, defaultOpts, {
                startPage: 1,
                totalPages: totalPages
              }))
            }
          }
        })
      }

      getData(1)
      var $pagination = $('#pagination-demo')
      var myTotalPage = 10

      var defaultOpts = {
        totalPages: myTotalPage,
        visiblePages: 7,
        first: '首页',
        last: '末页',
        prev: '上一页',
        next: '下一页',
        onPageClick: function (event, page) {
          getData(page)
        }
      }
      $pagination.twbsPagination(defaultOpts);
      $('#pagination-demo').twbsPagination();
})