if(typeof jQuery!=="function")
  throw new Error("dandan ui依赖于jquery,请先引入jquery.js")
else{
 jQuery.fn.dropdown=function(){
	 //this->$("#my-dropdown")
	 //侵入:为指定元素添加class和data-
	 var $parent=this;
	 $parent.addClass("dropdown")
		.children()
		.next().addClass("dropdown-menu fade");
     //为指定元素添加事件
	 $parent.hover(function(){
		 var $parent=$(this);
		 $parent.children(".dropdown-menu").toggleClass("in");
	 });
   }
   //$("#my-dropdown").dropdown();
 }