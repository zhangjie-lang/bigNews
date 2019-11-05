$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/admin/comment/search',
    success: function (data) {
      // console.log(data);
      var html = template('Tpl', { data: data })
      $('#commentBox').html(html)
    }
  })

  // 删除评论
  $('#commentBox').on('click', '.delete', function () {
    var id = $(this).attr('data-id');
    if (confirm('确认要删除吗?')) {
      $.ajax({
        type: 'post',
        url: 'http://47.111.184.55:8888/api/v1/admin/comment/delete',
        data: { id: id },
        success: function (data) {
          console.log(data);
          location.reload()
        }
      })
    }
  })