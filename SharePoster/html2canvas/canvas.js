function canvasToImage(obj){
	var parameter = {
		title:obj.title||'',
		coverImage:obj.coverImage||'',
		userName:obj.userName||'',
		userPhoto:obj.userPhoto||'',
		sale:obj.sale||'',
		qrCode:obj.qrCode||'',
		price:obj.price||''
	}
	var span = '';
	span+='<div id="capture"><div class="top-box">';
	span+='<img id="serImage" class="home-picture" src="'+parameter.coverImage+'" /><div class="title">';
	span+=parameter.title;
	span+='</div></div>';
	span+='<div class="top-box user-box"><div class="left"><div class="user">';
	span+='<img class="user-photo" src="'+parameter.userPhoto+'" />';
	span+='<div class="user-name">'+parameter.userName+'</div>';
	span+='</div><div class="ser-price">';
	span+='<img class="ser-price-lable" src="../image/price.png" /><div class="text-after">￥'+parameter.price+'</div></div>';
	span+='<div class="like">'+parameter.sale+'人喜欢</div></div><div class="right">';
	span+='<img class="code" src="'+parameter.qrCode+'" />';
	span+='<div class="press-tips">•长按立即购买•</div></div></div></div>';
	span+='<div id="mask" class="mask hidden" onclick="closeShareImage()">图片生成中，请稍候…</div>';
	$('body').append(span)
}
function showShareImage(){
	document.body.scrollTop=document.documentElement.scrollTop=0
    html2canvas(document.getElementById('capture')).then(function(canvas) {
	 	 var url = canvas.toDataURL();//图片地址
	 	 console.log(url)
	 	 var span = '<img src="'+url+'"/><span class="save-tips">长按图片保存到手机</span>';
	 	 $('#mask').html(span)
	});
	$('#mask').removeClass("hidden");
}
function closeShareImage(){
	$('#mask').addClass("hidden");
}
