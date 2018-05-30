<template>
	<div id="app">
	
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				usrHeadImage: '../image/user.jpg',
				name: '沈继涛',
				pos: '部门经理',
				sex: '女',
				age: '20',
				email: '865212941@qq.com',
				phone: '1810000001',
				fansNum: '67',
				followNum: '46',
				isChange: true,
				curLeft: 0,
				editTip: '编辑资料',
				isPersonas: true,
				isBasicInfo: false,
				isMyfans: false,
				isMyFollows: false,
				isMyMsgs: false,
				pickBar: [{
						item: '用户画像'
					},
					{
						item: '基本信息'
					},
					{
						item: '我的粉丝'
					},
					{
						item: '我的关注'
					},
					{
						item: '我的消息'
					}
				],
				fansInfoData: [{
						image: '../image/faith.jpg',
						name: 'faith'
					},
					{
						image: '../image/user.jpg',
						name: '张鹏'
					},
					{
						image: '../image/大鹏.jpg',
						name: '大鹏'
					},
					{
						image: '../image/晶玉翡翠.jpg',
						name: '晶玉翡翠'
					},
					{
						image: '../image/峍屿k.jpg',
						name: '峍屿k'
					},
					{
						image: '../image/逆流_而下.jpg',
						name: '逆流_而下'
					},
					{
						image: '../image/My未來式.jpg',
						name: 'My未來式'
					},
					{
						image: '../image/宇欣.jpg',
						name: '宇欣'
					},
					{
						image: '../image/36kr.jpg',
						name: '36kr'
					},
					{
						image: '../image/JavaScript_w.jpg',
						name: 'JavaScript_w'
					},
					{
						image: '../image/Paper_weekly.jpg',
						name: 'Paper_weekly'
					},
					{
						image: '../image/大咖.jpg',
						name: '大咖'
					},
					{
						image: '../image/家v.jpg',
						name: '家v'
					},
					{
						image: '../image/27375871.jpg',
						name: '27375871'
					},
					{
						image: '../image/切格瓦拉.jpg',
						name: '切格瓦拉'
					},
					{
						image: '../image/人机与认知.jpg',
						name: '人机与认知'
					}
				],
				followsInfoData: [{
						image: '../image/头头不可一世.jpg',
						name: '头头不可一世'
					},
					{
						image: '../image/徐林森.jpg',
						name: '徐林森'
					},
					{
						image: '../image/泽宇.jpg',
						name: '泽宇'
					},
					{
						image: '../image/总为你着迷.jpg',
						name: '总为你着迷'
					},
					{
						image: '../image/依萍.jpg',
						name: '依萍'
					},
					{
						image: '../image/周扬.jpg',
						name: '周扬'
					}
				],
				msgData: [{
						image: '../image/man1.jpg',
						word: '下午那个文档能不能发我...',
						name: '李雷',
						time: '2018-04-07 18:20',
						content: '下午那个文档能不能发我一下啊'
					},
					{
						image: '../image/man1.jpg',
						word: '我觉得你说的挺有道理的...',
						name: '韩梅梅',
						time: '2018-03-03 18:20',
						content: '我觉得你说的挺有道理的。'
					},
					{
						image: '../image/man2.jpg',
						word: '标题党，通篇都在长篇大...',
						name: '张鹏',
						time: '标题党，通篇都在长篇大论，一点实质意义都没有',
						content: '我觉得你说的挺有道理的。'
					},
					{
						image: '../image/man3.jpg',
						word: '大佬能不能谈一下对区块...',
						name: '吴亦凡',
						time: '2018-02-25 18:20',
						content: '大佬能不能谈一下对区块链的见解，我很好奇'
					},
					{
						image: '../image/man4.jpg',
						word: '开头的条理很清晰，后面...',
						name: '小明',
						time: '2018-02-22 18:20',
						content: '开头的条理很清晰，后面就乱了。'
					}
				],
				curCheckMsg: 0,
				curMsgContent: 'Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
	    		'
			}
		},
		methods: {
			changePickItem: function(index) {
				var eleWidth = parseInt($('.slideSpace').css('width'));
				this.curLeft = eleWidth * index;
				// console.log(this.curLeft);
				this.isPersonas = false;
				this.isBasicInfo = false;
				this.isMyfans = false;
				this.isMyFollows = false;
				this.isMyMsgs = false;
				if (index == 0) {
					this.isPersonas = true;
				} else if (index == 1) {
					this.isBasicInfo = true;
				} else if (index == 2) {
					this.isMyfans = true;
					setTimeout(function() {
						$("#myFans .pagination").createPage({
							totalPage: 30,
							currPage: 1,
							backFn: function(p) {
								console.log("回调函数：" + p);
							}
						});
					}, 0);
					// $("#myFans .pagination").createPage({
					//              totalPage:30,
					//              currPage:1,
					//              backFn:function(p){
					//                  console.log("回调函数："+p);
					//              }
					//          });
	
	
				} else if (index == 3) {
					this.isMyFollows = true;
					setTimeout(function() {
						$("#myFans .pagination").createPage({
							totalPage: 30,
							currPage: 1,
							backFn: function(p) {
								console.log("回调函数：" + p);
							}
						});
					}, 0);
	
					// $(".pagination").createPage({
					//                 totalPage:30,
					//                 currPage:1,
					//                 backFn:function(p){
					//                     console.log("回调函数："+p);
					//                 }
					//             });
				} else if (index == 4) {
					this.isMyMsgs = true;
				} else {
					this.isPersonas = false;
					this.isBasicInfo = false;
					this.isMyfans = false;
					this.isMyFollows = false;
				}
	
			},
			editTheInfo: function() {
				if (this.isChange == true) {
					this.isChange = false;
					this.editTip = '完成';
				} else {
					this.isChange = true;
					this.editTip = '编辑资料';
				}
			},
			upLoadPic: function(evt) {
				var tgt = evt.target || window.event.srcElement,
					files = tgt.files;
	
				// FileReader support
				if (FileReader && files && files.length) {
					var fr = new FileReader();
					fr.onload = function() {
						// $('.headImageBox img').src = fr.result;
						centerCoIntain.$data.usrHeadImage = fr.result;
						var parentContain = window.parent.document;
						parentContain.getElementsByClassName('usrInfoBoxContain')[0].childNodes[0].src = fr.result;
						// console.log(centerCoIntain.$data.usrHeadImage);
						// console.log($('.headImageBox img').src(fr.result));
						// console.log(fr.result);
					}
					fr.readAsDataURL(files[0]);
				}
	
				// Not supported
				else {
					// fallback -- perhaps submit the input to an iframe and temporarily store
					// them on the server until the user's session ends.
				}
			},
			checkTheMsg: function(index) {
				this.curCheckMsg = index;
				this.curMsgContent = this.msgData[index].content;
			}
		},

	}
</script>
<<script>
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
	$("#myFans .pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('#myFans .chooseItemSpace').eq(0).css('display','none');

    $("#myFollows .pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('#myFollows .chooseItemSpace').eq(0).css('display','none');
    
})
</script>
<style>
	body,html {
	height: 720px;
}
select,option  {
	font-size: 12px!important;
	color: #000!important;
}
ul,li,p {
	margin: 0;
	padding: 0;
	list-style: none;
}
#insideContain {
	width: 100%;
	min-width: 700px;
	height: 720px;
	margin-left: 130px;
	/*margin-top: 10px;*/
	display: flex;
	flex-wrap: nowrap;
	background-color: #f4f4f4;
}
#centerContain {
	width: 100%;
	min-width: 700px;
	height: 720px;
	background-color: #ffffff;
	/*background-color: #fffdf1;*/
	border-radius: 10px;
	padding: 10px 20px 0px 20px;
}
#rightContain {
	margin-left: 10px;
	min-width: 325px;
	width: 325px;
	height: 720px;
	background-color: #ffffff;
	border-radius: 10px;
	display: flex;
	align-items: space-around;
	flex-wrap: wrap;
}
#rightContain {
	background-color: transparent;
}
#centerContain {
	padding: 20px 30px 20px 30px;
}
.usrInfoTop {
	width: 100%;
	height: 160px;
	padding-top: 20px;
	padding-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fffdf1;
	border-bottom: 10px solid #e9ecf6;
}
.usrInfoTopLeft {
	min-width: 350px;
	height: 100%;
	display: flex;
	align-items: center;
}
.usrHeadImage {
	width: 100px;
	height: 100px;
	min-width: 100px;
	min-height: 100px;
}
.usrHeadImage img {
	display: block;
	width: 100%;
	height:	100%;
	border-radius: 50%;
	border: 3px solid #06689F;
}
.usrInfoBox {
	padding-left: 50px;
	width: 300px;
	height: 100px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	align-content: space-around;
}
.usrInfoBox p{
	margin: 0;
	padding: 0;
	display: block;
	width: 100%;
	font-size: 16px;
	font-weight: bold;
}
.usrInfoTopRight {
	min-width: 100px;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: space-between;

}
.usrInfoTopRight p {
	margin: 0;
	padding: 0;
	width: 100%;
	font-weight: bold;
	font-size: 16px;
	display: block;
}
.slidePickBar {
	width: 100%;
	height: 50px;
	border-bottom: 5px solid #06689F;
}
.slidePickBar ul {
	width: 100%;
	height: 100%;
	list-style:none;
	margin: 0;
	padding: 0;
	margin-top: -5px;
}
.slidePickBar ul li {
	margin: 0;
	width: 20%;
	height: 100%;
	float: left;
	/*border: 1px solid blue;*/
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
}
.slideSpace {
	width: 20%;
	height: 5px;
	position: relative;
	top: 45px;
	background-color: #e58033;
	transition: 0.5s;
}
.showContent {
	width: 100%;
	height: 470px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.basicInfo {
	width: 250px;
	min-width: 250px;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 20px;
}
.basicInfo ul {
	margin: 0!important;
}
.basicInfo li{
	width: 250px;
	min-width: 250px;
	/*height: 50px;*/
	margin-bottom: 20px;
	display: flex;
	/*justify-content: space-between;*/
	align-content: center;
	padding-left: 10px;
	padding-right: 10px;
	align-items: center;
	/*background-color: #eee;*/
}
.basicInfo li p {
	font-size: 16px;
	margin: 0;
	display: flex;
	align-items: center;
}
.basicInfo li p:first-child {
	width: 80px;
	min-width: 80px;
	font-weight: bold;
} 
.basicInfo li input {
	display: flex;
	align-items: center;
	width: 180px;
	height: 80%;
	outline: none;
	/*background-color: #eee;*/
	border: 1px solid #eee;
}
.editBtn {
	width: 100px;
	height: 40px;
	border-radius: 10px;
	font-size: 16px;
	/*font-weight: bold;*/
	background-color: #06689F;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	margin: 0;
	cursor: pointer;
}

.basicInfo li select,
.basicInfo li option {
	font-size: 14px;
}
.headImageBox {
	width: 250px;
    min-width: 250px;
	height:100%;
	padding-top: 20px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.headImageBox img {
	width: 200px;
	height: 200px;
}
.choosePic {
	width: 200px;
	height: 200px;
}
.choosePic input {
	font-size: 14px;
	width: 100%;
}
#personas {
	width: 100%;
	height: 470px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#personas div {
	width: 50%;
	height: 50%;
}
#myFans, 
#myFollows {
	width: 100%;
	height: 470px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.myFansRow {
	width: 1120px;
	height:120px;
	display: flex;
	/*justify-content: center;*/
	align-items: center;
}
.otherUsrInfoBox {
	width: 100px;
	height: 120px;
	margin-left: 20px;
	margin-right: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	font-size: 16px;
}
.searchResultPageBox{
	width: 100%;
	display: flex;
	justify-content: center;
  	align-items: center;
}
.otherUsrInfoBox img {
	width: 100px;
	height: 100px;
}
.pagination li .now{
	background: #56a9a4!important;
}
.msgBox {
	width: 243px;
	min-width: 243px;
	height: 100%;
	/*background-color: #eee;*/
	overflow: auto;
	/*padding-top: 20px;*/
	/*padding-bottom: 20px;*/
	cursor: pointer;
	border:3px solid #eee;
	border-right: none;
	/*display: flex;*/
	/*flex-wrap: wrap;*/
	/*align-content: none;*/
}
.msgItem:first-child{
	padding-top: 0;
}
.msgItem {
	width: 100%;
	height: 70px;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: 3px solid #eee;
}
.showMsgBox {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
}
#myMsgs {
	width: 100%;
	height: 470px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	padding-top: 20px;
}
.msgItem img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.msgItem span {
	width: 150px;
	height: 50%;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.msgItem span:first-child {
	font-weight: bold;
	font-size: 14px;
}
.msgItem span p{
	margin: 0;
	padding: 0;
	color: #ccc;
	font-size: 12px;
}
.senderInfo {
	width: 150px;
	height: 100%;
	display: flex;	
	align-items: center;
	flex-wrap: wrap;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	margin-left: 10px;
}
.showMsgBox {
	/*background-color: red;*/
	border:3px solid #eee;
}
.showMsgBox span {
	font-size: 14px;
	height: 22px;
	display: flex;
	align-items: center;
	align-content: center;
}
.msgContent {
	width: 100%;
	height: 350px;
	overflow: auto;
}

.editBox {
	width: 100%;
	height: 25px;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}
.deleteBtn,
.replyBtn {
	width: 65px;
	height: 25px;
	background-color: #06689F;
	border-radius: 3px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin-left: 10px;
	cursor: pointer;
}
</style>
