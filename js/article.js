
var id = getUrlParams('id')
// 获取 url 参数
function getUrlParams(name) {
    var params = location.search.substr(1).split('&')
    for (var i = 0; i < params.length; i++) {
        var temp = params[i].split('=')
        if (temp[0] == name) {
            return temp[1]
        }
    }
    return -1
}
if (id !== -1) {
    $('#hid').val(id)
    $('#comment').on('submit', function () {
        var formData = $(this).serialize()
        console.log(formData);
        $.ajax({
            type: "post",
            url: 'http://47.111.184.55:8888/api/v1/index/post_comment',
            data: formData,
            success: function (data) {
                location.reload()
            }
        })
        return false
    })
}