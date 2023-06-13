// DOM
var btn = document.getElementById('btn');
// 触发btn按钮执行
var list = document.querySelector('.list');
var text = document.getElementById('text');
btn.onclick = function () {
    if (text.value == '') {
        alert('你没有输入内容。')
    } else {
        var li = document.createElement('li');
         var time = new Date();
        var mytime = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
        // 通过innerHTML输出li.中的内容
        li.innerHTML = text.value + '<p></p>' +'<span>' + mytime + '\t' + '<button>删除</button></span>';
        text.value = '';
        // 通过insertBofore在list节点前面插入节点li
        list.insertBefore(li, list.children[0]);
        var allB = document.querySelectorAll('button');
        for (var i = 0; i < allB.length; i++) {
            allB[i].onclick = function () {
                list.removeChild(this.parentNode.parentNode); // 移除掉本次节点
            }
        }

    }
}