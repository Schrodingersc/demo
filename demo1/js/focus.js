//<![CDATA[
$(function(){
	(function(){
		var curr = 0;
		$(".focus li").each(function(i){
			$(this).click(function(){
				curr = i;
			
				$(".focus  p").eq(i).fadeIn("slow").siblings("p").hide();
				$(this).siblings("li").removeClass("focus_A").end().addClass("focus_A");
				return false;
			});
		});
		
		var pg = function(flag){
			//flag:true表示前翻， false表示后翻
			if (flag) {
				if (curr == 0) {
					todo = 1;
				} else {
					todo = (curr - 1) % 3;
				}
			} else {
				todo = (curr + 1) % 3;
			}
			$(".focus li").eq(todo).click();
		};
		
		//自动翻
		var timer = setInterval(function(){
			todo = (curr + 1) % 3;
			$(".focus li").eq(todo).click();
		},5000);
		
		//鼠标悬停在触发器上时停止自动翻
		$(".focus p").hover(function(){
				clearInterval(timer);
			},
			function(){
				timer = setInterval(function(){
				todo = (curr + 1) % 3;
				$(".focus li").eq(todo).click();
				},5000);			
			}
		);
	})();
});