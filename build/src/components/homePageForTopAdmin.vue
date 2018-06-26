<template>

    <div id="insideContain" style="margin: 0;">
		<div id="centerContain">
			<div class="title">热词词云</div>
			<div id="wordsCloudGraph"></div>
		</div>
		<div id="rightContain">
			<div class="knowledgePercentPart">
				<div class="titleBar">知识占比</div>
				<div class="knowledgePercentPartGraph">
					<!-- <iframe src="pie-simple.html" frameborder=0  scrolling="no" border=0   width=100%   height=100% ></iframe> -->
    				<pieSimpleVue></pieSimpleVue>
				</div>
			</div>
			<div class="departUpdataSituation">
				<div class="titleBar">部门更新情况</div>
				<div class="departUpdataSituationGraph">
					<!-- <iframe  src="multiple-x-axis.html" frameborder=0 scrolling="no"  border=0   width=100%   height=100% ></iframe> -->
					<multipleXAxis></multipleXAxis>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pieSimpleVue from './pie-simple'
import multipleXAxis from './multiple-x-axis'
import initECharts from '@/assets/js/homePageForTopAdmin'

export default {
	name:'homePageForTopAdmin',
	components:{
		pieSimpleVue,
		multipleXAxis
	},
	mounted(){
		initECharts.initECharts();
	}

}
</script>

<style scoped>
body,html {
	height: 720px;
	margin: 0;
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
	height: 680px;
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
	display: flex;
	align-content: space-between;
	flex-wrap: wrap;
}
#rightContain {
	background-color: transparent;
}
#centerContain {
	padding: 20px 30px 20px 30px;
}
.knowledgePercentPart, .departUpdataSituation {
	width: 100%;
	height: 350px;
	background-color: #ffffff;
	border-radius: 10px;
	padding-left: 20px;
	padding-right: 20px;
}

.departUpdataSituation {
	/*margin-top: 17px;*/
}
.departUpdataSituation .titleBar,
.knowledgePercentPart .titleBar {
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	color: #000;
	font-size: 16px;
	font-weight: bold;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

}
.knowledgePercentPartGraph,.departUpdataSituationGraph {
	width: 100%;
	height: 280px;
}

#centerContain .title{
	width: 100%;
	height: 20px;
	color: #000;
	font-size: 20px;
	font-weight: bold;
	display: flex;
	align-items: center;
}
#wordsCloudGraph {
	width: 100%;
	height: 660px;
	/*background-color: lightgreen;*/
	/*color: transparent;*/
}

</style>


