$(function () {
    // 发送请求将当前数据展示在页面上
    //文件上传及时预览功能
    $('#editForm').on('change', '#exampleInputFile', function () {
        var file = this.files[0]
        var imgURL = URL.createObjectURL(file)
        $('#exampleInputSrc').attr('src', imgURL)
        $('#hidden').val(imgURL)
    })

    //获取文章类别数据



    //展示页面数据
    var id = location.search.substr(1).split('=')[1] - 0
    console.log(id);
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/search',
        data: {
            id: id
        },
        success: function (data) {
            var data = data.data
            $.ajax({
                type: 'get',
                url: 'http://47.111.184.55:8888/api/v1/index/category',
                success: function (response) {
                    data.cate = response
                    data.cover = data.cover.replace('http://172.16.19.30:8888', 'http://47.111.184.55:8888')
                    var html = template('artcaTpl', {
                        cata: data.cate.data,
                        data: data
                    })
                    $('#editForm').html(html)
                }
            })
        }
    })

    // 文章修改功能
    $('#editForm').on('submit', function (e) {
        e.preventDefault()
        var fd = new FormData($('form')[0]);
        fd.append('id', id )
        $.ajax({
            contentType: false,
            processData: false,
            type: 'post',
            url: 'http://47.111.184.55:8888/api/v1/admin/article/edit',
            data: fd,
            success: function (data) {
                console.log(data);              
                location.href = 'article_list.html'
            }
        })

        return false
    })

    //获取请求参数的id

})