
let username1=document.getElementById("username");
let phone1=document.getElementById("phone");
let pwd1=document.getElementById("pwd");
let pwd12=document.getElementById("pwd2");
let btn1=document.getElementById("log");

	/* 点击按钮后触发 */
btn1.onclick=function(){
	/* 判断是否有没填写的信息 */
	if(username.value==""||(phone.value=="")||(pwd.value=="")||pwd2.value==""){
		alert("请把信息填写完整");
	}
	/* 判断两次密码是否不一致 */
	else if(pwd1.value==pwd12.value){ 
		/* 存储用户名和密码 */
		localStorage.setItem('username1',username.value);
		localStorage.setItem('pwd1',pwd.value);
		/* 弹出提示并跳转页面 */
		alert("用户注册成功\n请登入");
		window.location.href="login.html";
		window.event.returnValue=false;
		}else{
			alert(" 两次密码内容不一致！\n请重新输入");
		}
	
} 



window.onload=function(){
//获取文本框和提示框
var username2=document.getElementById("username"),
	phone2=document.getElementById("phone"),
	pwd=document.getElementById("pwd"),
	pwd5=document.getElementById("pwd2")

	FM=document.getElementById("FM");
	FM1=document.getElementById("FM1");
	FM2=document.getElementById("FM2");
	FM3=document.getElementById("FM2");

	//给文本框绑定激活事件
	username2.onfocus=function(){
		//让FM显示
		FM.style.display='block';
	}
	phone2.onfocus=function(){
		//让FM显示
		FM1.style.display='block';
	}
	pwd.onfocus=function(){
		//让FM显示
		FM2.style.display='block';
	}
	pwd5.onfocus=function(){
		//让FM显示
		FM3.style.display='block';
	}
//给文本框绑定失去焦点
username2.onblur=function(){
var user=this.value; //获取当前输入值
var zz = /^[\u4E00-\u9FA5A-Za-z0-9]+$/ //正则表达式
// 用test返回函数，将test内部函数和zz的正则表达式比对。
if(zz.test(user)){ 
		FM.innerHTML="输入正确";
		return true;
			}
		FM.innerHTML= "请输入中文、英文、数字包括下划线";
		return false;
				
		}
phone2.onblur=function(){
var phone=this.value; //获取当前输入值
var zz = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ //正则表达式
// 用test返回函数，将test内部函数和zz的正则表达式比对。
if(zz.test(phone)){ 
		FM1.innerHTML="输入正确";
		return true;
			}
		FM1.innerHTML="请输入11位电话号码";
		return false;
				
		}
pwd.onblur=function(){
var pwd123=this.value; //获取当前输入值
var zz = /^[a-zA-Z]\w{5,17}$/ //正则表达式
// 用test返回函数，将test内部函数和zz的正则表达式比对。
if(zz.test(pwd123)){ 
		FM2.innerHTML="输入正确";
		return true;
			}
		FM2.innerHTML="请重新输入";
		return false;
				
		}

pwd5.onblur=function(){
	var pwd234=this.value; //获取当前输入值
	var zz = /^[\u4e00-\u9fa5]{0,}$/ //正则表达式
	// 用test返回函数，将test内部函数和zz的正则表达式比对。
	if(zz.test(pwd234)){ 
			FM2.innerHTML=123;
			return true;
				}
			FM2.innerHTML=321;
			return false;
					
			}
	}
