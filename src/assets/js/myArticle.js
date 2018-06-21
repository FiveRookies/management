function myArt(){
$(function($){
    var ms = {
        init:function(totalsubpageTmep,args){
            return (function(){
                ms.fillHtml(totalsubpageTmep,args);
                ms.bindEvent(totalsubpageTmep,args);
            })();
        },
        //填充html
        fillHtml:function(totalsubpageTmep,args){
            return (function(){
                totalsubpageTmep="<li><a href=\"javascript:void(0);\" class=\"prev geraltTb_pager\">上一页</a></li>";
                // 页码大于等于4的时候，添加第一个页码元素
                if(args.currPage!=1 && args.currPage>=4 && args.totalPage!=4) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+1+"</a></li>";
                }
                /* 当前页码>4, 并且<=总页码，总页码>5，添加“···”*/
                if(args.currPage-2>2 && args.currPage<=args.totalPage && args.totalPage>5) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                }

                /* 当前页码的前两页 */
                var start = args.currPage-2;
                /* 当前页码的后两页 */
                var end = args.currPage+2;

                if((start>1 && args.currPage<4) || args.currPage==1) {
                    end++;
                }
                if(args.currPage>args.totalPage-4 && args.currPage>=args.totalPage) {
                    start--;
                }

                for(; start<=end; start++) {
                	if(start==args.currPage){
                		totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager now' data-go='' >"+start+"</a></li>";
                	}
                    else if(start<=args.totalPage && start>=1) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+start+"</a></li>";
                    }
                }
                

                if(args.currPage+2<args.totalPage-1 && args.currPage>=1 && args.totalPage>5) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                }

                if(args.currPage!=args.totalPage && args.currPage<args.totalPage-2 && args.totalPage!=4) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+args.totalPage+"</a></li>";
                }
                totalsubpageTmep+="<li><a href=\"javascript:void(0);\" class=\"next geraltTb_pager\">下一页</a></li>"
                $(".pagination").html(totalsubpageTmep);
            })();
        },
        //绑定事件
        bindEvent:function(totalsubpageTmep,args){
            return (function(){
                totalsubpageTmep.on("click","a.geraltTb_pager",function(event){
                	console.log()
                    var current = parseInt($(this).text());

                    // totalsubpageTmep.off("click");
                    //判断是否是点击上一页
                    
                    if($(this).hasClass("prev")){
                    	$('.pagination li a ').each(function(index,value){
                    		if($('.pagination li a ').eq(index).hasClass("now")){
                    			var num = $('.pagination li a').eq(index).text();
                    			current = parseInt(num)-1;
                    			return false;
                    		}
                    		else{
		                    	current = 1;
		                    }
                    	})
                    	current=Math.max(current,1);
                    }
                    //判断是否点击下一页
                    else if($(this).hasClass("next")){
                    	$('.pagination li a ').each(function(index,value){
		                    if($('.pagination li a ').eq(index).hasClass("now")){
                    			var num = $('.pagination li a').eq(index).text();
                    			current = parseInt(num)+1;
                    			console.log(index);
                    			return false;
                    		}
                    		else{
		                    	current = 1;
		                    }
                    	})
                    	current=Math.min(current,args.totalPage);
                    }
                    
                    ms.fillHtml(totalsubpageTmep,{"currPage":current,"totalPage":args.totalPage,"turndown":args.turndown});
                    if(typeof(args.backFn)=="function"){
                        args.backFn(current);
                    }



                });
            })();
        }
    }
    $.fn.createPage = function(options){       
        ms.init(this,options);
    }
});
$(function(){
	$(".pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('.chooseItemSpace').eq(0).css('display','none');
})
};

export default {myArt}
