<template>

    <div id="insideContain" style="margin: 0;">
        <div id="centerContain">
            <div id="statisticsContain">
                <div class="statisticsTopBar">
                    <div class="leftLogoPos">
                        <!-- <i class="iconfont icon-tongji"></i> -->
                        <span>知识统计</span>
                    </div>
                    <div style="width:100%;"></div>
                    <div class="rightChoosePos">
                        <span v-on:click="wordsViewAction" v-bind:class="[wordsViewType]">全部</span>
                        <span v-on:click="dataViewAction" v-bind:class="[dataViewType]">本部门</span>
                    </div>
                </div>
                <div class="statisticsBottomContain">
                    <div class="wordsView" v-if="isWordsView">
                        <!-- 				 				
                                            		 				这里留给学姐写词云
                                            -->
                    </div>
                    <div class="dataView" v-if="isDataView">
                        <div class="dataViewGraph">
                            <keep-alive>
                            <component v-bind:is='currentGraph'></component>
                            </keep-alive>
                            <!-- <iframe v-bind:src="curGraphLink" frameborder=0 scrolling="no" border=0 width=100% height=100%></iframe> -->
                        </div>
                        <div id="dataViewChooseContain">
    
                            <template v-for="(item,index) in items">
                                <div class="dataViewChoose" v-bind:class="{ dataViewChooseShadow: item.isChosen }" v-on:click="graphChange(item.graphLink,index)">
                                    <div class="dataViewChooseIcon" v-bind:style="{background: item.bgc}">
                                        <i class="iconfont" v-bind:class="[item.dataViewChooseIconfont]"></i>
                                    </div>
                                    <div class="dataViewChooseWords">
                                        <span style="font-size: 20px;">{{item.dataNum}}</span>
                                        <span style="font-size: 16px;">{{item.dataName}}</span>
                                    </div>
                                </div>
                            </template>
		 				
		 				</div>
		 			</div>
		 		</div>
		 	</div>
		</div>
		<div id="rightContain">
			<div class="wordsGraphPart">
				<div class="titleBar">热词词云</div>
				<div class="wordsGraph">
					<div id="wordsCloudGraph" width="500px" height="400px"></div> 
				</div>
			</div>
			<div class="contributionRankPart">
				<div class="titleBar">
					贡献排名
					<div class="chooseDepart">
						<span v-bind:style="{color:isAll==true?'red':'#ccc'}" v-on:click="changeDepart('a')">全部</span>
		 				<span v-bind:style="{color:isSelf==true?'red':'#ccc'}" v-on:click="changeDepart('s')">本部门</span>
					</div>
				</div>
				<div class="contributionRank">
					<div class="contributionItem" v-for="item in contributionList">
						<div class="contributionLeftPart">
							<img v-bind:src="item.headImage">
							<span class="contributionName">{{item.rank}}.{{item.name}}</span>
						</div>
						<div class="contributionRightPart">
							<img v-bind:src="starPic" v-for="index in parseInt(item.starNum)">
						</div>
					</div>

				</div>

			</div>

		</div>
	</div>
</template>

<script>
    export default {
        name: 'statistics'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    body,
    html {
        height: 720px;
    }
    
    select,
    option {
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
        width: 325px;
        height: 720px;
        background-color: #ffffff;
        border-radius: 10px;
    }
    
    #statisticsContain {
        width: 100%;
        height: 700px;
        /*background-color: #f1f2f7;*/
        /*background: lightblue;*/
        border-radius: 15px;
    }
    
    #rightContain {
        background-color: transparent;
    }
    
    #centerContain {
        padding: 20px 30px 20px 30px;
    }
    
    .statisticsTopBar {
        width: 100%;
        height: 20px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
    }
    
    .statisticsTopBar .leftLogoPos {
        min-width: 120px;
        font-weight: bold;
        font-size: 16px;
    }
    
    .statisticsTopBar .leftLogoPos i {
        color: #000000;
        font-size: 25px;
    }
    
    .statisticsTopBar .leftLogoPos span {
        color: #000000;
        font-size: 20px;
    }
    
    .statisticsTopBar .rightChoosePos {
        height: 100%;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .statisticsTopBar .rightChoosePos span {
        font-size: 14px;
    }
    
    .statisticsTopBar .rightChoosePos span:hover {
        color: red;
        transition: 0s;
        cursor: pointer;
    }
    
    .statisticsTopBar .rightChoosePos span:before {
        content: " [ ";
        opacity: 0;
        transition: 0.2s;
    }
    
    .statisticsTopBar .rightChoosePos span:after {
        content: " ] ";
        opacity: 0;
        transition: 0.2s;
    }
    
    .statisticsTopBar .rightChoosePos span:hover:before {
        opacity: 1;
    }
    
    .statisticsTopBar .rightChoosePos span:hover:after {
        opacity: 1;
    }
    
    .statisticsBottomContain {
        width: 100%;
        height: 85%;
    }
    
    .wordsView {
        width: 100%;
        height: 100%;
        background: lightblue;
    }
    
    .dataView {
        width: 100%;
        height: 100%;
    }
    
    .rightChoosePosRed {
        color: red;
    }
    
    .rightChoosePosRed:before,
    .rightChoosePosRed:after {
        color: red;
        opacity: 1!important;
    }
    
    .dataViewGraph {
        width: 100%;
        height: 80%;
    }
    
    #dataViewChooseContain {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .dataViewChoose {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        width: 160px;
        height: 60px;
        border-radius: 10px;
    }
    
    .dataViewChoose .dataViewChooseIcon {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    
    .dataViewChoose .dataViewChooseIcon i {
        font-size: 30px;
        color: #ffffff;
    }
    
    .dataViewChooseWords {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 50%;
        height: 100%;
        background: #ffffff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
    .dataViewChooseWords span {
        color: #000000;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        width: 100%;
    }
    
    .dataViewChooseShadow {
        box-shadow: 3px 3px 3px #999999;
    }
    
    #rightContain {
        background-color: transparent;
    }
    
    .wordsGraphPart,
    .contributionRankPart {
        width: 100%;
        height: 350px;
        background-color: #ffffff;
        border-radius: 10px;
        padding: 0 20px 0 20px;
    }
    
    .contributionRankPart {
        margin-top: 20px;
    }
    
    .wordsGraphPart .titleBar,
    .contributionRankPart .titleBar {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        background-color: #ffffff;
    }
    
    .wordsGraph,
    .contributionRank {
        width: 100%;
        height: 280px;
    }
    
    #wordsCloudGraph {
        width: 100%;
        height: 100%;
    }
    
    .contributionLeftPart {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    .contributionItem {
        padding: 0 10px 0 15px;
        width: 100%;
        height: 20%;
        border-top: 1px solid #ccc;
        display: flex;
        align-items: center;
    }
    
    .contributionItem img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }
    
    .contributionName {
        font-size: 12px;
        font-weight: bold;
        margin-left: 15px;
    }
    
    .contributionRightPart {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    .contributionRightPart img {
        width: 15px;
        height: 15px;
    }
    
    .contributionRightPart p {
        margin: 0;
        margin-left: 5px;
        font-size: 12px;
        color: #666;
    }
    
    .contributionRankPart .titleBar {
        justify-content: space-between;
    }
    
    .contributionRankPart .titleBar .chooseDepart {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .contributionRankPart .titleBar .chooseDepart span {
        font-size: 12px;
    }
    
    .contributionRankPart .titleBar .chooseDepart span:hover {
        color: red!important;
        transition: 0s;
        cursor: pointer;
    }
    
    .contributionRankPart .titleBar .chooseDepart span:before {
        content: " [ ";
        opacity: 0;
        transition: 0.2s;
    }
    
    .contributionRankPart .titleBar .chooseDepart span:after {
        content: " ] ";
        opacity: 0;
        transition: 0.2s;
    }
    
    .contributionRankPart .titleBar .chooseDepart span:hover:before {
        opacity: 1;
    }
    
    .contributionRankPart .titleBar .chooseDepart span:hover:after {
        opacity: 1;
    }
</style>

<script>
    import graph1Vue from './components/graph1';
    import graph2Vue from './components/graph2';
    import graph3Vue from './components/graph3';
    import graph4Vue from './components/graph4';
    import $ from "jquery";
    import echarts from 'echarts';
    import wordcloud from 'echarts-wordcloud';
    export default {
        name: 'satistic',
        data() {
            return {
                currentGraph:'graph1Vue',
                isWordsView: false,
                isDataView: true,
                wordsViewType: 'rightChoosePosRed',
                dataViewType: '',
                curGraphLink: 'bar-tick-align_view.html',
                items: [{
                        dataViewChooseIconfont: 'icon-liulan',
                        bgc: "#51b4ac",
                        dataNum: "495",
                        dataName: '浏览量',
                        isChosen: true,
                        
                        graphLink: 'graph1Vue'
                    },
                    {
                        dataViewChooseIconfont: 'icon-download',
                        bgc: "#ef9b92",
                        dataNum: "495",
                        dataName: '下载量',
                        isChosen: false,
                        graphLink: 'graph2Vue'
                    },
                    {
                        dataViewChooseIconfont: 'icon-msnui-love',
                        bgc: "#f3dc8e",
                        dataNum: "495",
                        dataName: '收藏数',
                        isChosen: false,
                        graphLink: 'graph3Vue'
                    },
                    {
                        dataViewChooseIconfont: 'icon-taolun',
                        bgc: "#8bc7c2",
                        dataNum: "495",
                        dataName: '评论数',
                        isChosen: false,
                        graphLink: 'graph4Vue'
                    }
                ],
                starPic: require('./assets/star.png'),
                contributionList: [{
                        headImage: require('./assets/man1.jpg'),
                        rank: 1,
                        name: '瑶瑶欲坠',
                        starNum: 5
                    },
                    {
                        headImage: require('./assets/man2.jpg'),
                        rank: 2,
                        name: '杏仁不见了',
                        starNum: 4
                    },
                    {
                        headImage: require('./assets/man3.jpg'),
                        rank: 3,
                        name: '牛奶与密封',
                        starNum: 4
                    },
                    {
                        headImage: require('./assets/man4.jpg'),
                        rank: 4,
                        name: '南风与鸢尾',
                        starNum: 3
                    },
                    {
                        headImage: require('./assets/man6.jpg'),
                        rank: 5,
                        name: '干瘪的土豆',
                        starNum: 3
                    }
                ],
                isAll: true,
                isSelf: false,
    
    
    
            }
        },
        methods: {
            graphChange:function(graph,index){
                this.currentGraph = graph;
                this.items.forEach(function(item) {
                    item.isChosen = false;
                })
                this.items[index].isChosen = true;
            },
            wordsViewAction: function() {
                // this.isWordsView = true;
                // this.isDataView = false;
                this.wordsViewType = 'rightChoosePosRed';
                this.dataViewType = '';
            },
            dataViewAction: function() {
                // this.isWordsView = false;
                // this.isDataView = true;
                this.wordsViewType = '';
                this.dataViewType = 'rightChoosePosRed';
            },
            pickOneModule: function(index) {
                this.items.forEach(function(item) {
                    item.isChosen = false;
                })
                this.items[index].isChosen = true;
                this.curGraphLink = this.items[index].graphLink;
            },
            changeDepart: function(type) {
                if (type == 'a') {
                    this.isAll = true;
                    this.isSelf = false;
                } else {
                    this.isAll = false;
                    this.isSelf = true;
                }
            },
            searchTheWords: function(word) {
                console.log(word);
                // console.log("123");
            },
            getWordCloud: function() {
                $.getJSON('http://d-star.xyz:8080/getWordCloud?cnt=1000', function(res) {
                    console.log('inGetWord');
                    var wordmap = echarts.init(document.getElementById('wordsCloudGraph'));
                    var words = [];
                    var wordOption = {
                        tooltip: {
                            show: true
                        },
                        series: [{
                            name: '热词词云',
                            type: 'wordCloud',
                            width: '95%',
                            height: '90%',
                            rotationRange: [0, 0],
                            shape: 'circle',
                            data: words
                        }]
                    }
    
                    function createRandomItemStyle() {
                        return {
                            normal: {
                                color: 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')'
                            }
                        };
    
                    }
                    res.forEach(function(item) {
                        console.log("inPushwords");
                        words.push({
    
                            'name': item.word,
                            'value': item.weight,
                            'textStyle': createRandomItemStyle()
                        });
                    });
                    console.log(words);
                    // console.log(option);
                    wordmap.setOption(wordOption);
    
                    function resize() {
                        wordmap.resize();
                    }
                    window.onresize = resize;
                    resize();
                });
            }
        },
        mounted() {
            this.getWordCloud();
        },
        components:{
            graph1Vue,
            graph2Vue,
            graph3Vue,
            graph4Vue,
        }
    }
</script>
