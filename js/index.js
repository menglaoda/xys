window.onload = function(){
	var tuijian = document.querySelector(".tuijian");
	var tuijian_lunbo = document.querySelector(".tuijian_lunbo");
	var tuijian_lunbo_img = tuijian_lunbo.querySelectorAll("img");
	var width = tuijian_lunbo_img[0].offsetWidth;
	
	var i =0;
	setInterval(function(){
		i++
		tuijian_lunbo.style.left = -i*80+"vw";
		if(i>tuijian_lunbo_img.length-1){
			i=0;
			tuijian_lunbo.style.left = -i*80+"vw";
		}
	},4000)
}
$(function(){
//	<li>
//		<img src="img/1.jpg" />
//		<p>儿童木质拼图益智幼儿宝宝30/60/100片3-4-5-6-7-8-9岁男女孩玩具</p>
//		<span>￥<b>28</b></span><span class="address">杭州</span>
//		<h4>月销  1666</h4>
//	</li>
	var $list = $(".list");
	$.ajax({
		url:"js/index.json",
		dataType:"json",
		success:function(res){
			$(res).each(function(idx,item){
				console.log(item)
				if(idx>=12){
					return;
				}
				var $li = $("<li></li>");
				var $img = $("<img />");
				var $p = $("<p></p>");
				var $span1 = $("<span></span>");
				var $b = $("<b></b>");
				var $span2 = $("<span></span>");
				var $h4 = $("<h4></h4>");
				$img.attr("src",item.url).appendTo($li);
				$p.html(item.name).appendTo($li);
				$span1.html("￥").attr("class","prize").appendTo($li);
				$b.html(item.prize).appendTo($span1);
				$span2.html(item.address).attr("class","address").appendTo($li);
				$h4.html("月销"+" "+item.Sales).appendTo($li);
				$li.appendTo($list);
			})
		}
	})
	var j=0;
	$(window).on("scroll",function(){
//		$(document).height(),文档高度
//		$(window).height(),可见高度
//		$(window).scrollTop(),滚动高度
        var a = $(document).height();
        $(".dixian").hide();
        //判断是否滚动到底部
        if($(window).height()+$(window).scrollTop()==$(document).height()){
        	//我是有底线的
        	setTimeout(function(){
        		if($(window).height()+$(window).scrollTop()==$(document).height()){
        			$(".dixian").fadeIn();
        		}else{
        			$(".dixian").fadeOut();
        		}
        	},1000)
	        j++;
	        $.ajax({
				url:"js/index.json",
				dataType:"json",
				success:function(res){
					$(res).each(function(idx,item){
						if(idx>=12*j && idx<12*(j+1)){
							var $li = $("<li></li>");
							var $img = $("<img />");
							var $p = $("<p></p>");
							var $span1 = $("<span></span>");
							var $b = $("<b></b>");
							var $span2 = $("<span></span>");
							var $h4 = $("<h4></h4>");
							$img.attr("src",item.url).appendTo($li);
							$p.html(item.name).appendTo($li);
							$span1.html("￥").attr("class","prize").appendTo($li);
							$b.html(item.prize).appendTo($span1);
							$span2.html(item.address).attr("class","address").appendTo($li);
							$h4.html("月销"+" "+item.Sales).appendTo($li);
							$li.appendTo($list);			
						}
						
					})
				}
			})
        }
	})
})
