<template>
	<div id="insideContain" style="margin: 0;">
		<div id="centerContain">
			<div class="choosePart">
				<span class="title">我的知识</span>
				<div class="chooseBottom">
					<div class="chooseBox">
						<!-- <div class="changeBar"></div> -->
						<!-- <div v-for="chooseItem in chooseData" :key="chooseItem.index">
							<div class="chooseItemSpace"></div>
							<div class="chooseItem">
								<i class="iconfont" v-bind:class="[chooseItem.icon]" v-bind:style="{color:chooseItem.iconColor}"></i>
								<span>{{chooseItem.choose}}</span>
							</div>
						</div> -->


						<template v-for="chooseItem in chooseData" >
							<div class="chooseItemSpace" :key="chooseItem.index"></div>
							<div class="chooseItem" :key="chooseItem.index" v-on:click="toHDA()">
								<i class="iconfont" v-bind:class="[chooseItem.icon]" v-bind:style="{color:chooseItem.iconColor}"></i>
								<span>{{chooseItem.choose}}</span>
							</div>
						</template>
						
						
					</div>
					<div class="changePickType">
						<span class="pickItem" v-bind:style="{'color':isPassPart?'red':'#ccc'}" v-on:click="changePickType('p')">审核通过</span>
						<span class="pickItem" v-bind:style="{'color':isFailPart?'red':'#ccc'}"
						v-on:click="changePickType('f')">审核失败</span>
					</div>
				</div>
			</div>
			<div class="searchResult">
					<div class="searchResultContain">
						<div class="searchResultContainBox"  v-for="result in searchResults" :key="result.index">
							<div class="searchResultIntro">
								<div class="searchResultTitle">
									{{result.title}}
								</div>
								<img v-bind:src="result.textImage">
								<div class="searchResultIntroWords">
									<span>{{result.text}}</span>
									<div style="display: flex;
									flex-wrap: nowrap;width: 100%;
									height: 14%; align-items: center;">
										<p>关键词:</p>
										<div class="keyWords" >
											<i v-for="word in result.keyWords" :key="word.index">{{word.item}}</i>
										</div>
										<div class="readAllBtn" v-on:click="gotoReadContent">阅读全文</div>
									</div>
								</div>
							</div>
							<div class="searchResultAuthor">
								<div class="infoBox">
									<img v-bind:src="result.authorImage">
									<span>{{result.authorName}}</span>
								</div>
								<div class="infoBox">
									<i class="iconfont icon-xinxi">    {{result.messageCount}}</i>
									<i  class="iconfont icon-msnui-love">    {{result.likeCount}}</i>
								</div>
								<div class="infoBox">
									<i class="iconfont icon-shijian">    {{result.publishTime}}</i>
									<i class="iconfont icon-yonghu1">    {{result.authorName}}</i>
								</div>
							</div>
						</div>
					</div>
					<div class="searchResultPageBox">
						<div class="page">
							<ul class="pagination pagination-sm">
							</ul>
						</div>
					</div>
			</div>
		</div>
		<div id="rightContain">
			<div class="message">
				<div class="messageHeadTitle">我的通知</div>
				<div style="width: 100%;height:271.25px;min-height:271.25px;display: flex!important;flex-wrap: wrap;overflow-y: scroll;">
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
			<div class="hotPart">
				<div class="title">我的收藏</div>
				<div class="hotContain" v-for="hotContainItem in hotContainData" :key="hotContainItem.index">
					<div class="containTitle">
						<img v-bind:src="hotContainItem.iconfont">
						<p>{{hotContainItem.title}}</p>
					</div>
					<div class="containStar">
						<p>{{hotContainItem.date}}</p>
						<p>{{hotContainItem.time}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import myArt from "@/assets/js/myArticle"

export default {
    name:'myArticle',
    data(){
        return{
        chooseData:[
        {
            icon:'icon-yanjing1',
            choose:'审核',
            iconColor:'#29958F'
        },
        {
            icon:'icon-wancheng',
            choose:'发布',
            iconColor:'#8175C7'
        },
        {
            icon:'icon-folder',
            choose:'归档',
            iconColor:''
        },
        {
            icon:'icon-shanchu',
            choose:'删除',
            iconColor:'#59ACE2'
        },
        {
            icon:'icon-gantanhao',
            choose:'失效',
            iconColor:'#FF6C60'
        },
        {
            icon:'icon-wenjianjia',
            choose:'个人目录',
            iconColor:''
        }
        ],
        searchResults:[
        {
            title:'期货的入门知识',
            textImage:'/static/image/example4.jpg',
            text:'在下供职于国内一家期货公司，可以说说对这个问题的认识，也总结一下自己的思考。\
                从定义上来说，期货是在交易所内进行交易的标准化的合约，该合约约定了在未来\
                某一个特定的时间（交割日）以确定的价格（期货价格）交易一定数量是在交易所内\
                进行交易的标准化的合约，该合约约定了在未来某一个特定的时间（交割日）以确定的价格\
                （期货价格）交易一定数量',
            keyWords:[
            {
                item:'期货'
            },
            {
                item:'保险金'
            },
            {
                item:'期货'
            },
            {
                item:'保险金'
            },
            {
                item:'期货'
            }
            ],
            authorImage:'/static/image/example1.jpg',
            authorName:'Mr.吴',
            messageCount:13,
            likeCount:108,
            publishTime:'2018/03/31'
        },
        {
            title:'躺枪的万科与海淀的码农',
            textImage:'/static/image/example2.jpg',
            text:'10年180万元，在北京的5.5环租个90平方米的小三居，当这个消息传到自己耳朵里的时候，立马有了一种贫穷限制了自己想象力的感觉。并暗自感叹，还好提前贷款买了房，要不然以在媒体工作的那点薪水，今后在北京恐怕连租房的资格都要没有了。',
            keyWords:[
            {
                item:'证券'
            },
            {
                item:'房市'
            },
            {
                item:'公司'
            },
            ],
            authorImage:'/static/image/example1.jpg',
            authorName:'证券专家',
            messageCount:5,
            likeCount:22,
            publishTime:'2018/03/12'
        },
        {
            title:'人民币兑美元中间价下跌46基点报6.2817',
            textImage:'/static/image/example1.jpg',
            text:'4月17日在岸人民币兑美元即期汇率收涨47个基点，与中间价均创逾两周新高，午后美元震荡回落，但因月中购汇需求偏多，逢低美元买盘明显限制人民币汇率上涨空间，盘中波动区间为6.2740-6.2830，北京时间23:30夜盘报6.2835，较上日夜盘跌70个基点，全天成交量318.68亿美元，较上日扩大38.32亿美元。',
            keyWords:[
            {
                item:'货币'
            },
            {
                item:'人民币'
            },
            {
                item:'汇率'
            }
            ],
            authorImage:'/static/image/example1.jpg',
            authorName:'人民币动态',
            messageCount:2,
            likeCount:11,
            publishTime:'2018/03/31'
        },
        {
            title:'中国经济新开放助力世界经济稳定向好',
            textImage:'/static/image/example7.png',
            text:'实践证明，过去40年中国经济发展是在开放条件下取得的，未来中国经济实现高质量发展也必须在更加开放条件下进行。这是中国基于发展需要作出的战略抉择，同时也是在以实际行动推动经济全球化造福世界各国人民。”博鳌亚洲论坛2018年年会开幕式上，中国领导人再次向世界释放扩大开放的强烈信号。',
            keyWords:[
            {
                item:'宏观经济'
            },
            {
                item:'中国经济'
            },
            {
                item:'国际'
            }
            ],
            authorImage:'/static/image/example1.jpg',
            authorName:'宏观经济',
            messageCount:46,
            likeCount:258,
            publishTime:'2018/02/22'
        }
        ],
        isPassPart:true,
        isFailPart:false,
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
        hotContainData:[
            {
                iconfont:'/static/image/word.png',
                title:'区块链如何带来个人数据保护“革命”？',
                starImg:'/static/image/star.png',
                starCount:'5',
                date:'2018/03/5',
                time:'12:29:23'
            },
            {
                iconfont:'/static/image/excel.png',
                title:'化解小微企业融资难题 腾讯区块链发力供应链金融',
                starImg:'/static/image/star.png',
                starCount:'4',
                date:'2018/03/3',
                time:'12:29:23'
            },
            {
                iconfont:'/static/image/pdf.png',
                title:'洛克菲勒家族旗下风投公司将与CoinFund展开合作',
                starImg:'/static/image/star.png',
                starCount:'4',
                date:'2018/03/3',
                time:'12:29:23'
            },
            {
                iconfont:'/static/image/ppt.png',
                title:'区块链规模应用尚需时日',
                starImg:'/static/image/star.png',
                starCount:'4',
                date:'2018/03/2',
                time:'12:29:23'
            },
            {
                iconfont:'/static/image/word.png',
                title:'北京金融局党组书记霍学文九问区块链、比特币与ICO ',
                starImg:'/static/image/star.png',
                starCount:'4',
                date:'2018/03/1',
                time:'12:29:23'
            },
            {
                iconfont:'/static/image/word.png',
                title:'消息称谷歌正研究区块链相关技术来支持其云业务',
                starImg:'/static/image/star.png',
                starCount:'4',
                date:'2018/02/25',
                time:'12:29:23'
            }
        ]
        }
    },
    methods:{
		gotoReadContent:function(){
			this.$router.push({path:'/module/readContent'});
		},
        getSearchResult : function(){
            this.normal = false;
            this.specifical = false;
            this.searchResult = true;
            setTimeout(function(){
                $(".pagination").createPage({
                    totalPage:30,
                    currPage:1,
                    backFn:function(p){
                        console.log("回调函数："+p);
                    }
                });
            },100);
        },
        changePickType:function(type){
            if(type=='p'){
                this.isPassPart = true;
                this.isFailPart = false;
            }
            else{
                this.isPassPart = false;
                this.isFailPart = true;
            }
		},
		toHDA:function(){
			this.$router.push({ path: '/module/homePageForDepartAdmin' });
		}
	},
	mounted(){
		myArt.myArt();
	}

}
</script>

<style scoped>
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
	min-width: 700px;
	height: 720px;
	background-color: #ffffff;
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
}
#rightContain {
	background-color: transparent;
}
#centerContain {
	padding: 20px 30px 20px 30px;
}
#rightContain {
	background-color: transparent;
}
.searchResult .searchResultContain {
	width: 100%;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}
.searchResult .searchResultContain .searchResultContainBox {
	width: 48%;
	height: 48%;
	/*background-color: red;*/
	padding: 10px;
	box-shadow: 1px 1px 5px #ccc;
	border-radius: 10px;
}
.searchResult .searchResultContain .searchResultContainBox .searchResultIntro {
	width: 100%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	/*background-color: red;*/
}
.searchResult .searchResultContain .searchResultContainBox .searchResultIntro .searchResultTitle {
	width: 100%;
	height: 30%;
	display: flex;
	align-self: center;
	align-content: center;
	align-items: center;
	color: #000;
	font-size: 18px;
}

.searchResult .searchResultContain .searchResultContainBox .searchResultIntro img {
	width: 40%;
	height: 70%;
	border-radius: 10px;
}

.searchResultIntroWords {
	width: 60%;
	height: 70%;
	padding: 5px;
}
.searchResultIntroWords span {
	overflow: hidden;
	display: flex;
	width: 100%;
	height:86%;
	font-size: 10px;
	color: #888888;
}
.searchResultIntroWords .keyWords {
	width: 80%;
	height: 100%;
	display: flex;
	overflow: hidden;
	align-items: center;
	flex-wrap: wrap;
	font-size: 10px;
}
.searchResultIntroWords p {
	margin: 0;
	display: block;
	width: 45px;
	min-width: 45px;
	font-weight: thin;
	font-size: 10px;
}
.searchResultIntroWords .readAllBtn {
	min-width: 55px;
	height: 100%;
	display: flex;
	align-items: center;
	color:  #06689F;
	font-size: 10px;
	cursor: pointer;
}
.searchResultIntroWords .keyWords i:before {
	content: "、";
}
.searchResultIntroWords .keyWords i:first-child:before {
	content: none;
}
.searchResultAuthor {
	width: 100%;
	height: 20%;
	background-color: #f6f6f6;
	display: flex;
	align-items: center;
	justify-content: center;
}
.searchResultAuthor .infoBox {
	width: 33.33333%;
	height: 100%;
	display: flex;
	align-items: center;	
	overflow: hidden;
	font-size: 12px;
	flex-wrap: wrap;
	color: #000;
}
.searchResultAuthor .infoBox img {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	margin-right: 10px;
}
.searchResultAuthor .infoBox i {
	font-size: 10px;
	color: #999;
	width: 100%;
	display: block;
}
.searchResultPageBox {
	width: 100%;
	height: 40px;
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.pagination li .now{
	background: #56a9a4!important;
}

.choosePart {
	width: 100%;
	height: 150px;
	/*background-color: red;*/
}
.choosePart .title {
	width: 100%;
	height: 20px;
	display: flex;
	align-items: center;
	font-size: 20px;
	font-weight: bold;
	color: #000;
}
.chooseBottom {
	width: 100%;
	height: 130px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 10px;
}
.chooseBox {
	width: 85%;
	height: 80px;
	border: 1px solid #000;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.chooseItem {
	width: 16%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.chooseItem i {
	width: 100%;
	font-size: 25px;
	align-items: center;
	display: flex;
	justify-content: center;
}
.chooseItem span {
	width: 100%;
	font-size: 16px;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
}
.chooseItemSpace {
	width: 1px;
	height: 80%;
	background-color: #000;
}

.chooseItemSpace:first-child {
	display: none;
}

.changePickType {
	width: 100%;
	height: 20px;
	display: flex;
}
.changePickType .pickItem {
	font-size: 12px;
	color: #999;
	margin-right: 15px;
}
.changePickType .pickItem:hover {
	color: red!important;
	opacity: 1;
	cursor: pointer;
}
.changePickType .pickItem:before{
	content: "[";
	opacity: 0;
}
.changePickType .pickItem:after{
	content: "]";
	opacity: 0;
}
.changePickType .pickItem:hover:before,
.changePickType .pickItem:hover:after {
	transition: 0.5s;
	opacity: 1;
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
	color:#2FABA5;
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
#rightContain .hotPart{
	width: 100%;
	height: 350px;
	border-radius: 10px;
	background-color: #ffffff;
	padding: 20px;
}
#rightContain .hotPart {
	margin-top: 20px;
}


#rightContain .hotPart .title,
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


#rightContain .hotPart .hotContain {
	width: 100%;
	height: 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #ccc;
}
#rightContain .hotPart .hotContain .containTitle {
	display: flex;
	align-items: center;
	width: 70%;
	height: 100%;
}

#rightContain .hotPart .hotContain .containTitle img {
	width: 20px;
	height: 20px;
	min-width: 20px;
	min-height: 20px;
	display: block;
}
#rightContain .hotPart .hotContain .containTitle p {
	font-size: 10px;
	margin: 0;
	display: block;
	margin-left: 10px;
}
#rightContain .hotPart .hotContain .containStar {
	display: flex;
	align-items: center;
	width: 30%;
	height: 100%;
	flex-wrap: wrap;

}

#rightContain .hotPart .hotContain .containStar p {
	width: 100%;
	height: 15px;
	font-size: 12px;
	color: #ccc;
	display: block;
	margin: 0;

}

</style>


