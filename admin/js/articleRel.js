$(function () {
    //写文章文件
    
    //  文件上传功能
    document.querySelector('#exampleInputFile').onchange  = function () {
        var file = this.files[0];
        var imgURL = URL.createObjectURL(file)
        document.querySelector('.img').src = imgURL
        document.querySelector('#hidden').value = imgURL
    }

    // 文章添加功能
    $('#articleForm').on('submit', function () {
       var params = $(this).serialize()
       console.log(params);
       
       $.ajax({
           type: 'post',
           url: 'http://47.111.184.55:8888/api/v1//admin/article/publish',
           data: params,
           success: function (data) {
               console.log(data);
               
           }
       })
       return false
    })

})