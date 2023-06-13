$(document).ready(function() {
    var navoffeset=$(".header-home").offset().top;
    $(window).scroll(function(){
       var scrollpos=$(window).scrollTop(); 
       if(scrollpos >=navoffeset){
           $(".header-home").addClass("fixed");
       }else{
           $(".header-home").removeClass("fixed");
       }
    });
    
});
$(function () {
   //1.获取相应标签
   var link = document.querySelector('#link');
   var bg = document.querySelector('.center-bg');//挡板
   var center = document.querySelector('.center');//界面
   var close = document.querySelector('#closeBtn');//关闭按钮
   var title = document.querySelector('.center-title');//允许鼠标点击拖动的范围

   //2.让界面显示
   link.addEventListener('click', function () {
       bg.style.display = 'block';
       center.style.display = 'block';
   });

   //3.让界面隐藏
   close.addEventListener('click', function () {
       bg.style.display = 'none';
       center.style.display = 'none';
   });
   
   //4.拖拽--mousedown  mousemove  mouseup
   title.addEventListener('mousedown', function (e) {
       //4.1获取鼠标在盒子中的距离
       var x = e.pageX - center.offsetLeft;
       var Y = e.pageY - center.offsetTop;
       //4.2盒子的实际位置（实际偏移量）在拖动过程中变化
       document.addEventListener('mousemove', move);
       function move(e) {
           //offset是只读不能设值   所以需要用style来设值
           //注意：需要拼接单位
           center.style.left = e.pageX - x + 'px';
           center.style.top = e.pageY - Y + 'px';
       }
       //4.3鼠标松开  拖动停止  清除事件
       document.addEventListener('mouseup', function () {
           document.removeEventListener('mousemove', move);
       });
   });
});