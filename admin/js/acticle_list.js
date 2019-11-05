  //先获取分类列表
  $.ajax({
    url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
    type: 'get',
    success: function (res) {
      // console.log(res);
      var html = template('tbodyTpl', { data: res.data.data });
      $('#tbodyBox').html(html);
    }
  })


  // 做删除功能
  $('#tbodyBox').on('click', '.delete', function () {
    // 给删除按钮绑定点击事件，id值赋值给自定义属性
    var id = $(this).attr('data-id');
    // console.log(id);

    if (confirm('确定删除吗')) {
      $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/article/delete',
        type: 'post',
        data: {
          id: id
        },
        success: function (response) {
          location.reload()
          console.log('删除成功');
          
        },
        error: function () {
          console.log('删除失败');
        }
      })
    }
  })