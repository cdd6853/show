if(typeof jQuery!=="function")
  throw new Error("dan-boot 依赖于jquery,请先引入jquery.js")
else{
/***************为下拉菜单(dropdown)添加行为*******************/
   $(()=>{
	   //子元素中有data-toggle=dropdown的父元素
	   var $parent=$(".dropdown:has([data-toggle=dropdown])")
	 //在页面加载完成时在页面中寻找子元素中有data-toggle的父元素
     //为指定元素添加事件
	 $parent.hover(function(){
		 var $parent=$(this);
		 $parent.children(".dropdown-menu").toggleClass("in");
	 });
   })
   //$("#my-dropdown").dropdown();

 

/*****************为手风琴(accordion)添加行为*****************/
	$(()=>{
		$(".accordion").on("click","[data-toggle=collapse]",function(){
		$(this).next(".content").toggleClass("in")
		   .siblings(".content").removeClass("in")
		   })
		})
	

 
/****************为标签页(tab)添加行为***********************/
  $(".tabs:has([data-toggle=tab])")
      .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
    })
}