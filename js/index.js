$('#btn').on('click', function () {
    var val = $('#ipt').val()
    $.ajax({
      type: 'get',
      url: 'http://47.111.184.55:8888/api/v1/index/search?key=' + val,
      success: function (data) {
        console.log(data);
        if (data.code == 200) {
          if (data.data !== null) {
            var html = template('Tpl', data);
            $('#dad').html(html)
          }
        } else if (data.code == 500) {
          $('#dad').html('<h1>您搜索的东西不存在</h1>')
        }
      }
    })
  })