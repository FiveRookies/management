<template>
    <div id="insideContain" style="margin: 0;">
		<div id="centerContain">
			<div class="introModule">
				<div id="leftCarousel" class="carousel slide" ref="mycarousel" data-ride="carousel">
					
					<!-- <carousel class="index-carousel" :autoplay="true" :minSwipeDistance="40" :scrollPerPage="true" :speed="500" :perPage="1" :paginationPadding="10" :paginationSize="10" :loop="true">
						<slide  v-for="carouselItem in carouselData" :key="carouselItem.index">
							<div class="carousel-inner" >
								<div class="item" v-bind:class="carouselItem.isActive">
									<span class="carouselIntro">{{carouselItem.carouseIntroWords}}</span>
									<img v-bind:src="carouselItem.showPic">
								</div>
							</div>
						</slide>
					</carousel> -->

										<!-- 轮播（Carousel）指标 -->
					<ol class="carousel-indicators">
							<li data-target="#leftCarousel" v-bind:data-slide-to="parseInt(index)" v-bind:class="carouselItem.isActive" v-for="(carouselItem,index) in carouselData" :key="(carouselItem,index).index"></li>
					</ol>   
					<!-- 轮播（Carousel）项目 -->
					<div class="carousel-inner" role="listbox">

							<div class="item" v-bind:class="carouselItem.isActive" v-for="carouselItem in carouselData" :key="carouselItem.index">
								<div class="carouselEx">
										<span class="carouselIntro">{{carouselItem.carouseIntroWords}}</span>
										<div class="carouseImg">
											<img v-bind:src="carouselItem.showPic">
										</div>
										<div id="rightIntro">
											<span>
												{{carouselItem.content}}
											</span>
										</div>
								</div>
							</div>
							
					</div>
				</div> 

			</div>
			<div class="searchModule">
				<div class="headTitle">
					<span>热门搜索</span>
				</div>
				<div class="buzzwordContain">
					<span v-for="buzzwordsItem in buzzwords" :key="buzzwordsItem.index" v-on:click="hotSearch(buzzwordsItem.buzzword)">
						{{buzzwordsItem.buzzword}}
					</span>
				</div>
				<div class="searchBoxContain">
					<input type="text" placeholder="请输入关键字..." v-model="forNormalSearchStr">
					<div class="searchBtn" v-on:click="searchArticle">搜 索</div>
				</div>
			</div>
			<div class="recommendModule">
				<div class="headTitle">
					<span>推荐内容</span>
					<i class="iconfont icon-shuaxinzhongjieban"></i>
				</div>
				<div class="recommendBoxContain" v-for="recommendItem in recommendData" :key="recommendItem.index">
					<img v-bind:src="recommendItem.recommendImage">
					<div class="recommendItem">
						<span class="recommendTitle">
							{{recommendItem.recommendTitle}}
						</span>
						<span class="recommendInfo">
							<span>{{recommendItem.recommendInfoAuthor}}</span>
							<span style="margin-left: 10px">{{recommendItem.recommendInfoTime}}</span>
						</span>
					</div>
					<div class="recommendStatistcsItem">
						<span class="recommendStatistcsCount">
							{{recommendItem.recommendStatistcsCount}}
						</span>
						<span class="recommendStatistcsInfo">
							<span>阅读量</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div id="rightContain">
			<div class="message">
				<div class="messageHeadTitle">我的通知</div>
				<div style="width: 100%;height:300px;min-height:300px;display: flex!important;flex-wrap: wrap;overflow: auto;">
					<div class="messageBoxContain" 
					v-for="messageItem in messageData" :key="messageItem.index">
						<span class="messageContain" 
						v-html="messageItem.messageContain">
						</span>
						<span class="messageTime">
							<p>{{messageItem.messageTime}}</p>
						</span>
					</div>
				</div>
			</div>
			<div class="statistcsGraph">
				<div class="statistcsGraphTitle">数据提交情况</div>
				<!-- <iframe src="multiple-x-axis.html" frameborder=0  scrolling="no" border=0   width=100%   height=100% ></iframe> -->
									<multipleXAxis></multipleXAxis>
			</div>
		</div>
	</div>
</template>

<script>
import multipleXAxis from './multiple-x-axis'
import b from '@/assets/js/homePageForNormal.js'
// import searchPage from './searchPage'
// import  'jquery'
export default {
    name: "homePageForNormal",
    data() {
        return {
			forNormalSearchStr:'',
            // introWords:'2016年是我国“十三五”规划的第一年，中国多领域面临挑战与机遇，我国既面临大有作为的重要战略机遇，也面临诸多矛盾叠加、风险隐患增多的严峻挑战，作为中国经济重中之重的金融领域，更是迎来重大变革的新时代，新常态下的发展',
            cur: 0,
            carouselData:[
                {
                    showPic:'/static/image/example8.png',
                    isActive:'active',
                    carouseIntroWords:"虚拟货币市场主体的规范与指引",
                    content:'2016年是我国“十三五”规划的第一年，中国多领域面临挑战与机遇，我国既面临大有作为的重要战略机遇，也面临诸多矛盾叠加、风险隐患增多的严峻挑战，作为中国经济重中之重的金融领域，更是迎来重大变革的新时代，新常态下的发展'
                },
                {
                    showPic:'/static/image/example2.jpg',
                    isActive:'',
                    carouseIntroWords:"中国货币市场基准利率的确立及其动态关系研究",
                    content:'Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。'
                },
                {
                    showPic:'/static/image/example3.png',
                    isActive:'',
                    carouseIntroWords:"论我国货币市场与资本市场的协调发展",
                    content:'改革开放以来，我国经济发展迅速，人们的生活水平得到了明显提高。可是，在经济快速发展的过程中货币市场与资本市场都存在一定的不足，本文作者对我国的货币市场与资本市场进行了详细的分析与总结，并提出了相应的措施，希望能够促进二者的协调发展'
                },
                {
                    showPic:'/static/image/example4.jpg',
                    isActive:'',
                    carouseIntroWords:"货币市场基准利率的性质及对Shibor的实证研究",
                    content:'作为我国金融市场基准利率体系建设和利率市场化改革配套的重要基础设施，上海银行间同业拆放利率（Shibor）已成功运行近7年。本文首先对货币市场基准利率的性质进行了讨论，指出市场代表性和基准性是金融市场基准利率的核心属性。对我国货币市场和Shibor运行以来情况的考察表明，Shibor具备了货币市场基准利率的基本特征。通过等均值、等方差检验、Granger因果分析和EGARCH模型等方法进行的实证分析表明，Shibor具有良好的市场代表性、基准性和稳定性，较好地发挥了货币市场基准利率的作用。今后应以市场机制建设为重点，进一步夯实巩固Shibor货币市场基准利率地位，通过Shibor的健全完善，推动中国金融市场化改革向纵深领域迈进．促进中国金融和经济的长远健康发展。'
                },
                {
                    showPic:'/static/image/example5.png',
                    isActive:'',
                    carouseIntroWords:"货币政策工具与货币市场基准利率",
                    content:'数量型工具与价格型工具都属于货币政策的分类，都属于政府或中央银行为影响经济活动所采取的措施，尤指控制货币供给以及调控利率的各项措施，用以达到特定或维持政策目标———比如，抑制通胀、实现完全就业或经济增长。目前，我国正处于汇率改革的关键时期，利率的走势应该服务于汇率改革，为汇改创造一个平稳的、收益率略低的利率环境，既然利率型工具有如此大的振动幅度和如此长的作用周期，那么对于利率工具的选择就需要慎重'
                }
            ],
            buzzwords:[],
            recommendData:[
            {
                recommendImage:'/static/image/example1.jpg',
                recommendTitle:'虚拟货币市场主体的规范与指引',
                recommendInfoAuthor:'canjuly',
                recommendInfoTime:'2018/03/03',
                recommendStatistcsCount:'775'
            },
            {
                recommendImage:'/static/image/example6.jpg',
                recommendTitle:'中国货币市场基准利率的确立及其动态关系研究',
                recommendInfoAuthor:'中本聪',
                recommendInfoTime:'2018/03/05',
                recommendStatistcsCount:'3453'
            }
            ],
            messageData:[
                {
                    messageContain:'您收藏的文章 \
                                    <i>浅谈区块链 </i>有更新',
                    messageTime:'12:33:51'
                },
                {
                    messageContain:'您关注的用户 \
                                    <i>故故故故yu </i>发布了新文章',
                    messageTime:'14:45:15'
                },
                {
                    messageContain:'您收藏的文章<i> \
                                    什么是比特币？ </i>有更新',
                    messageTime:'14:53:35'
                },
                {
                    messageContain:'您的文章 \
                                    <i>货币基金如何盈利？ </i>\
                                    被\
                                    <i>canjuly </i>\
                                    点赞',
                    messageTime:'16:15:57'
                },
                {
                    messageContain:'<i>canjuly </i>\
                                    关注了您',
                    messageTime:'18:49:00'
                },
                {
                    messageContain:'您收藏的文章<i> \
                                    中本聪的真正身份 </i>有更新',
                    messageTime:'19:23:48'
                },
                {
                    messageContain:'您收藏的文章<i> \
                                    区块链大法 </i>有更新',
                    messageTime:'21:48:36'
                }
            ],
        }
    },
    methods:{
		searchArticle:function(){
			this.$router.push({ 
				name: '.module.searchPage' ,
				params:{
					str:this.forNormalSearchStr
				}
			})
		},
		hotSearch:function(index){
			this.$router.push({
				name:'.module.searchPage',
				params:{
					str:index
				}
			})
		}
    },
	// beforeRouteLeave :(to,from,next)=>{
	// 	console.log("准备进入路由模板");
	// 	searchPage.methods.getSearchResult();
	// 	next();
  	// },
	mounted(){
		b.fmtDate();
        $('#rightIntro span').text(this.carouselData.content);
        $('#leftCarousel').carousel({
            interval: 5000
		});
		// var self = this;
        // $('#leftCarousel').on('slide.bs.carousel', function () {
        //     // console.log(this.carouselData);
		// 	// console.log(leftCarousel.cur);

        //     self.cur = (self.cur + 1)%self.carouselData.length;
        //     $('#rightIntro span').text(self.carouselData[self.cur].content);
        // })
	},
	created(){
		this.$http.get('http://www.ls1rius.com:8080/getPopularTags').then(res=> {
	             var that = this;
	             res.data.forEach(function(item){
	             	that.buzzwords.push({
	             		'buzzword':item.name 
	             	});
	             });
	            // get body data
	            // this.someData = response.body;
	        }, function(res){
	            console.log("数据获取错误");
			});
	},
	components:{
		multipleXAxis,
	}

}
</script>

<style scoped>


.VueCarousel-pagination {
  position: absolute;
  top: 195px;
}

body,html {
	height: 720px;
}
select,option  {
	font-size: 12px!important;
	color: #000!important;
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
	height: 720px;
	min-width: 700px;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 10px 20px 0px 20px;
}
#rightContain {
	margin-left: 10px;
	min-width: 325px;
	height: 720px;
	width: 325px;
	background-color: #ffffff;
	border-radius: 10px;
}


#centerContain {
	padding: 20px 30px 20px 30px;
}

#insideContain #centerContain .introModule {
	width: 100%;
	height: 270px;
	display: flex;
}
#leftCarousel {
	width: 100%;
	height: 250px;
}
.carouseImg {
	width: 60%;
	height: 250px;
}
.carouseImg img {
	width:100%;
    height:100%;
    /* padding-bottom: 100%;
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    background-size:cover; */
	
}
#leftCarousel .carousel-indicators {
	bottom: 0px;
	margin-left: -68%;
}
#leftCarousel .carouselIntro {
	position: absolute;
	bottom: 25px;
	z-index: 15;
	/*width: 60%;*/
	height: 20px;
	padding-left: 0;
	margin-left: 5%;
	text-align: center;
	list-style: none;
	display: block;
	color: #ffffff;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
#leftCarousel .carousel-indicators .active {
	width: 20px;
	height: 7px;
	margin: 0;
	background-color: #bfc3ca;
}
#leftCarousel .carousel-indicators li {
	width: 7px;
	height: 7px;
	margin: 0px;
	margin-left: 3px;
	margin-right: 3px;
}
.carouselEx {
	display: flex;
}
#rightIntro {
	border:1px solid #06689F;
	border-left: none;
	width: 40%;
	height: 250px;
	padding: 13px;
	display: inline-block;
}
#rightIntro span {
	font-size: 20px;
	line-height: 25px;
	width: 100%;
	height: 100%;

	display: block;
	overflow: hidden;
}

.searchModule {
	width: 100%;
	height: 160px;
	border:1px solid #06689F;
	border-top: none;
}
.headTitle {
	width: 100%;
	height: 45px;
	background-color: rgb(39,166,155);
	color: white;
	/*background: -webkit-linear-gradient(left, #5ec1e4 , #56a9a4); /* Safari 5.1 - 6.0 */
	/*background: -o-linear-gradient(right, #5ec1e4, #56a9a4); /* Opera 11.1 - 12.0 */
	/*background: -moz-linear-gradient(right, #5ec1e4, #56a9a4); /* Firefox 3.6 - 15 */
	/*background: linear-gradient(to right, #5ec1e4 , #56a9a4); /* 标准的语法 */
	display: flex;
	align-items: center;
	padding-left: 20px;
	font-weight: bold;
	font-size: 14px;
}
.headTitle i {
	margin-left: 10px;
	cursor: pointer;
}

.buzzwordContain {
	width: 100%;
	height: 47px;
	padding: 0 20px 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.buzzwordContain span{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 15px 5px 15px;
	border:1px solid #06689f;
	border-radius: 20px;
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;
}
.searchBoxContain {
	width: 100%;
	height: 67px;
	padding: 10px 20px 10px 20px;
	display: flex;
	flex-wrap: nowrap;
}
.searchBoxContain input {
	display: block;
	width: 80%;
	height: 100%;
	padding-left: 2%;
	outline: none;
}
.searchBoxContain .searchBtn {
	width: 20%;
	height: 100%;
	background-color:rgb(39,166,155);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: #ffffff;
}
.recommendModule {
	width: 100%;
	height: 250px;
	border:1px solid #06689F;
}
.recommendBoxContain {
	width: 100%;
	height: 102px;
	padding: 10px 20px 10px 20px;
	display: flex;
	flex-wrap: nowrap;
}
.recommendBoxContain {
	border-bottom:1px solid #06689F;
	display: flex;
	align-items: center;
}
.recommendBoxContain img {
	width: 100px;
	height: 70px;
	border-radius: 10px;
}
.recommendBoxContain .recommendItem {
	width: 100%;
	height: 100%;
	padding-left: 10px;
}
.recommendBoxContain .recommendItem .recommendTitle,
.recommendBoxContain .recommendItem .recommendInfo {
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	width: 90%;
	height: 50%;
	display: flex;
	align-items: center;
}
.recommendBoxContain .recommendItem .recommendTitle {
	font-size: 16px;
	color: #000000;
	font-weight: bold;
}
.recommendBoxContain .recommendItem .recommendInfo {
	font-size: 14px;
	color: #999999;
}
.recommendBoxContain .recommendStatistcsItem {
	width: 10%;
	height: 100%;
	padding-left: 10px;
}
.recommendBoxContain .recommendStatistcsItem .recommendStatistcsCount,
.recommendBoxContain .recommendStatistcsItem .recommendStatistcsInfo {
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	width: 80%;
	height: 50%;
	display: flex;
	align-items: center;
}
.recommendBoxContain .recommendStatistcsItem .recommendStatistcsCount {
	font-size: 16px;
	color: #06689F;
	font-weight: bold;
}
.recommendBoxContain .recommendStatistcsItem .recommendStatistcsInfo {
	font-size: 14px;
	color: #999999;
}

#rightContain .message {
	width: 100%;
	height: 50%;
	/*background: lightblue;*/
	overflow: hidden;
}
#rightContain .message .messageHeadTitle {
	width: 100%;
	min-height: 38.75px;
	padding :0 15px 0 15px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #999999;
}
#rightContain .message .messageBoxContain{
	width: 100%;
	/*min-height: 38.75px;*/
	max-height: 72px;
	padding :10px 15px 10px 15px;
	display: flex;
	/*align-items: center;*/
	border-bottom: 1px solid #999999;
	overflow: hidden;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

#rightContain .message .messageHeadTitle {
	color: #000;
	font-size: 16px;
	font-weight: bold;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-self: center;
}
#rightContain .message .messageHeadTitle span {
	margin: 0;
	padding: 0;
	display: block;
}
#rightContain .message .messageHeadTitle .commentBtn  {
	color:#06689F;
	font-size: 14px; 
	cursor: pointer
}
#rightContain .message .messageHeadTitle .commentBtn:hover {
	color: red;
}
#rightContain .message .messageBoxContain {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: nowrap;
}
#rightContain .message .messageBoxContain span {
	display: block;
	font-size: 12px;
/*	height: 16px;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;*/
}
#rightContain .message .messageBoxContain span i {
	color: #06689F;
}
#rightContain .message .messageBoxContain .messageContain {
	width: 60%;
	overflow: hidden;
	height: 100%;
}
#rightContain .message .messageBoxContain .messageTime{
	width: 40%;
	color: #999999;
}
#rightContain .message .messageBoxContain .messageTime p {
	float: right;
	margin: 0;
	padding: 0;
}
	
	
#rightContain .statistcsGraph {
	width: 100%;
	height: 50%;
	overflow: hidden;
	padding: 10px;
}

#rightContain {
	background-color: transparent;
}
#rightContain .message,
#rightContain .statistcsGraph{
	width: 100%;
	height: 350px;
	border-radius: 10px;
	background-color: #ffffff;
	padding: 20px;
}
#rightContain .statistcsGraph {
	margin-top: 20px;
}


#rightContain .statistcsGraph .statistcsGraphTitle,
#rightContain .message .title {
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #ccc;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 16px;
	color: #000000;
}


</style>


