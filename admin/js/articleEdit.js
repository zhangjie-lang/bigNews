$(function () {
    // 发送请求将当前数据展示在页面上
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

    //获取请求参数的id
    var id = location.search.substr(1).split('=')
    console.log(id);
    // 文章编辑功能
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/search',
        data: {
            id: id
        },
        success: function (data) {
            var data = data.data
            console.log(data.cover);
            var src = data.cover.replace('http://172.16.19.30:8888', 'http://47.111.184.55:8888')
            console.log(src);
            $('#inputEmail3').val(data.title)
            $('.article_cover').attr('src', src)
            $('#hidden').val(src)
            $('#dateinput').val(data.date)
            $('#rich_content').val(data.content)
            $('#categoryId').val(data.category)
        }
    })
})