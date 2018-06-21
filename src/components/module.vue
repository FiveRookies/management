import func from './vue-temp/vue-editor-bridge';
import Vue from 'vue';
<template>
    
    <div id="mainContain"  class="container-fluid">
        <!-- <div v-if="isLoading" class="waitWindow" v-on="preventAll()">
            加载中
        </div> -->
		<div id="topBar" class="container-fluid">
			<div class="leftPart">
				<img v-bind:src="logoPic" v-on:click="backToHomePage()">
				<p >一知科技</p>
				<i class="iconfont icon-xinxi"></i>
				<i class="iconfont icon-tubiao01"></i>
				<i class="iconfont icon-shuaxinzhongjieban"></i>
			</div>
			<div style="width:100%;height: 100%"></div>
			<div id="usrInfo">
				<div class="usrInfoBoxContain">
					<img v-bind:src="usrHeadImage">
					<span>{{usrName}}
						<!-- <i class="iconfont icon-sanjiaodown"></i> -->
					</span>
				</div>
				<div class="dropDownBox">
					<span v-on:click="swapIntoUsrInfoPage()">个人中心</span>
					<span v-on:click="backtologin()">退出</span>
				</div>
			</div>
		</div>
		<div id="bottomContain">
			<div id="navigator" >
				<div id="navigatorModule">
					<div class="pickedBar" v-bind:style="{top:pickedBarTop + 'px'}"></div>
					<div class="navigatorItems" v-for="(item,index) in items" :key="(item,index).index" v-on:click="transToPage(item.transToPageAddr,index)"  v-bind:class="item.fontColor">
						<i v-bind:class="[item.iconfont , item.fontColor]" class="iconfont"></i>
						<span>{{item.navigatorName}}</span>
					</div>
				</div>
			</div>
			<div id="insideContain" style="overflow: hidden;">
				<transition :name="fade">
                    <router-view @ChangeHeadImage="CTChangeHeadImage" @ChangeName="CTChangeName"></router-view>
                </transition>
			</div>
		</div>

	</div>
</template>

<script>

export default {
    name:'module',
    data(){
        return{
            userJob:"",
            isLoading:false,
        logoPic:'/static/image/headImage.png',
		usrHeadImage:'/static/image/user.jpg',  
		usrName:'李豪',
		pickedBarTop: 2,
		items:[
		{
			iconfont:'icon-iconset0119',
			fontColor:'navigatorItemsChooseColor',
			navigatorName:'首页',
			rerouter:'/module/homePageForNormal',
		},
		{
			iconfont:'icon-xinjianwendang',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'新建知识',
			rerouter:'/module/editor',
		},
		{
			iconfont:'icon-zhishikuguanli',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'我的知识',
			rerouter:'/module/myArticle',
		},
		{
			iconfont:'icon-sousuo',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'搜索知识',
			rerouter:'/module/searchPage'
		},
		{
			iconfont:'icon-sort',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'知识目录',
			rerouter:'/module/newDocument',
		}
		,
		{
			iconfont:'icon-tongji',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'知识统计',
			rerouter:'/module/statistic',
		}
		]
        }
    },
    methods:{
        preventAll:function(event){
            // event.preventDefault();
        },
        transToPage : function(addr,index){
			
            // this.$router.push({ path: '/module/homePageForNormal' })
            //对push进行监听 等待push完成删除waitWindow
            this.isLoading = true;
            this.$router.push( this.items[index].rerouter);
            this.isLoading = true;
			this.items.forEach(function(item){
				// console.log(item.fontColor);
				item.fontColor = 'navigatorItemsUnChooseColor';
			})
			
			this.items[index].fontColor = 'navigatorItemsChooseColor';
			this.pickedBarTop = index * 120 + 2;
			// console.log(this.pickedBarTop);

		},
		swapIntoUsrInfoPage : function(){
			this.$router.push({path:'/module/usrInfo'});
		},
        backToHomePage : function() {
			this.$router.push({ path: '/module/homePageForNormal' })
			this.pickedBarTop = 0 * 120 + 2;
			this.items.forEach(function(item){
				// console.log(item.fontColor);
				item.fontColor = 'navigatorItemsUnChooseColor';
			});
			this.items[0].fontColor = 'navigatorItemsChooseColor';
		},
		backtologin:function(){
			this.$router.push({ path: '/login' });
			 $.ajax({  
				url :"http://www.ls1rius.com:8080/logout",   
				cache : true, 
				type : "get",
				xhrFields: {
					withCredentials: true
				},
				datatype : "json",  
				contentType : "application/json; charset=utf-8",  
				data : '',  
				success : function (data){  
					console.log(data);
				}
			})

        },
        CTChangeName : function(name){
			this.usrName=name;
		},
		CTChangeHeadImage: function(headImage){
			// var self = this;
			// $.ajax({  
			// 	url :"http://www.ls1rius.com:8080/getCurUser",   
			// 	cache : true, 
			// 	type : "get",
			// 	xhrFields: {
			// 		withCredentials: true
			// 	},
			// 	datatype : "json",  
			// 	contentType : "application/json; charset=utf-8",  
			// 	data : '',  
			// 	success : function (data){  
			// 		console.log(data);
			// 		self.usrName = data.name;
			// 		self.usrHeadImage = data.headImage;
			// 	}
			// })
			this.usrHeadImage=headImage;
			console.log(headImage);
		},
        showWaitMsg:function(){
            
        }
    },
	mounted(){
		this.$router.push({ path: '/module/homePageForNormal' });
		//  this.$http.get('http://www.ls1rius.com:8080/getCurUser', {
        //       params: {
               
        //       },
        //       dataType:'json'
        //   }).then((res) => {
        //       // res.forEach(function (c) {  
        //       //   console.log(c);
        //       // })
        //       console.log(res);
        //   }, (response) => {
        //     // error callback
		//   });
		var self = this;
		 $.ajax({  
            url :"http://www.ls1rius.com:8080/getCurUser",   
            cache : true, 
            type : "get",
            xhrFields: {
                withCredentials: true
            },
            datatype : "json",  
            contentType : "application/json; charset=utf-8",  
            data : '',  
            success : function (data){  
				self.usrName = data.name;
                self.usrHeadImage = data.headImage;
                self.userJob = data.job;
                if(self.userJob=="部门经理"){
                    self.items[2].navigatorName="审核中心";
                }
            }
        })

    },
    watch: {
        '$route' (to, from) {

        }
    }
}
</script>

<style scoped>
body,html{
	min-width: 1380px;
	width: 100%;
	height: 100%;
	min-height: 860px;
	background-color: #f4f4f4!important;
	display: flex;
	justify-content: center;
}
select,option  {
	font-size: 12px!important;
	color: #000!important;
}
#mainContain {
	min-width: 1380px;
	max-width: 1380px;
	width: 1380px;
	height:100%;
	background-color: #f4f4f4;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin: auto;
}
#bottomContain {
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
}
#navigator {
	width: 120px;
	height:720px;
	background: #ffffff;
	border-radius: 10px;
	position: absolute;
	/*margin-top: 15px;*/
}
.navigatorItems {
	width: 100%;
	height: 120px;
	/* padding-top: 10px;
	padding-bottom: 10px; */
	display:flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	color: #999999;
	box-sizing: content-box!important;
}
.navigatorItems i{
	text-align: center;
	display: block;
	font-size: 50px;
	width: 100px;
	height: 70px;
}
.navigatorItemsUnChooseColor {
	background-color: transparent;
}
.navigatorItemsChooseColor {
	background-color: #e5e5e5;
}
.pickedBar {
	position: absolute;
	background: rgb(39,166,155);
	width: 5px;
	height: 116px;
	left:0px;
	transition:0.5s; 
}
#topBar {
	width: 100%;
	height: 70px;
	border-radius: 10px;
	display: flex;
	z-index: 999;
	margin-top: 10px;
	background-color: rgb(39,166,155);
	/*background: -webkit-linear-gradient(left, #5ec1e4 , #56a9a4); /* Safari 5.1 - 6.0 */
	/*background: -o-linear-gradient(right, #5ec1e4, #56a9a4); /* Opera 11.1 - 12.0 */
	/*background: -moz-linear-gradient(right, #5ec1e4, #56a9a4); /* Firefox 3.6 - 15 */
	/*background: linear-gradient(to right, #5ec1e4 , #56a9a4); /* 标准的语法 */

}

#topBar .leftPart {
	min-width: 350px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-items: center;
}
#topBar .leftPart img {
	width: 50px;
	height: 50px;
	display: block;
	cursor: pointer;
}
#topBar .leftPart p {
	font-size: 25px;
	color: white;
	padding-top: 10px;
	margin-left: -25px;
}
#topBar .leftPart i {
	font-size: 25px;
	color: #ffffff;
}
#usrInfo {
	min-width: 400px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: nowrap;
	transition: 0.5s;
}
#usrInfo img {
	width: 50px;
	height: 50px;
	display: block;
	border-radius: 50%;
}
#usrInfo span {
	/*width: 50px;*/
	/*height: 50px;*/
	display: block;
	color: #ffffff;
	font-size: 16px;
	padding-left: 10px;
	cursor: pointer;
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
#usrInfo .usrInfoBoxContain {
	/*min-width: 400px;*/
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 200px;
}
#usrInfo .dropDownBox {
	min-width: 150px;
	height: 100%;
	z-index: 888;
	display: none;
	flex-wrap: nowrap;
	align-content: center;
	justify-content: space-between;
	opacity: 0;
}
#usrInfo:hover .dropDownBox{
	transition: 0.5s;
	display: flex;
	opacity: 1;
}
#usrInfo:hover .usrInfoBoxContain{
	transition: 0.5s;
	margin-left: 0px;
	min-width:200px;
}
#usrInfo .dropDownBox span {
	font-size: 16px;
	color: #fff;
	height: 100%;
	display: flex;
	align-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
}


.waitWindow{
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    opacity: 0.5;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    align-self: auto;
}


</style>



