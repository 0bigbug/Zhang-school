var newTime;
// 删除
$('.del').click(function(e) {
    if ($(e.target).is('span')) {
        $(e.target).parents('ul').remove();
    }
});
// 全选
$('input[type="checkbox"]').eq(0).click(function() {
    $('input[type="checkbox"]').prop('checked') ? $('input[type="checkbox"]').prop('checked', true) : $(
        'input[type="checkbox"]').prop('checked', false)
});
var Arr = $(".tbody").find("input");
$('.tbody input[type="checkbox"]').click(function() {
    var flag = true;
    for (var i = 0; i < Arr.length; i++) {
        if (!Arr.eq(i).prop('checked')) {
            flag = false;
        }

    }
    if (flag) {
        $(".thead").find('input').eq(0).prop('checked', true)
    } else {
        $(".thead").find('input').eq(0).prop('checked', false)
    }
})

function gettime(time) {
    // 返回一个时间对象

    var year = time.getFullYear(); //年
    var month = time.getMonth() + 1; //月
    var date = time.getDate(); //日
    var hour = time.getHours(); //小时
    var minute = time.getMinutes(); //分钟
    var second = time.getSeconds(); //秒
    //  小于10＋0
    function standard(time) {
        return time < 10 ? '0' + time : time;
    }

    newTime =
        `${year}-${standard(month)}-${standard(date)} ${standard(hour)}:${standard(minute)}:${standard(second)}`;
}
//   //点击添加时出现断层

$(".add").click(function(e) {
    $(".addAll").css("display", "block")
        // 获取元素的标签内容
    $('.addAll input').eq(0).val('');
    $('.addAll input').eq(1).val('');
    $('.addAll input').eq(2).val('');
    $('button').eq(2).off('click');
    $("button").eq(2).click(function() {
        // 再次点击取消
        $(".addAll").css("display", "none");
        var time = new Date();
        gettime(time)
        console.log(newTime)

        $(e.target).parent().parent().find("li").eq(1).text($('.addAll input').eq(0).val())
            .next()
            .next().html(newTime);
        $(e.target).parent().parent().find("li").eq(1).text($('.addAll input').eq(0).val())
            .next()
            .text($('.addAll input').eq(1).val()).next().next().text($('.addAll input').eq(2)
                .val())

        console.log(newTime);

    })
    $('button').eq(3).click(function() {
        $(".addAll").css("display", "none");
    })

})

//添加
$('button').eq(1).click(function() {
        // console.log(newTime);
        $(".addAll").css("display", "block")
        $('button').eq(2).off('click')
        $("button").eq(2).click(function() {
            $(".addAll").css("display", "none");
            var txt1 = $(" input[type='text']").eq(2).val();
            var txt2 = $(" input[type='text']").eq(3).val();
            var txt3 = $(" input[type='text']").eq(4).val();
            var time1 = new Date()
            gettime(time1)
            $(".tbody").append(`
    <ul>
            <li>
                <input type="checkbox">
            </li>
            <li>
                ${txt1}
            </li>
            <li>
                ${txt2}
            </li>
            <li>
                ${newTime}
            </li>
            <li>
                ${txt3}
            </li>
            <li>
                <span class="add">编辑</span>
                <span class="del">删除</span>
            </li>
        </ul>
    
    `)
        })

        $('button').eq(3).click(function() {
            $(".addAll").css("display", "none");
        })

    })
    // 查询
var newData = []
$("button").eq(0).click(function() {
    var arr = $('.tbody ul')
    console.log(arr.length);
    if (!$(" input[type='text']").eq(0).val() == "") {
        for (var i = 0; i < arr.length; i++) {
            if ($(" input[type='text']").eq(0).val() == $(".tbody").find("ul").eq(i).find("li")[1]
                .innerText) {
                newData.push($(".tbody").find("ul").eq(i).find("li")[1].innerText)
                newData.push($(".tbody").find("ul").eq(i).find("li")[2].innerText)
            }
        }
        console.log(newData)
            // 把查询结果输出到tbody中
        for (var j = 0; j < newData.length; j++) {
            $(".tbody").html(`
        <ul>
            <li>
                <input type="checkbox">
            </li>
            <li class="dName">${newData[0]}</li>
            <li class="id">${newData[1]}</li>
            <li class="time"></li>
            <li></li>
            <li>
                <span class="add">编辑</span>
                <span class="del">删除</span>
            </li>
        </ul>
    `)
        }
    } else {
        alert("请输入数据查询")
    }
})