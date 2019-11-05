$(function () {
    console.log(111);
    
    //文件上传及时预览功能
    $('#exampleInputFile').on('change', function () {
        var file = this.files[0]
        var imgURL = URL.createObjectURL(file)
        $('#exampleInputSrc').attr('src', imgURL)
        $('#hidden').val(imgURL)
    })

    //获取文章类别数据
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/index/category',
        success: function (data) {
            console.log(data);
            
            var html = template('artcaTpl', {
                data: data.data
            })
            $('#article_category').html(html)
        }
    })

    // 文件添加功能
    $('#articleForm').on('submit', function (e) {
        e.preventDefault()

        var fd = new FormData($('form')[0]);
        fd.append('content', tinyMCE.activeEditor.getContent())
        fd.append('state', '已发布')
        $.ajax({
            contentType: false,
            processData: false,
            type: 'post',
            url: 'http://47.111.184.55:8888/api/v1/admin/article/publish',
            data: fd,
            success: function () {
                location.href = 'article_list.html'

            }
        })

        return false
    })
})