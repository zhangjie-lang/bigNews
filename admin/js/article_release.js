// 向服务器端发送请求  
$('.btn-release').on('click', function () {
    var fd = new FormData($('form')[0])
    fd.append('content', tinyMCE.activeEditor.getContent())
    fd.append('state', '已发布')
    fd.forEach((value,key)=>{
        console.log(key,value)
    })
    $.ajax({
        type: 'post',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/publish',
        data:fd,
        processData: false,
        contentType:false,
        success: function (response) {
            console.log(response.msg)
           location.href="article_list.html";
        }
    });
    return false
})
// 文章类别
$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
    success: function (response) {
        //console.log(response);
        var html = template('categoryTpl', { data: response.data })
        $('#article_category').html(html)
    }
})
// 文章封面
$('#exampleInputFile').on('change', function () {
    var file = this.files[0];
    var url = URL.createObjectURL(file)
    $('#preview').attr('src', url)
    $('#exampleInputFile').val(url)
})

