
$(function(){
	//红包天降
	var $zhezhao = $(".zhezhao");
	var $hongbao= $(".hongbao");
	setTimeout(function(){
		$(document).bind('touchmove', function(event) {
		    event.preventDefault();//使网页不可滚动
		});
		$zhezhao.css("height",$(document).height());
		$zhezhao.show();
		if(parseInt($("body").width())>=500){
			console.log("pc")
			$hongbao.animate({top: "200px"},2000);
		}else{
			console.log("yidong")
			$hongbao.animate({top: "40vw"},2000);
		}
		$("body").css("overflow","hidden");		
	},3000)
	//点击X红包消失
	$(".hongbao_x").on("click",function(){
		$zhezhao.hide();
		$hongbao.hide();
		$("body").css("overflow","");
		$(document).unbind("touchmove");//使网页可滚动
		
	})	
	//点击拆红包
	$(".hongbao_cai").on("click",function(){
		//没中奖字体放大，缩小
		$(".hongbao_cai").css("opacity",1)
		timerr = setInterval(function(){
			$(".hongbao_cai").css("font-size","16px");
			setTimeout(function(){
				$(".hongbao_cai").css("font-size","14px");
			},500)
		},1000)
		setTimeout(function(){
			clearInterval(timerr);
			$zhezhao.hide();
			$hongbao.hide();
			$("body").css("overflow","");//使网页可滚动
			$(document).unbind("touchmove");
		},3000)
	})
	//轮播图
	var i =0;
	setInterval(function(){
		i++
		$(".tuijian_lunbo").css("left",-i*80+"vw");
		if(i>$(".tuijian_lunbo img").length-1){
			i=0;
			$(".tuijian_lunbo").css("left",-i*80+"vw");
		}
	},4000)

//	<li>
//		<img src="img/1.jpg" />
//		<p>儿童木质拼图益智幼儿宝宝30/60/100片3-4-5-6-7-8-9岁男女孩玩具</p>
//		<span class="prize">￥<b>28</b></span><span class="address">杭州</span>
//		<h4>月销  1666</h4>
//	</li>
    //ajax加载
	var $list = $(".list");
	$.ajax({
		url:"js/index.json",
		dataType:"json",
		success:function(res){
			$(res).each(function(idx,item){
				console.log(item)
				//第一次加载12条数据
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
	//滚动到底部加载数据
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
	//移入右边信息栏
	$(".content_right li").on("mouseover",function(){
		$(this).css({"background":"red","color":"white"});
		$(this).siblings("li").css({"background":"white","color":"#999"});
	})
	//移入个人中心
	$(".content_right li").eq(1).on("mouseover",function(){
		$(".geren_box").show();
		$(".geren_box").animate({
			left:"-260px"
		},1000)
	})
	$(".content_right li").eq(1).on("mouseout",function(){	
		$(".geren_box").animate({
			left:"-290px"
		},1000)
		$(".geren_box").hide();	
	})
	//移入个人中心弹出框
	$(".geren_box").on("mouseenter",function(){
		$(this).show();
	})
	$(".geren_box").on("mouseleave",function(){		
		$(".geren_box").animate({
			left:"-290px"
		},1000)
		$(this).hide();
	})
	//返回顶部
	$("#dingbu").on("click",function(){		
		$("body").animate({scrollTop: 0},1000);
	})
	//二维码图片运动
	$(".flexdimg").animate({top:"10vh"},10000,function(){
		$(".flexdimg").animate({top:"10px"},10000)
	  })
	setInterval(function(){
			$(".flexdimg").animate({top:"10vh"},10000,function(){
			$(".flexdimg").animate({top:"10px"},10000)
	    })
	},20000)
	
})
