


function hiddenThis(){
	$("#all").addClass("hidden");
	$("#showMore").removeClass("hidden").addClass("move-in");
}
function showThis(){
	$("#showMore").addClass("hidden");
	$("#all").removeClass("hidden").addClass("move-in");
}
function showPoster(){
	console.log(11111111111)
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	// 生成分享图片 所需背景图片
  	var poster = new Image();
	poster.src = "img/poster.png";
	
	poster.onload = function(){
		console.log("222222222")
		ctx.drawImage(poster,0,0,500,879);
		ctx.fillStyle="#FFDDEB";
		ctx.fillRect(340,719,140,140);
		// 生成分享图片 所需二维码
		var code = document.getElementById("qrcode").getElementsByTagName("img")[0];
		ctx.drawImage(code,346,725,128,128);
		setTimeout(function(){
			var src = canvas.toDataURL("image/png");
			$("#posterImage").attr("src",src)
		},1000)
		
		$("#poster").removeClass("hidden");
	}
	
}
function hiddenPoster(){
	$("#poster").addClass("hidden");
}


var flag = true;
var rankListArr= [
		{
			img:'img/tx.jpg',
			name:'不忘初心',
			money:'60'
		},
		{
			img:'img/tx.jpg',
			name:'沧海巫山',
			money:'28'
		},
		{
			img:'img/tx.jpg',
			name:'浔阳江头夜送客,枫叶荻花秋瑟瑟',
			money:'26'
		},
		{
			img:'img/tx.jpg',
			name:'夜送客',
			money:'23'
		},
		{
			img:'img/tx.jpg',
			name:'枫叶荻花',
			money:'10'
		},
	]
var span ='';
for(var i=0;i<rankListArr.length;i++){
	span+='<div class="top-list">';
	span+='<div class="index">'+parseInt( i+1)+'.</div>';
	span+='<img src="'+rankListArr[i].img+'" />';
	span+='<div class="right"><div class="line">';
	if(rankListArr[i].name.length>7){
		rankListArr[i].name = rankListArr[i].name.substring(0,7)+'...';
	}
	span+='<div class="name">'+rankListArr[i].name+'</div>';
	span+='</div><div class="line">'
	span+='<div class="money">'+rankListArr[i].money+'</div></div></div></div>'
}
$("#rankList").html(span)
//购买列表
var buyListArr= [
		{
			
			name:'不忘初心',
			phone:"15757337090",
			state:'付款成功'
		},
		{
			
			name:'不忘初心',
			phone:"15757337090",
			state:'付款成功'
		},
		{
			
			name:'不忘初心',
			phone:"15757337090",
			state:'付款成功'
		},
		{
			
			name:'不忘初心',
			phone:"15757337090",
			state:'付款成功'
		},
		{
			
			name:'不忘初心',
			phone:"15757337090",
			state:'付款成功'
		},
	]
var buyListSpan ='';
for(var i=0;i<buyListArr.length;i++){
	console.log(buyListArr[i].phone)
	buyListSpan+='<div class="items">';
	buyListSpan+='<span>'+buyListArr[i].name+'</span>';
	buyListArr[i].phone = buyListArr[i].phone.substring(0,3)+'****'+buyListArr[i].phone.substring(7,11);
	buyListSpan+='<span class="phone">'+buyListArr[i].phone+'</span>';
	buyListSpan+='<span>'+buyListArr[i].state+'</span></div>';
}
$("#buyList").html(buyListSpan)
						


$(function(){
	var timestrap = 360;
	function getTime(intDiff) {
        var day = 0
          , hour = 0
          , minute = 0
          , second = 0;
        //时间默认值
        intDiff = intDiff;
        if (intDiff > 0) {
          day = Math.floor(intDiff / (60 * 60 * 24));
          hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
          minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
          second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if(day>99){
        	day = day.toFixed().split("");
        }else if(day>9&&day<=99){
        	day = ['0',day.toFixed().split("")[0],day.toFixed().split("")[1]]
        }else{
        	day = ['0','0',day]
        }
        if (hour <= 9) {
          hour = ['0',hour]
        }else{
        	hour=hour.toFixed().split("");
        }
        if (minute <= 9){
          minute = ['0' , minute]
        }else{
        	minute = minute.toFixed().split("")
        }
        if (second <= 9){
          second = ['0' , second]
        }else{
        	second = second.toFixed().split("");
        }
        var countDown=[day[0]*100+day[1]*10+day[2],hour[0]+''+hour[1],minute[0]+''+minute[1],second[0]+''+second[1]];
        var domArr = $(".num");
        for(var i = 0;i<domArr.length;i++){
        	$(domArr[i]).html(countDown[i])
        }
    }
	var timer = setInterval(function(){
		timestrap -- ;
		if(timestrap>=0){
			getTime(timestrap)	
		}else{
			clearInterval(timer);
			$(".countDown").css("display","none");
			$(".countDown-outtime").css("display","flex")
		}
		
	},1000)
})
var audio = document.getElementById("audio");

$("#controller").click(function(){
	if($("#controller").hasClass("play")){
		$("#controller").addClass("pause").removeClass("play");
		audio.pause();
	}else{
		$("#controller").addClass("play").removeClass("pause");
		audio.play();
	}
	
})
//禁止页面滚动函数
function bodyScroll(event){  
    event.preventDefault();  
} 	
$(".contact-us").click(function(){
	$(".mask").removeAttr("hidden");
	$(".modal").removeAttr("hidden");
	document.documentElement.style.overflow='hidden'
})
$(".mask").click(function(){
	$(".mask").attr("hidden","hidden");
	$(".modal").attr("hidden","hidden");
	document.documentElement.style.overflow='scroll'
})
$("#submit").click(function(){
	var name = $("#nameInput").val();
	var phone = $("#phoneInput").val();
	var reg = /^1[3456789][0-9]{9}$/;
	if(reg.test(phone)){
		alert("可以提交")
	}else{
		alert("请输入正确的手机号")
	}
	console.log(name,phone)
})
wx.config({
    debug : false, // 这里为false
    appId : '', // 以下随意填写即可
    timestamp : (new Date()).getTime(),
    nonceStr : '',
    signature : '',
    jsApiList : ['checkJsApi'] 
		    });
		wx.ready(function() {
		    audio.play();
	    });
	    function stopScroll(e) {
 
		    e.preventDefault()
		 
		}

		/*触底加载*/
//文档高度
function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
window.onscroll = function () {
    //监听事件内容
    if(getScrollHeight()==parseInt(getDocumentTop() + getWindowHeight()) ){
    	if(flag){
    		flag = false
    		onReachBottom();
    	}
      
    }
}
function onReachBottom(){
	var img = '<div class="bll-out"><img src="img/loadimgImg.png" class="loadingImg" /> 加载中...</div>';
    	$('.buyListLoading').html(img)
    	console.log(111111111111111111111)
    	setTimeout(function(){
    		var newArr =[
	      	{
				
				name:'不忘初心333',
				phone:"15757337090",
				state:'付款成功'
			},
			{
				
				name:'不忘初心22',
				phone:"15757337090",
				state:'付款成功'
			},
			{
				
				name:'测试1',
				phone:"15757337090",
				state:'付款成功'
			},
			{
				
				name:'哈哈哈哈',
				phone:"15757337090",
				state:'付款成功'
			},
			{
				
				name:'凯蒂',
				phone:"15757337090",
				state:'付款成功'
			}
	      ];
	      var newBuyListSpan = '';
			for(var i=0;i<newArr.length;i++){
				newBuyListSpan+='<div class="items">';
				newBuyListSpan+='<span>'+newArr[i].name+'</span>';
				buyListArr[i].phone = newArr[i].phone.substring(0,3)+'****'+newArr[i].phone.substring(7,11);
				newBuyListSpan+='<span class="phone">'+buyListArr[i].phone+'</span>';
				newBuyListSpan+='<span>'+newArr[i].state+'</span></div>';
			}
			$("#buyList").append(newBuyListSpan);
			$(".buyListLoading").html('');
			flag=true;
    	},2000)
};
function loadMore(){
	var img = '<img src="img/loadimgImg.png" class="loadingImg" />';
	$(".loadMore").html(img);
	
	setTimeout(function(){
		var arr= [{
				img:'img/tx.jpg',
				name:'凯蒂',
				money:'5'
			},
			{
				img:'img/tx.jpg',
				name:'你是主角',
				money:'1'
			}
		]
		var newSpan ='';
		for(var i=0;i<arr.length;i++){
			rankListArr.push(arr[i])
			newSpan+='<div class="top-list">';
			newSpan+='<div class="index">'+parseInt( rankListArr.length)+'.</div>';
			newSpan+='<img src="'+arr[i].img+'" />';
			newSpan+='<div class="right"><div class="line">';
			if(rankListArr[i].name.length>7){
				arr[i].name = arr[i].name.substring(0,7)+'...';
			}
			newSpan+='<div class="name">'+arr[i].name+'</div>';
			newSpan+='</div><div class="line">'
			newSpan+='<div class="money">'+arr[i].money+'</div></div></div></div>'
		}
		$("#rankList").append(newSpan);
		var img1 = '<img src="img/bottom.png" />';
		$(".loadMore").html(img1);
	},1000)
	
}
$("#loginModal").click(function(e){
	e.stopPropagation()
})
function login(){
	$("#loginMask").removeClass("out");
}
function hiddenLoginModal(){
	$("#loginMask").addClass("out")
}
//定义变量
let countDown = 60;
$("#verificationCode").click(function(){
	if(countDown==60){
		$("#verificationCode").addClass("forbidden");
		$("#verificationCode").html(countDown+'s');
		var timer = setInterval(function(){
			countDown--;
			if(countDown ==0){
				clearInterval(timer);
				countDown = 60;
				$("#verificationCode").removeClass("forbidden");
				$("#verificationCode").html("获取验证码");
			}else{
				$("#verificationCode").html(countDown+'s');
			}
		},1000)
	}else{
		return false
	}
})
//弹出通知
$(function(){
	var arr=[
		{
			imageUrl:'../img/tx.jpg',
			name:'沐浴阳光',
			state:'已经购买成功啦'
		},
		{
			imageUrl:'../img/tx.jpg',
			name:'七里香',
			state:'已经购买成功啦'
		},
		{
			imageUrl:'../img/tx.jpg',
			name:'青花瓷',
			state:'已经购买成功啦'
		},
		{
			imageUrl:'../img/tx.jpg',
			name:'沐浴阳光',
			state:'已经购买成功啦'
		}
		
	];
	var index = 0;
	var count =0;
	setInterval(function(){
		count++;
		if(index==arr.length-1){
			index=0
		}else{
			index++;
		}
		var span = '<div class="eject-notice" id="eject'+count+'">';
		span+='<img src="'+arr[index].imageUrl+'" /><span>';
		span+=arr[index].name+'</span><div class="state">';
		span+=arr[index].state+'</div></div>';
		$("#eject").append(span);
		if(count>4){
			var id = "eject"+parseInt(count-4);
			var eject = document.getElementById("eject");
			var ejectItem = document.getElementById(id);
			eject.removeChild(ejectItem)
		}
	},900)
})

// 滚动到顶部
$(function(){
	window.onscroll = function(){
		
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(top)
		if(top>1000){
			$("#backTop").removeClass("hidden");
		}else{
			$("#backTop").addClass("hidden");
		}
	}
},)
