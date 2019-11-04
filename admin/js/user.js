     //获取用户详情
      $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/user/detail',
        type: 'get',
        success: function (data) {
          console.log(data);
          var html = template('userDetailsTpl', data)
          // console.log(html);
          $('#userBox').html(html)
        }
      })
      //头像上传预览功能
      $('#userBox').on('change', '#exampleInputFile', function () {
        var files = this.files[0]
        var imgUrl = URL.createObjectURL(files)
        $('.user_pic').attr('src', imgUrl)
      })
      // 用户信息编辑上传功能
$('#userBox').on('submit', '#userForm', function () {
    var formData = new FormData($('#userForm')[0])
    // formData.append('user_pic',$('#exampleInputFile')[0].files[0])
    console.log(formData)
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/user/edit',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
      success: function (data) {
        alert('修改成功')
        location.href='/index.html'
          
      },
      error: function () {
        alert('修改失败')
      }
    })
    return false
});