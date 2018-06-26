<template>
    <div id="insideContain" style="margin: 0;">
		<div class="centerContain" v-if="!isReviewing">
			<div class="headTitle">
				<span>审核列表</span>
				<select>
						<option v-bind:value="departItem.index" v-for="departItem in departs" :key="departItem.index">
							{{departItem.departName}}
						</option>
				</select>
			</div>
			<div class="fileList">
				<div class="fileListBoxContain" 
				v-for="(fileListItem,index) in fileListData"
                :key="index"
				v-on:click="startReview(index)">
					<img v-bind:src="fileListItem.coverUrl">
					<div class="fileListItem">
						<span class="fileListTitle">
							{{fileListItem.title}}
						</span>
						<span class="fileListInfo">
							<span>{{fileListItem.ownerUserName}}</span>
							<span style="margin-left: 10px">{{fileListItem.date}}</span>
						</span>
					</div>
					<div class="fileListStatus"
					v-bind:style="{color:fileListItem.fileListStatus==1?'#2FABA5':fileListItem.fileListStatus==2?'#FF0000':'#999999'}">
						{{fileListItem.itemStatus}}
					</div>
				</div>
			</div>
		</div>
		<div class="centerContain" 
		v-if="isReviewing" 
		transition="slide-edit-box">
			<div class="contentTitle">
				<div>{{fileListData[curIndex].title}}
					<p style="margin: 0;padding:0;font-size: 16px;" 
					v-bind:style="{color:curStatus=='通过'?'#2FABA5':curStatus=='未通过'?'#FF0000':'#999999'}">
						[{{curStatus}}]
					</p>
				</div>
				<i class="iconfont icon-gengduo-tianchong" style="cursor:pointer;" v-on:click="showDropDown()">
					<ul class="dropDown" v-if="isShowDropDown">
						<li v-on:click="updateStatus(1)">通过</li>
						<li v-on:click="updateStatus(2)">不通过</li>
						<li v-on:click="updateStatus(0)">待定</li>
						<li v-on:click="confirmToDelete()">从列表删除</li>
						<li v-on:click="backToMain()">返回</li>
					</ul>
				</i>
			</div>
			<div class="contentBox">
				<!-- <img src="/static/image/image_tmp.jpg" style="width: 640px;height: 11193px; "> -->
                <content-confirm v-bind:contentData="fileListData[curIndex]"></content-confirm>
			</div>
		</div>
		<div id="rightContain">
			<div class="rightSearchBox">
				<div class="selectPart">
					<span>搜索</span>
				</div>
				<div class="searchPart">
					<input type="text" placeholder="请输入关键字">
					<div class="searchPartBtn">搜 索</div>
				</div>
			</div>
			<div class="situationBox">
				<span class="headTitle">
					<span>部门概况</span>
					<select>
							<option v-bind:value="departItem.index" v-for="departItem in departs" :key="departItem.departName">
								{{departItem.departName}}
							</option>
					</select>
				</span>
				<div class="situationGraph">
					<!-- <iframe src="pie-simple.html" frameborder=0  scrolling="no" border=0   width=100%   height=100% ></iframe> -->
          <pieSimpleVue></pieSimpleVue>
				</div>
			</div>
			<div class="catalogBox">
				<span class="headTitle">更改目录</span>
				<div class="catalogGraph">
					<!-- <iframe src="graph-npm-admin.html" frameborder=0   scrolling="no" border=0   width=100%   height=100% ></iframe> -->
          <graphNpmAdmin></graphNpmAdmin>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pieSimpleVue from './pie-simple'
import graphNpmAdmin from './graph-npm-admin'
import contentConfirm from './contentConfirm'
export default {
  name: "homePageForDepartAdmin",
  data() {
    return {
        username:"",
      departs: [
        {
          index: 0,
          departName: "全部"
        },
        {
          index: 1,
          departName: "财务部"
        },
        {
          index: 2,
          departName: "研发部"
        },
        {
          index: 3,
          departName: "UI部"
        }
      ],
      fileListData: [
        { 
          fileListImage: "/static/image/example1.jpg",
          fileListTitle: "虚拟货币市场主体的规范与指引",
          fileListInfoAuthor: "韩梅梅",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "待审核"
        },
        {
          fileListImage: "/static/image/example2.jpg",
          fileListTitle: "中国货币市场基准利率的确立及其动态",
          fileListInfoAuthor: "李雷",
          fileListInfoTime: "2018/03/27",
          fileListStatus: "通过"
        },
        {
          fileListImage: "/static/image/example3.png",
          fileListTitle: "论我国货币市场与资本市场的协调发展",
          fileListInfoAuthor: "张鹏",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "通过"
        },
        {
          fileListImage: "/static/image/example4.jpg",
          fileListTitle: "货币市场基准利率的性质",
          fileListInfoAuthor: "吴亦凡",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "未通过"
        },
        {
          fileListImage: "/static/image/example5.png",
          fileListTitle: "货币政策工具与货币市场基准利率",
          fileListInfoAuthor: "小明",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "通过"
        },
        {
          fileListImage: "/static/image/example6.jpg",
          fileListTitle: "数字货币的理想与现实",
          fileListInfoAuthor: "币者",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "未通过"
        },
        {
          fileListImage: "/static/image/example7.png",
          fileListTitle: "国际货币基金组织和世界银行上调巴西经济增长预期",
          fileListInfoAuthor: "国际货币基金组织",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "未通过"
        },
        {
          fileListImage: "/static/image/example8.png",
          fileListTitle: "日本2017财年贸易顺差大幅减少",
          fileListInfoAuthor: "日本",
          fileListInfoTime: "2018/03/28",
          fileListStatus: "未通过"
        }
      ],
      isShowDropDown: false,
      isReviewing: false,
      curStatus: "待审核",
      curIndex: 0
    };
  },
  methods: {
      updateStatus:function(status){ 
          var self = this;
          console.log(self.fileListData[self.curIndex].id,status);
          var data = {
              id:self.fileListData[self.curIndex].id,
              status:status,
          }
           $.ajax({  
                url :"http://www.ls1rius.com:8080/updateArticleStatus",   
                cache : true, 
                type : "get",
                xhrFields: {
                    withCredentials: true
                },
                datatype : "json",  
                contentType : "application/json; charset=utf-8",  
                data : data,  
                success : function (data){  
                    console.log(data);
                    alert("更新成功");
                    self.backToMain();
                    self.$data.fileListData.splice(self.curIndex,1);
                    }
                    
                });   
        //   $.ajax({
        //       url:"http://www.ls1rius.com:8080/updateArticlesStatus",
        //       cache:true,
        //       type:'get',
        //       xhrFields:{
        //         withCredentials:true,
        //       },
        //       contentType:"application/json;charset=utf-8",
        //       datatype:'json',
        //       data:data,
        //       success:function(data){
        //           console.log(data);
        //           alert("更新成功");
        //       }
        //   });   
      },
    showDropDown: function() {
      this.isShowDropDown = !this.isShowDropDown;
    },
    startReview: function(index) {
      this.isReviewing = true;      
      this.curIndex = index;
    //   this.curStatus = this.fileListData[this.curIndex].itemStatus;
    //   this.$router.push(
    //       {name:".module.readContent",
    //       params:{
    //         articleInfo:this.fileListData[this.curIndex],
    //         }
    //   });
    //   this.$router.push({ 
	// 			name: '.module.searchPage' ,
	// 			params:{
	// 				str:this.forNormalSearchStr
	// 			}
	// 		})
    },
    backToMain: function() {
      this.isReviewing = false;
      this.fileListData[this.curIndex].fileListStatus = this.curStatus;
    },
    confirmToDelete: function() {
      var confirmBox = confirm(
        "确认将" +
          "'" +
          this.fileListData[this.curIndex].fileListTitle +
          "'" +
          "从审核列表删除吗?"
      );
      if (confirmBox) {
        this.fileListData.splice(this.curIndex, 1);
        this.isReviewing = false;
      }
    },
    get_data:function(){
        var self = this;
        var param = {
            username: this.username,
            start:0,
            cnt:10,
            status:0,
        }
        $.ajax({
            url:"http://www.ls1rius.com:8080/getMySpecificArticles",
            cache:true,
            type:"get",
            xhrFields:{
                withCredentials:true,
            },
            datatype:"json",
            
            contentType:"application/json;charset=utf-8",
            data:param,
            success:function(data){
                self.updateData(data);
            }
        });
    },
    init_data:function(){
        var self = this;
        $.ajax({
            url:"http://www.ls1rius.com:8080/getCurUser",
            cache :true,
            type:'get',
            xhrFields:{
                withCredentials:true,
            },
            datatype : "json",  
			contentType : "application/json; charset=utf-8",  
			data : '',  
			success : function (data){  
                self.username = data.username;
				self.get_data();
			}
        });
    },
    updateData:function(data){
        // var i = 1;
        // for(i;i<this.fileListData.length;++i){
        //     this.fileListData[i].fileListImage = data[i].coverUrl;
        //     this.fileListData[i].fileListTitle = data[i].title;
        //     data[i].data =data[i].date.split("T"); 
        //     this.fileListData[i].fileListInfoTime = data[i].date[0];
        //     switch(data[i].status){
        //         case 0:
        //             this.fileListData[i].fileListStatus = "未通过";
        //             break;
        //         case 1:
        //             this.fileListData[i].fileListStatus = "通过";
        //             break;
        //         case 2:
        //             this.fileListData[i].fileListStatus = "待审核";
        //             break;
        //     }
        //     this.fileListData[i].fileListInfoAuthor = data[i].ownerName;
        // }
        this.fileListData = data;
        var i = 0;
        for(;i<this.fileListData.length;++i){
            this.fileListData[i].date = this.fileListData[i].date.split("T");
            this.fileListData[i].date = this.fileListData[i].date[0];
            if(this.fileListData[i].status == 1){
                this.fileListData[i].itemStatus = "通过";
            }
            if(this.fileListData[i].status == 0){
                this.fileListData[i].itemStatus = "待核审";
            }
            if(this.fileListData[i].status == 2){
                this.fileListData[i].itemStatus = "未通过";
            }
        }
        // for(var key of this.fileListData){
        //     console.log(this.fileListData[key].status);
        //     if(this.fileListData[key].status == 1){
        //         this.fileListData[key].itemStatus = "通过";
        //     }
        //     if(this.fileListData[key].status == 0){
        //         this.fileListData[key].itemStatus = "待核审";
        //     }
        //     if(this.fileListData[key].status == 2){
        //         this.fileListData[key].itemStatus = "未通过";
        //     }
        // }
        console.log(this.fileListData);
    },
    
  },
    created(){
        this.init_data();
    },
  components:{
    pieSimpleVue,
    graphNpmAdmin,
    contentConfirm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* @import "/static/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css"; */


body,
html {
  height: 720px;
}
select,
option {
  font-size: 12px !important;
  color: #000 !important;
}
#insideContain {
  width: 100%;
  overflow: hidden;
  height: 720px;
  margin-left: 130px;
  /*margin-top: 10px;*/
  display: flex;
  flex-wrap: nowrap;
  background-color: #f4f4f4;
}
.centerContain {
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
.centerContain {
  padding: 20px 30px 20px 30px;
}
#rightContain .rightSearchBox {
  width: 100%;
  height: 120px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}
#rightContain .rightSearchBox .selectPart {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
#rightContain .rightSearchBox .searchPart {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
#rightContain .rightSearchBox .selectPart span {
  font-size: 16px;
  color: #000;
  display: block;
  font-weight: bold;
}

#rightContain .rightSearchBox .searchPart input {
  padding-left: 10px;
  width: 80%;
  height: 30px;
  outline: none;
}
#rightContain .rightSearchBox .searchPart .searchPartBtn {
  width: 20%;
  height: 30px;
  background-color: rgb(39,166,155);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.situationBox {
  width: 100%;
  height: 250px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}
#rightContain .headTitle {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #000;
  font-weight: bold;
}
.situationBox .situationGraph {
  width: 100%;
  height: 210px;
}
.catalogBox {
  width: 100%;
  height: 330px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}
.catalogBox .catalogGraph {
  width: 100%;
  height: 290px;
}
.centerContain {
  padding: 20px 30px 20px 30px;
}
.centerContain .headTitle {
  width: 100%;
  height: 50px;
  color: white;
  background-color: rgb(39,166,155);
  /*background: -webkit-linear-gradient(left, #5ec1e4 , #56a9a4); /* Safari 5.1 - 6.0 */
  /*background: -o-linear-gradient(right, #5ec1e4, #56a9a4); /* Opera 11.1 - 12.0 */
  /*background: -moz-linear-gradient(right, #5ec1e4, #56a9a4); /* Firefox 3.6 - 15 */
  /*background: linear-gradient(to right, #5ec1e4 , #56a9a4); /* 标准的语法 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
  font-size: 14px;
}
.centerContain .fileList {
  border: 1px solid #06689f;
  width: 100%;
  height: 630px;
  overflow: auto;
}

.fileListBoxContain {
  width: 100%;
  height: 105px;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
}
.fileListBoxContain {
  border-bottom: 1px solid #06689f;
  display: flex;
  align-items: center;
}
.fileListBoxContain img {
  width: 100px;
  height: 70px;
  border-radius: 10px;
}
.fileListBoxContain .fileListItem {
  width: 100%;
  height: 100%;
  padding-left: 10px;
}
.fileListBoxContain .fileListItem .fileListTitle,
.fileListBoxContain .fileListItem .fileListInfo {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  height: 50%;
  display: flex;
  align-items: center;
}
.fileListBoxContain .fileListItem .fileListTitle {
  font-size: 16px;
  color: #000000;
  font-weight: bold;
}
.fileListBoxContain .fileListItem .fileListInfo {
  font-size: 14px;
  color: #999999;
}
.fileListBoxContain .fileListStatus {
  width: 10%;
  height: 100%;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
}

.centerContain .contentTitle {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 25px;
}
.centerContain .contentTitle div {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  margin-left: 60px;
}
.centerContain .contentTitle i {
  min-width: 60px;
  width: 60px;
  height: 40px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.centerContain .contentTitle .dropDown {
  list-style: none;
  width: 80px;
  min-width: 80px;
  float: left;
  margin: 0;
  padding: 0;
  font-size: 14px;
  position: relative;
}
.centerContain .contentTitle .dropDown li {
  height: 35px;
  font-weight: bold;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
  color: #000;
}
.centerContain .contentTitle .dropDown li:hover {
  background-color: #06689f;
  color: #fff;
}
.centerContain .contentBox {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  border-radius: 5px;
}
.blur {
  width: 325px;
  height: 350px;
  /*background-color: #f1f1f1;*/
  background-color: #999;
  top: 0;
  left: 0;
  /*opacity: 0.5;*/
  position: absolute;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-filter: blur(15px) brightness(110%);
  filter: blur(15px) brightness(110%);
  background-image: var(--bg);
}
.commentBox {
  width: 325px;
  height: 350px;
  /*background: #eee;*/
  /*opacity: 0.5;*/
  position: absolute;
  top: 0px;
  padding: 10px;
  /*border: 1px solid #000;*/
}
.commentBox textarea {
  width: 100%;
  height: 250px;
  display: block;
  outline: none;
  padding: 15px;
  position: relative;
  border: 1px solid #eee;
  border-radius: 5px;
}
.commentBox .title {
  width: 100%;
  height: 30px;
  color: #000;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
}
.commentSubmitBtnBox {
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  padding-left: 50px;
  padding-right: 50px;
  /*background-color: #f1f1f1;*/
  /*background-color: red;*/
}
.commentSubmitBtnBox div {
  position: relative;
  width: 70px;
  height: 30px;
  background-color: #06689f;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
  cursor: pointer;
}
.versionPickBlur {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 666;
  margin: auto;
  background-color: #ccc;
  opacity: 0.5;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-filter: blur(15px) brightness(110%);
  filter: blur(15px) brightness(110%);
  background-image: var(--bg);
}
.versionPick {
  position: absolute;
  margin: auto;
  width: 400px;
  height: 700px;
  z-index: 999;
  top: 10px;
  overflow: auto;
  padding-top: 20px;
  /*border-top: 20px solid #56a9a4;*/
  padding-bottom: 20px;
  background-color: #fff;
  box-shadow: 3px 3px 3px #ccc;
  border-radius: 5px;
}
.versionItem {
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: nowrap;
  cursor: pointer;
}
.versionItem .leftGudie {
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.versionItem .leftGudie .gudieBall {
  position: relative;
  z-index: 666;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #ccc;
  background-color: #fff;
}
.versionItem .leftGudie .gudieBar {
  position: relative;
  width: 4px;
  height: 95px;
  background-color: #ccc;
  left: -10px;
  top: 5px;
  z-index: 555;
}
.rightVersionBox {
  width: 260px;
  height: 100%;
  /*padding-top: 20px;*/
  padding-bottom: 20px;
}

.versionPick .versionItem:hover {
  background-color: #bbdff0;
  /*opacity: 0.5;*/
}
.versionPick .versionItem:first-child .rightVersionBox span:first-child:after {
  content: "(最新)";
  color: red;
  font-size: 16px;
}
.rightVersionBox span {
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  /*align-content: center;*/
  /*align-items: center;*/
  /*align-self: center;*/
}
</style>



<style scoped>

.drop {
  float: right;
}
.message {
  width: 100%;
  height: 50%;
  /*background: lightblue;*/
  overflow: auto;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
}
.message .messageHeadTitle {
  width: 100%;
  min-height: 38.75px;
  padding: 0 15px 0 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999999;
}
.message .messageBoxContain {
  width: 100%;
  /*min-height: 38.75px;*/
  max-height: 72px;
  padding: 10px 15px 10px 15px;
  display: flex;
  /*align-items: center;*/
  border-bottom: 1px solid #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.message .messageHeadTitle {
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-self: center;
}
.message .messageHeadTitle span {
  margin: 0;
  padding: 0;
  display: block;
}
.message .messageHeadTitle .commentBtn {
  color: #06689f;
  font-size: 14px;
  cursor: pointer;
}
.message .messageHeadTitle .commentBtn:hover {
  color: red;
}
.message .messageBoxContain {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.message .messageBoxContain span {
  display: block;
  font-size: 12px;
  /*	height: 16px;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;*/
}
.message .messageBoxContain span i {
  color: #06689f;
}
.message .messageBoxContain .messageContain {
  width: 60%;
  overflow: hidden;
  height: 100%;
}
.message .messageBoxContain .messageTime {
  width: 40%;
  color: #999999;
}
.message .messageBoxContain .messageTime p {
  float: right;
  margin: 0;
  padding: 0;
}
.blur {
  width: 325px;
  height: 350px;
  /*background-color: #f1f1f1;*/
  background-color: #999;
  top: 0;
  left: 0;
  /*opacity: 0.5;*/
  position: absolute;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-filter: blur(15px) brightness(110%);
  filter: blur(15px) brightness(110%);
  background-image: var(--bg);
}
.commentBox {
  width: 325px;
  height: 350px;
  /*background: #eee;*/
  /*opacity: 0.5;*/
  position: absolute;
  top: 0px;
  padding: 10px;
  /*border: 1px solid #000;*/
}
.commentBox textarea {
  width: 100%;
  height: 250px;
  display: block;
  outline: none;
  padding: 15px;
  position: relative;
  border: 1px solid #eee;
  border-radius: 5px;
}
.commentBox .title {
  width: 100%;
  height: 30px;
  color: #000;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
}
.commentSubmitBtnBox {
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  padding-left: 50px;
  padding-right: 50px;
  /*background-color: #f1f1f1;*/
  /*background-color: red;*/
}
.commentSubmitBtnBox div {
  position: relative;
  width: 70px;
  height: 30px;
  background-color: #06689f;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  align-items: center;
  cursor: pointer;
}
.recommendPart {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px;
}
.recommendPart {
  margin-top: 20px;
}
.recommendPart .title {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
.recommendPart .title p {
  margin: 0;
  font-size: 10px;
  color: #ccc;
  margin-left: 10px;
}
.recommendPart .recommendTips {
  width: 100%;
  height: 90px;
  /*border-bottom: 1px solid #ccc;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.recommendPart .recommendTips span {
  border: 1px solid #06689f;
  width: 30%;
  height: 25px;
  margin: 1.6667%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #06689f;
  font-size: 10px;
}

.recommendPart .recommendContain {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  flex-wrap: wrap;
}

.recommendPart .recommendContain .recommendTitle {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
}
.recommendPart .recommendContain .recommendContainInside {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.recommendPart
  .recommendContain
  .recommendContainInside
  .recommendContainTipsBox {
  display: flex;
  align-items: center;
}
.recommendPart .recommendContain .recommendContainInside .recommendContainTips {
  padding: 0 8px 0 8px;
  min-width: 45px;
  height: 20px;
  display: flex;
  justify-content: center;
  background: #06689f;
  color: #ffffff;
  margin-right: 8px;
  align-items: center;
  border-radius: 10px;
  font-size: 10px;
}
.recommendPart
  .recommendContain
  .recommendContainInside
  .recommendContainAuthorInfo {
  display: flex;
  align-items: center;
}
.recommendPart
  .recommendContain
  .recommendContainInside
  .recommendContainAuthorInfo
  span {
  margin-right: 8px;
  font-size: 10px;
  color: #ccc;
}
.avatar {
  display: block;
  cursor: pointer;
}
.pull-right {
  float: right !important;
}
.test {
  font-size: 16px;
}
/* 字体图标 */
@font-face {
  font-family: 'sell-icon';
  src:  url('../assets/fonts/sell-icon.eot?wjk5k2');
  src:  url('../assets/fonts/sell-icon.eot?wjk5k2#iefix') format('embedded-opentype'),
    url('../assets/fonts/sell-icon.ttf?wjk5k2') format('truetype'),
    url('../assets/fonts/sell-icon.woff?wjk5k2') format('woff'),
    url('../assets/fonts/sell-icon.svg?wjk5k2#sell-icon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'sell-icon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gou:before {
  content: "\e900";
}
.icon-zan:before {
  content: "\e901";
  color: #d81e06;
}
.icon-gengduo:before {
  content: "\e1200";
}

@font-face {
  font-family: "my-icon";
  src: url("/static/fonts/my-icon.ttf?k7p3gg") format("truetype"),
    url("/static/fonts/my-icon.woff?k7p3gg") format("woff"),
    url("/static/fonts/my-icon.svg?k7p3gg#my-icon") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "my-icon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ic-follow:before {
  content: "\e900";
}
.ic-backtop:before {
  content: "\e901";
}
.icon-book:before {
  content: "\e902";
}
.icon-LC_icon_share_line_2:before {
  content: "\e903";
}

.icon-heart:before {
  content: "\e908";
}
.icon-good:before {
  content: "\e904";
}
.ic-comment:before {
  content: "\e905";
}
.ic-wechat:before {
  content: "\e906";
}
.ic-wechat {
  color: green;
}
.icon-weibo:before {
  content: "\e907";
}
.icon-Add:before {
  content: "\e900";
}
.icon-arrow-top-o:before {
  content: "\e901";
}
.icon-book:before {
  content: "\e902";
}
.icon-LC_icon_share_line_2:before {
  content: "\e903";
}
.icon-img:before {
  content: "\e90b";
}
.icon-yes:before {
  content: "\e909";
}

.iconfont1 {
  font-family: "sell-icon" !important;
  font-size: inherit;
  font-style: normal;
  font-weight: 400 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfont {
  font-family: "my-icon" !important;
  font-size: inherit;
  font-style: normal;
  font-weight: 400 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* 页面 */
.notecontent {
  width: 100%;
  height: 90%;
  overflow: auto;
}
.note {
  width: 620px;

  margin: 0 auto;
}
/* 标题 */
.tilte {
  word-break: break-word !important;
  word-break: break-all;
  margin: 20px 0 0;
  font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
}
/* 作者信息一栏 */
.author {
  margin: 30px 0 40px;
}

.author .avatar {
  width: 48px;
  height: 48px;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
}

.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}

img {
  vertical-align: middle;
}

.author .name {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: middle;
}
.note .author .meta span {
  padding-right: 5px;
}
.infor {
  vertical-align: middle;
  display: inline-block;
  margin-left: 8px;
}

.infor img.badge-icon {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 0;
  border: 0;
}

/* 关注用户 */

.follow,
.follow-cancel,
.follow-each,
.following {
  padding: 8px 22px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}
/* 已关注 */
.followed {
  border-radius: 40px;
  color: #8c8c8c;
  background-color: #f0f0f0;
  border-color: #f0f0f0;
}
.follow {
  padding: 0 7px 0 5px;
  font-size: 12px;
  border: 1px solid hsla(0, 0%, 59%, 0.6);
  background: none;
}
.btn-success {
  border-radius: 40px;
  color: #fff;
  background-color: #42c02e;
  border-color: #42c02e;
}
.note .meta {
  margin-top: 5px;
  font-size: 12px;
  color: #969696;
}
/* 文章内容 */
.show-content {
  color: #2f2f2f;
  word-break: break-word !important;
  word-break: break-all;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}

.show-content blockquote {
  padding: 20px;
  margin-bottom: 25px;
  background-color: #f7f7f7;
  border-left: 6px solid #b4b4b4;
  word-break: break-word !important;
  word-break: break-all;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}

.show-content p {
  margin: 0 0 25px;
  word-break: break-word !important;
}

.show-content h4 {
  margin: 0 0 15px;
  font-weight: 700;
  color: #2f2f2f;
  line-height: 1.7;
  text-rendering: optimizelegibility;
  font-size: 20px;
}
.show-content .image-package {
  padding-bottom: 25px;
  /* width: 700px;*/
  margin-left: -40px;
  text-align: center;
}
.show-content .image-container {
  z-index: 100;
  position: relative;
  margin: 0 auto;
}
.show-content .image-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 支持作者 */
.support-author {
  min-height: 144px;
  padding: 20px 0;
  text-align: center;
  clear: both;
}
.support-author p {
  padding: 0 30px;
  margin-bottom: 20px;
  min-height: 24px;
  font-size: 17px;
  font-weight: 700;
  color: #969696;
}
.support-author .btn-pay {
  margin-bottom: 20px;
  padding: 8px 25px;
  font-size: 16px;
  color: #fff;
  background-color: #ea6f5a;
  border-radius: 20px;
}
.support-author .supporter {
  height: 50px;
}
.support-author .support-list {
  list-style: none;
  display: inline-block;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 10px;
}
.support-list .avatar {
  width: 40px;
  height: 40px;
}
/* 文章底部 */
.show-foot {
  margin-bottom: 30px;
}
.show-foot .notebook {
  font-size: 12px;
  color: #c8c8c8;
}
.show-foot .copyright {
  float: right;
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.7;
  color: #c8c8c8;
}
.show-foot .modal-wrap {
  float: right;
  margin-top: 5px;
  margin-right: 20px;
  font-size: 12px;
  line-height: 1.7;
}
.show-foot .modal-wrap > a {
  color: #c8c8c8;
}
.follow-detail {
  padding: 20px;
  background-color: hsla(0, 0%, 71%, 0.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 12px;
}
.follow-detail .info {
  min-height: 47px;
}
.follow-detail .avatar {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
}
.follow-detail .btn {
  float: right;
  margin-top: 4px;
  padding: 8px 0;
  width: 100px;
  font-size: 16px;
}
.follow-detail .info .title {
  margin-right: 3px;
  font-size: 17px;
  line-height: 1.8;
  vertical-align: middle;
}
.follow-detail .info img.badge-icon {
  margin-right: 3px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.follow-detail .info p {
  margin-bottom: 0;
  color: #969696;
}
.follow-detail .signature {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  color: #969696;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 喜欢 */
.meta-bottom {
  margin-top: 40px;
  margin-bottom: 80px;
}
.like {
  display: inline-block;
}
.like .like-group {
  position: relative;
  padding: 13px 0 15px 0;
  font-size: 0;
  border: 1px solid #ea6f5a;
  border-radius: 40px;
}
.like .like-group.liked {
  background-color: #ea6f5a;
}
.like .like-group .btn-like {
  display: inline-block;
  font-size: 19px;
}
.like .like-group.liked .btn-like a {
  color: white;
}
.like .like-group.liked .modal-wrap a {
  color: white;
}
/* 喜欢 */
.like .like-group.liked .btn-like::before {
  background-position: -950px center;
}
.like .like-group.liked .modal-wrap {
  border-left: 1px solid white;
}
.like .like-group .btn-like:before {
  content: "";
  position: absolute;
  left: 12px;
  top: 2px;
  width: 50px;
  height: 50px;
  background-image: url("/static/img/like_animation_steps-62a00a7b52377d3069927cdb8e61fd34.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1000px 50px;
}
.like .like-group .btn-like a {
  position: relative;
  padding: 18px 30px 18px 55px;
  color: #ea6f5a;
}
.like .like-group .modal-wrap {
  font-size: 18px;
  border-left: 1px solid rgba(236, 97, 73, 0.4);
  display: inline-block;
  margin-left: -15px;
}
.like .like-group .modal-wrap a {
  color: #ea6f5a;
  padding: 18px 26px 18px 18px;
}
/* 更多分享那几个按钮 */

.meta-bottom .share-group {
  float: right;
  position: relative;
}
.meta-bottom .share-group .share-circle {
  width: 50px;
  height: 50px;
  margin-left: 5px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.meta-bottom .share-group .share-circle i {
  margin-top: 10px;
  font-size: 24px;
  line-height: 2;
}
.meta-bottom .share-group .more-share {
  width: auto;
  padding: 4px 18px;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 40px;
  border-radius: 50px;
}
.share-group .share-list {
  position: absolute;
  right: -24px;
  bottom: 60px;
  box-shadow: 0 0 10px #979797;
}
/* 评论 */
.comment-list {
  padding-top: 20px;
}
.comment-list .new-comment {
  position: relative;
  margin-left: 48px;
}
.comment-list .new-comment {
  position: relative;
  margin-left: 48px;
}
.comment-list .new-comment .avatar {
  position: absolute;
  left: -48px;
}
.comment-list .avatar {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  vertical-align: middle;
  display: inline-block;
}
.comment-list .new-comment textarea {
  padding: 10px 15px;
  width: 100%;
  height: 80px;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}
.comment-list .new-comment .write-function-block {
  height: 50px;
}
.comment-list .new-comment .hint {
  float: left;
  margin: 20px 0 0 20px;
  font-size: 13px;
  color: #969696;
}
.comment-list .new-comment .btn-send {
  float: right;
  width: 78px;
  margin: 10px 0;
  padding: 8px 18px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  color: #fff !important;
  background-color: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
}
.comment-list .new-comment .cancel {
  float: right;
  margin: 18px 30px 0 0;
  font-size: 16px;
  color: #969696;
}
.comment-list .normal-comment-list {
  margin-top: 30px;
}
.normal-comment-list {
  min-height: 200px;
}
.comment-list .top-title {
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  border-bottom: 1px solid #f0f0f0;
}
.comment-list .top-title span {
  vertical-align: middle;
}
.comment-list .tool-group a i {
  margin-right: 5px;
  font-size: 18px;
  vertical-align: middle;
}
.comment-list .normal-comment-list .top-title .author-only {
  margin-left: 10px;
  padding: 4px 8px;
  font-size: 12px;
  color: #969696;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
.comment-list .normal-comment-list .top-title .pull-right a {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #969696;
  display: inline-block;
}
.comment-list .normal-comment-list .top-title .pull-right a.active {
  color: #2f2f2f;
}
.comment-list .comment {
  padding: 20px 0 30px;
  border-bottom: 1px solid #f0f0f0;
}
.comment-list .author {
  margin-bottom: 15px;
}

.v-tooltip-container {
  /* 主评论头像 */
  position: relative;
}
.v-tooltip-container .v-tooltip-content {
  user-select: none;
}

.v-tooltip-container,
.v-tooltip-content {
  display: inline-block;
}
.comment-list .info {
  display: inline-block;
  vertical-align: middle;
}
.comment-list .name {
  font-size: 15px;
  color: #333;
}
.comment-list .badge-icon {
  height: 17px;
  width: 17px;
}
.comment-list .meta {
  font-size: 12px;
  color: #969696;
}
.comment-list .meta span {
  margin-right: 6px;
}
.comment-list .comment p {
  font-size: 16px;
}
/* 主评论like */
.comment-list .tool-group a {
  margin-right: 10px;
  font-size: 0;
  color: #969696;
  display: inline-block;
}
.like-button {
  position: relative;
  padding-left: 23px;
}
.like-button::before {
  content: "";
  position: absolute;
  left: -16px;
  top: -16px;
  width: 50px;
  height: 50px;
  background-image: url("/static/img/zan_animation_steps-8d65a474b670eb6a022516f4e0b8e9a4.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1050px 50px;
}
.comment-list .tool-group a span {
  vertical-align: middle;
  font-size: 14px;
}
/* 次评论 */
.comment-list .sub-comment-list {
  margin-top: 20px;
  padding: 5px 0 5px 20px;
  border-left: 2px solid #d9d9d9;
}
.comment-list .sub-comment {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #f0f0f0;
}
.comment-list .sub-comment-list p {
  margin: 0 0 5px;
  font-size: 14px;
  line-height: 1.5;
}
.comment-list .sub-comment-list a {
  color: #3194d0;
}
.comment-list .sub-tool-group {
  font-size: 12px;
  color: #969696;
}
.comment-list .sub-tool-group a {
  margin-left: 10px;
  color: #969696;
}
.comment-list .sub-tool-group a i {
  margin-right: 5px;
  font-size: 14px;
  vertical-align: middle;
}
.comment-list .sub-tool-group a span {
  vertical-align: middle;
}
/* 每条评论添加新评论 */
.comment-list .sub-comment-list .add-comment-btn {
  color: #969696;
}
.comment-list .sub-comment-list .add-comment-btn i {
  margin-right: 5px;
}
.comment-list .more-comment {
  font-size: 14px;
  color: #969696;
  border: none;
}
.comment-list .sub-comment:last-child {
  margin: 0;
  padding: 0;
  border: none;
}
/* 分页 */
.pagination {
  margin: 20px 0;
  text-align: center;
  display: block;
  /* display: inline-block; */
  padding-left: 0;
  border-radius: 4px;
}
.pagination li {
  margin: 0 5px;
  display: inline-block;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination li:first-child a {
  border-radius: 20px;
}
.pagination .active {
  font-weight: 700;
  border: none;
  pointer-events: none;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857;
  text-decoration: none;
  color: #337ab7;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: -1px;
}
.pagination a {
  font-size: 14px;
  color: #969696 !important;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
}
/* 推荐阅读 */
.note-bottom {
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 40px;
  padding-bottom: 40px;
}
.recommend-note {
  margin-bottom: 20px;
}
.recommend-note .meta,
.recommend-note .list {
  width: 620px;
  margin: 0 auto;
}
/* 推荐阅读标题 */
.recommend-note .meta .title {
  padding-left: 8px;
  border-left: 3px solid #ea6f5a;
  line-height: 1;
  font-size: 15px;
}
.recommend-note .meta .title .more {
  float: right;
  font-size: 14px;
  color: #a0a0a0;
}
/* 推荐阅读内容 */
.recommend-note .list {
  margin-top: 20px;
}
.recommend-note .list .note.have-img {
  min-height: 136px;
}
.recommend-note .list .note {
  display: block;
  margin-bottom: 25px;
  padding: 0 0 25px 0;
  border-bottom: 1px solid #dddddd;
}
.note {
  position: relative;
}
.recommend-note .list .note .cover {
  float: right;
  margin: -5px 0 0 15px;
  width: 150px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
}
.recommend-note .list .note .title {
  display: inherit;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  color: #333333;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommend-note .list .note .description {
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 23px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.recommend-note .list .note .author .avatar {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 3px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: middle;
}
.recommend-note .list .note .author .name {
  font-size: 13px;
  color: #333333;
  vertical-align: middle;
}

/* 右边的操作栏 */
.side-tool {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
}
.side-tool > ul {
  list-style: none;
}
.side-tool > ul > li {
  border: 1px solid #dcdcdc;
  border-bottom: none;
  background-color: #fff;
  transition: 0.1s ease-in;
}
.side-tool > ul .function-button,
.side-tool > ul .js-submit-button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  display: block;
}
.side-tool > ul .function-button i,
.side-tool > ul .js-submit-button i {
  padding-top: 16px;
  font-size: 20px;
  display: block;
}
.side-tool > ul > li:last-child {
  border-bottom: 1px solid #dcdcdc;
}
/* 弹出的分享列表 */

.share-list {
  width: 150px;
  position: fixed;
  bottom: 0;
  right: 110px;
  background: white;
  border: 1px solid #b9b8b8;
  box-shadow: 0px 0px 2px #cccccc;
  border-radius: 4px;
}
.share-list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.share-list li a {
  display: block;
  line-height: 30px;
  padding: 0 10px;
  font-size: 14px;
  text-align: center;
}
.fakebg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.collected {
  color: red !important;
}

/* 微信弹窗 */
.model {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1043;
}
.wechatbox {
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid #c8c8c8;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px #c8c8c8;
}
.closebox {
  padding: 20px;
  padding-bottom: 0;
  text-align: right;
}
h5 {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 10px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  text-align: center;
  font-size: 14px;
  width: 238px;
}
.QRcode {
  text-align: center;
  padding: 20px;
}
</style>