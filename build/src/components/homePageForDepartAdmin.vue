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
					<img v-bind:src="fileListItem.fileListImage">
					<div class="fileListItem">
						<span class="fileListTitle">
							{{fileListItem.fileListTitle}}
						</span>
						<span class="fileListInfo">
							<span>{{fileListItem.fileListInfoAuthor}}</span>
							<span style="margin-left: 10px">{{fileListItem.fileListInfoTime}}</span>
						</span>
					</div>
					<div class="fileListStatus"
					v-bind:style="{color:fileListItem.fileListStatus=='通过'?'#2FABA5':fileListItem.fileListStatus=='未通过'?'#FF0000':'#999999'}">
						{{fileListItem.fileListStatus}}
					</div>
				</div>
			</div>
		</div>
		<div class="centerContain" 
		v-if="isReviewing" 
		transition="slide-edit-box">
			<div class="contentTitle">
				<div>{{fileListData[curIndex].fileListTitle}}
					<p style="margin: 0;padding:0;font-size: 16px;" 
					v-bind:style="{color:curStatus=='通过'?'#2FABA5':curStatus=='未通过'?'#FF0000':'#999999'}">
						({{curStatus}})
					</p>
				</div>
				<i class="iconfont icon-gengduo-tianchong" style="cursor:pointer;" v-on:click="showDropDown()">
					<ul class="dropDown" v-if="isShowDropDown">
						<li v-on:click="curStatus='通过'">通过</li>
						<li v-on:click="curStatus='未通过'">不通过</li>
						<li v-on:click="curStatus='待审阅'">待定</li>
						<li v-on:click="confirmToDelete()">从列表删除</li>
						<li v-on:click="backToMain()">返回</li>
					</ul>
				</i>
			</div>
			<div class="contentBox">
				<!-- <img src="/static/image/image_tmp.jpg" style="width: 640px;height: 11193px; "> -->
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
export default {
  name: "homePageForDepartAdmin",
  data() {
    return {
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
      curStatus: "待审阅",
      curIndex: 0
    };
  },
  methods: {
    showDropDown: function() {
      this.isShowDropDown = !this.isShowDropDown;
    },
    startReview: function(index) {
      this.isReviewing = true;
      this.curIndex = index;
      this.curStatus = this.fileListData[this.curIndex].fileListStatus;
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
    }
  },
  components:{
    pieSimpleVue,
    graphNpmAdmin
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
  height: 650px;
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
