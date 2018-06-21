<template>
      	<div id="insideContain" style="margin: 0;">
		<div id="centerContain">
			<div class="searchTitleBar">
				<div class="leftLabel">搜索知识</div>
				<div class="rightChoose">
					<span class="bracketsSpan" v-on:click="changeSearchModel('n')" v-bind:style="{color:normalColor}">普通搜索</span>
					<span class="bracketsSpan" v-on:click="changeSearchModel('s')"
					v-bind:style="{color:specificalColor}">高级搜索</span>
				</div>
			</div>
			<div class="searchContain">
				<div class ="normalSearch" v-if="normal">
					<div class="searchLogoShow">
						<i class="iconfont icon-sousuo"></i>
						<p>普通搜索</p>
					</div>
					<div class="searchConditions">
						<span class="bracketsSpan" v-for="(totalType,index) in totalTypeConditions" :key="totalType.index" v-on:click="changeTotalTypeCondition(index)" v-bind:style="{'color':index==pickedTotalTypeConditions?'red':'#ccc'}">{{totalType.item}}</span>
						<div style="width: 3px;
						height: 20px;background-color: #ccc;"></div>
						<span class="bracketsSpan" v-for="(type,index) in typeConditions" :key="type.index" v-on:click="changeTypeCondition(index)" v-bind:style="{'color':index==pickedTypeConditions?'red':'#ccc'}">{{type.item}}</span>
					</div>
					<div class="searchBox">
						<div class="searchBoxContain">
							<input type="text" v-model="searchStr">
							<div class="searchBtn" v-on:click="getSearchResult()">搜 索</div>
						</div>
					</div>
				</div>
				<div class="specificalSearch" v-if="specifical">
					<div class="searchLogoShow">
						<i class="iconfont icon-sousuo"></i>
						<p>高级搜索</p>
					</div>
					<div class="usefulConditionsTitle">
						<i class="iconfont icon-gengduo-2"></i>
						<p>常用条件</p>
					</div>
					<div class="usefulConditions">
						<div class="condition" v-for="usefulConditionItem in usefulConditions" :key="usefulConditionItem.index">
							<div class="conditionDes">{{usefulConditionItem.conditionDes}}</div>
							<div class="conditionInput" >
								<select v-if="usefulConditionItem.haveSelect" >
									<option v-for="(select,selectIndex) in usefulConditionItem.selects" :key="(select,selectIndex).index" value="parseInt(selectIndex)" >{{select.item}}</option>
								</select>
								<input type="text" v-if="usefulConditionItem.haveInput" v-bind:placeholder="usefulConditionItem.hints">
							</div>
						</div>
					</div>
					<div class="otherConditionsTitle">
						<i class="iconfont icon-gengduo-2"></i>
						<p>其他条件</p>
					</div>
					<div class="otherConditions">
						<div class="condition" v-for="otherConditionItem in otherConditions" :key="otherConditionItem.index">
							<div class="conditionDes">{{otherConditionItem.conditionDes}}</div>
							<div class="conditionInput" >
								<select v-if="otherConditionItem.haveSelect" >
									<option v-for="(select,selectIndex) in otherConditionItem.selects" :key="(select,selectIndex).index" value="parseInt(selectIndex)" >{{select.item}}</option>
								</select>
								<input type="text" v-if="otherConditionItem.haveInput" v-bind:placeholder="otherConditionItem.hints">
							</div>
						</div>
					</div>
					<div class="specificalSearchBtn">
						<div class="searchBtn" v-on:click="getSearchResult()">搜索</div>
						<div style="width: 3px;
						height: 20px;background-color: #ccc;"></div>
						<div class="resetBtn" v-on:click="clearAllConditions()">重置</div>
						<div style="width: 3px;
						height: 20px;background-color: #ccc;"></div>
						<div class="cancelBtn" v-on:click="cancelSpecificalSearch()">取消</div>
					</div>
				</div>

				<div class="searchResult" v-if="searchResult">

					<div class="continueSearch">
						<div class="curSrc" >
							<p v-for="curSrc in curSrcs" :key="curSrc.index">{{curSrc.item}}</p>
						</div>
						<div class="searchBox">
							<input type="text" placeholder="请输入内容..." v-model="resultStr">
							<div class="searchBtn" v-on:click="getSearchResult2()">搜 索</div>
						</div>
						<div class="searchResultCount">
							<span>
								印象wiki为您找到相关结果约{{searchResultCount}}个
							</span>

							<div class="filterBox">

								<input type="text" style="width: 400px;height: 100%;margin-right: 20px;" name="reservation" id="reservationtime" class="form-control span4" value="时间不限"/>
								<select>
									<option>类别不限</option>
									<option v-for="financeItem in financeData" :key="financeItem.index">{{financeItem.item}}</option>
								</select>
								<select>
									<option>默认排序</option>
									<option>按点击率</option>
									<option>按收藏量</option>
									<option>按下载量</option>
									<option>按浏览量</option>
								</select>
							</div>
							<i class="iconfont icon-filter" v-on:click="filterTheSearch()">
								<p style="margin: 0;
								padding: 0;
								font-size: 12px;">搜索工具</p>
							</i>
						</div>
					</div>
					<div class="searchResultContain">
						<div class="searchResultContainBox"  v-for="result in searchResults" :key="result.index">
							<div class="searchResultIntro">
								<div class="searchResultTitle">
									{{result.title}}
								</div>
								<img v-bind:src="result.textImage">
								<div class="searchResultIntroWords">

									<div id="mysearchResultIntroWords">
										<span>{{result.text1}}</span>
										<span style="color:red">{{result.keyWords[0].item}}</span>
										<span class="introText2">{{result.text2}}</span>
									</div>
									<div style="display: flex;
									flex-wrap: nowrap;width: 100%;
									height: 14%; align-items: center;">
										<p>关键词:</p>
										<div class="keyWords" >
											
											<i v-for="word in result.keyWords" :key="word.index">{{word.item}}</i>
										</div>
										<div class="readAllBtn">阅读全文</div>
									</div>
								</div>
							</div>
							<div class="searchResultAuthor">
								<div class="infoBox">
									<img v-bind:src="result.authorImage">
									<span>{{result.authorName}}</span>
								</div>
								<div class="infoBox">
									<i class="iconfont icon-xinxi">   {{result.messageCount}}</i>
									<i  class="iconfont icon-msnui-love">   {{result.likeCount}}</i>
								</div>
								<div class="infoBox">
									<i class="iconfont icon-shijian">   {{result.publishTime}}</i>
									<i class="iconfont icon-yonghu1">   {{result.authorName}}</i>
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
		</div>
		<div id="rightContain">
			<div class="hotPart">
				<div class="title">热门知识</div>
				<div class="hotContain" v-for="hotContainItem in hotContainData" :key="hotContainItem.index">
					<div class="containTitle">
						<img v-bind:src="hotContainItem.iconfont">
						<p>{{hotContainItem.title}}</p>
					</div>
					<div class="containStar">
						<img v-bind:src="starImg" v-for="index in parseInt(hotContainItem.starCount)" :key="index.index">
					</div>
				</div>
			</div>
			<div class="recommendPart">
				<div class="title">为您推荐
				<p>以下信息根据您的兴趣推荐</p></div>
				<div class="recommendTips">
					<span v-for="recommendTipItem in recommendTips" :key="recommendTipItem.index">{{recommendTipItem.item}}</span>
				</div>
				<div class="recommendContain" v-for="recommendContainItem in recommendContain" :key="recommendContainItem.index">
					<div class="recommendTitle">{{recommendContainItem.title}}</div>
					<div class="recommendContainInside">
						<div class="recommendContainTipsBox">
							<div class="recommendContainTips" v-for="recommendContainItemTip in recommendContainItem.tips" :key="recommendContainItemTip.index">{{recommendContainItemTip.tip}}</div>
						</div>
						<div class="recommendContainAuthorInfo">
							<span>{{recommendContainItem.author}}</span>
							<span>{{recommendContainItem.time}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  
</template>

<script>
import a from '@/assets/js/searchPage'
import {daterangepicker} from 'daterangepicker'
import 'moment'
require ('../assets/daterangepicker-bs3.css')


export default {
    name:'searchPage',
    data(){
        return{
			searchStr:'',
			resultStr:'',
            recommendTips:[
                    {
                        item:'货币型基金'
                    },
                    {
                        item:'海外投资保险'
                    },
                    {
                        item:'债券市场'
                    },
                    {
                        item:'国际金融'
                    },
                    {
                        item:'比特币'
                    },
                    {
                        item:'大数据'
                    }
                    ],
                    recommendContain:[
                    {
                        title:'欧洲债务危机的根源是什么？',
                        tips:[
                        {
                            tip:'债务'
                        },
                        {
                            tip:'金融'
                        }
                        ],
                        author:'王小安',
                        time:'2018/03/31'
                    },
                    {
                        title:'欧洲债务危机的根源是什么？',
                        tips:[
                        {
                            tip:'债务'
                        },
                        {
                            tip:'金融'
                        }
                        ],
                        author:'王小安',
                        time:'2018/03/31'
                    },
                    {
                        title:'欧洲债务危机的根源是什么？',
                        tips:[
                        {
                            tip:'债务'
                        },
                        {
                            tip:'金融'
                        }
                        ],
                        author:'王小安',
                        time:'2018/03/31'
                    }
                    ],
            starImg:'/static/image/fire.png',
            hotContainData:[
                {
                    iconfont:'/static/image/word.png',
                    title:'刘建伟：3月一线城市商品住宅销售价格同比下降  二三线城市同比涨幅继续回落',
                    starCount:5
                },
                {
                    iconfont:'/static/image/excel.png',
                    title:'增值税改革迈新步 全年将减税4000亿',
                    starCount:4
                },
                {
                    iconfont:'/static/image/pdf.png',
                    title:'北京将放宽六大重点领域的外资准入限制',
                    starCount:4
                },
                {
                    iconfont:'/static/image/ppt.png',
                    title:'躺枪的万科与海淀的码农',
                    starCount:4
                },
                {
                    iconfont:'/static/image/word.png',
                    title:'前FBI局长科米：我有话要说',
                    starCount:4
                },
                {
                    iconfont:'/static/image/word.png',
                    title:'欧盟在世贸组织就美钢铝关税提起磋商请求',
                    starCount:4
                }
            ],
            normal:true,
		specifical:false,
		searchResult:false,
		normalColor : 'red',
		specificalColor :'#999999',
		pickedTotalTypeConditions: 0,
		pickedTypeConditions: 0,
		totalTypeConditions:[
			{item:'内容'},
			{item:'标签'}
		],
		typeConditions:[
			{item:'全部'},
			{item:'文档'},
			{item:'图片'},
			{item:'视频'}
		],
		usefulConditions:[
			{
				conditionDes:'主题',
				haveInput:true,
				haveSelect:false,
				selects:[
					
				],
				hints:'请输入主题'
			},
			{
				conditionDes:'创建人',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入创建人姓名'
			},
			{
				conditionDes:'文档目录',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择文档目录'
			},
			{
				conditionDes:'创建时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择创建时间'
			},
			{
				conditionDes:'创建人部门',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择创建人部门'

			},
			{
				conditionDes:'修改时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择修改时间'
			}
		],
		otherConditions:[
			{
				conditionDes:'编号',
				haveInput:true,
				haveSelect:false,
				selects:[
					
				],
				hints:'请输入编号'
			},
			{
				conditionDes:'显示',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:''
			},
			{
				conditionDes:'所有者',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入所有者姓名'
			},
			{
				conditionDes:'所有者部门',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择所有者部门'
			},
			{
				conditionDes:'所有者分部',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择所有者分部'

			},
			{
				conditionDes:'创建人分部',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择创建人分部'
			},
			{
				conditionDes:'新闻类型',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择修改时间'
			},
			{
				conditionDes:'修改日期',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择修改日期'
			},
			{
				conditionDes:'虚拟目录',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择虚拟目录'
			},
			{
				conditionDes:'关键字',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入关键字'
			},
			{
				conditionDes:'回复文档数',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入回复文档数'
			},
			{
				conditionDes:'状态',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入状态'
			},
			{
				conditionDes:'语言',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择语言信息'
			},
			{
				conditionDes:'最后修改人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入最后修改人'
			},
			
			{
				conditionDes:'归档日期',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择归档日期'
			},
			{
				conditionDes:'归档人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入归档人'
			},
			{
				conditionDes:'审批时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择审批日期'
			},
			{
				conditionDes:'最后审批人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入最后审批人'
			},
			{
				conditionDes:'相关客户',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关客户'
			},
			{
				conditionDes:'相关资产',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关资产'
			},
			{
				conditionDes:'相关人员',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关人员'
			},
			{
				conditionDes:'相关目录',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关目录'
			}
		],
		curSrcs:[
		{
			item:'内容'
		},
		{
			item:'文档'
		}
		],
		searchResultCount:'19,900,000',
		searchResults:[
		// {
		// 	title:'金融产品的个人需求及市场细分',
        //     textImage:'/static/image/01.jpg',
        //     text:'随着我国加入WTO，我国金融发展将不如一个新的历史阶段。根据协议，中国将向外资金融机构全面开放外汇业务\
        //         从定义上来说，期货是在交易所内进行交易的标准化的合约，该合约约定了在未来\
        //         某一个特定的时间（交割日）以确定的价格（期货价格）交易一定数量是在交易所内\
        //         进行交易的标准化的合约，该合约约定了在未来某一个特定的时间（交割日）以确定的价格\
        //         （期货价格）交易一定数量',
        //     keyWords:[
        //     {
        //         item:'金融产品'
        //     },
        //     {
        //         item:'市场细分'
        //     },
        //     {
        //         item:'需求'
        //     },
        //     ],
        //     authorImage:'/static/image/01.jpg',
        //     authorName:'Mr.戚',
        //     messageCount:13,
        //     likeCount:108,
        //     publishTime:'2018/02/31'
        // },
        // {
        //     title:'基于多维尺度分析的个人金融产品差异性',
        //     textImage:'/static/image/02.jpg',
        //     text:'调研个人金融产品，通过问卷调查获取数据,运用多维尺度分析对中国主要商业银行的主打个人金融产品的差异性做出实证分析并提出解决策略。文章得出如下结论:我国商业银行个人金融产品的层次差别并不十分明显,产品或服务从形式到功能上都存在着较大的同质性;个人金融产品主要是单一型产品,缺乏为客户提供多项业务相结合的交叉式或捆绑式服务,不能满足消费者的多元化需求;不同收入的消费人群对个人金融产品的需求不同。',
        //     keyWords:[
        //     {
        //         item:'金融产品'
        //     },
        //     {
        //         item:'商业银行'
        //     },
        //     {
        //         item:'客户'
        //     },
        //     ],
        //     authorImage:'/static/image/02.jpg',
        //     authorName:'证券专家',
        //     messageCount:5,
        //     likeCount:22,
        //     publishTime:'2018/04/12'
        // },
        // {
        //     title:'金融产品创新的经济分析',
        //     textImage:'/static/image/03.jpg',
        //     text:'自二十世纪七十年代以来，金融创新领域的理论研究方兴未艾，但针对金融产品创新的系统研究尚显缺乏，金融产品的创新过程仍然被视作“黑箱”。从货币的产生算起；金融产品出现在人类的经济生活中已经有数千年的历史，这期间不但货币的形态从远古的牲畜演变到现代的电子货币，而且还产生了银行存贷款、保险合约、债券、股票等等基础金融产品，而当代的金融衍生产品创新更是层出不穷。',
        //     keyWords:[
        //     {
        //         item:'金融产品'
        //     },
        //     {
        //         item:'金融创新'
        //     },
        //     ],
        //     authorImage:'/static/image/03.jpg',
        //     authorName:'金融市场部',
        //     messageCount:2,
        //     likeCount:11,
        //     publishTime:'2018/04/13'
        // },
        // {
        //     title:'对我国商业银行金融产品创新的思考',
        //     textImage:'/static/image/04.png',
        //     text:'金融产品创新是商业银行竞争的有力武器，特别是金融格局越来越开放的今天尤显重要,当前金融产品创新中由于观念、制度、内部管理与技术方面的约束，导致产品创新结构失衡、联动性不强等方面的问题，影响了金融产品创新的功能发挥。应当从产品创新机制、基础、保障、环境等方面予以进一步完善。',
        //     keyWords:[
        //     {
        //         item:'金融产品'
        //     },
        //     {
        //         item:'金融创新'
        //     },
        //     {
        //         item:'国内'
        //     }
        //     ],
        //     authorImage:'/static/image/04.png',
        //     authorName:'李华',
        //     messageCount:46,
        //     likeCount:258,
        //     publishTime:'2018/04/14'
        // }
		],
		financeData:[
		{
			item:'图片'
		},
		{
			item:'音频'
		},
		{
			item:'文档'
		}
		]

        }
    },
	methods:{
		changeSearchModel : function(id){
			this.searchResult = false;
			if(id=='n') {
				this.normal = true;
				this.specifical = false;
				this.normalColor = 'red';
				this.specificalColor = '#999999';
			}
			else {
				this.normal = false;
				this.specifical = true;
				this.normalColor = '#999999';
				this.specificalColor = 'red';
				setTimeout(function(){
					$('.usefulConditions .condition:eq(3) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.usefulConditions .condition:eq(5) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(7) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(14) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(16) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
				},1000)
			}
		},
		changeTotalTypeCondition : function(index){
			this.pickedTotalTypeConditions = index;
		},
		changeTypeCondition :function(index){
			this.pickedTypeConditions = index;
		},
		cancelSpecificalSearch : function(){
			this.normal = true;
			this.specifical = false;
			this.normalColor = 'red';
			this.specificalColor = '#999999';
		},
		clearAllConditions : function(){
			var usefulConditions = $('.usefulConditions .condition .conditionInput input');
			var otherConditions = $('.otherConditions .condition .conditionInput input');
			for (var i = 0;i<usefulConditions.length;i++){
				var tmpEle = $('.usefulConditions .condition:eq(' + i + ') .conditionInput input');
				tmpEle.val("");
				// console.log($('.usefulConditions .condition:eq('+ i +') .conditionInput input'));
			}
			for (var i = 0;i<otherConditions.length;i++){
				var tmpEle = $('.otherConditions .condition:eq(' + i + ') .conditionInput input');
				tmpEle.val("");
				// console.log($('.otherConditions .condition:eq('+ i +') .conditionInput input'));
			}
		},
		getSearchResult : function(){
			this.normal = false;
			this.specifical = false;
			this.searchResult = true;
			this.resultStr=this.searchStr;
			this.curSrcs[1]={item:this.resultStr};
            var totPage = 0;
            var vm = this;
			this.$http.get('http://www.ls1rius.com:8080/getSearchArticlesCount', {
				params: {
                      "str": this.resultStr,
                },dataType:'json'
                }).then((data) => {
					console.log(data.body);
                    totPage = data.body;
					vm.$data.searchResultCount = data.body;
                }, (response) => {
                  // error callback
            });
			this.$http.get('http://www.ls1rius.com:8080/searchArticles', {
                params: {
					  'str': this.resultStr,
					  'start':0,
					  'end':4
                },
                dataType:'json'     
                }).then((data) => {
					// console.log(res);
					var self = this;
                    var res = data.body;
                    self.searchResults=[];
					res.forEach(function (item) {
                        console.log(item);
                        var date = item.date.split("T");
						// console.log(item);
						self.searchResults.push({
							
							'title':item.title,
						    'textImage':item.coverUrl,
							'text1':self.$options.methods.indexofStrF(item.content,self.resultStr),
							'text2':self.$options.methods.indexofStrB(item.content,self.resultStr),
						    keyWords:[
						    {
						        item:self.resultStr
						    },
						    {
						        item:'金融创新'
						    },
						    {
						        item:'国内'
						    }
						    ],
						    'authorImage':item.headImage,
						    'authorName':item.ownerName,
						    'messageCount':item.hitCnt,
						    'likeCount':item.likeCnt,
						    'publishTime':date[0],
						});
					});
					setTimeout(function(){
						$(".pagination").createPage({
							totalPage:Math.ceil(totPage/4),
							currPage:1,
							backFn:function(p){
								console.log("回调函数："+p);
									self.$http.get('http://www.ls1rius.com:8080/searchArticles', {
									params: {
										'str': self.resultStr,
										'start':(p-1)*4,
										'cnt':4
									},
									dataType:'json'
									}).then((data) => {
										console.log(res);
										var that = self;
										var res = data.body;
										that.searchResults = [];
										console.log(that.searchResults);
										res.forEach(function (item) {
                                            var date = item.date.split("T");
											// console.log(item);
											that.searchResults.push({
												'title':item.title,
												'textImage':item.coverUrl,
												'text1':self.$options.methods.indexofStrF(item.content,self.resultStr),
												'text2':self.$options.methods.indexofStrB(item.content,self.resultStr),
												keyWords:[
												{
													item:self.resultStr
												},
												{
													item:'金融创新'
												},
												{
													item:'国内'
												}
												],
												'authorImage':item.headImage,
												'authorName':item.ownerName,
												'messageCount':item.hitCnt,
												'likeCount':item.likeCnt,
												'publishTime':date[0],
											});
										});

								});


							}
						})
					},1);
                }, (response) => {
                  // error callback
            });
		    
		    setTimeout(function(){
		    	a.createDataRangePicker();
		    },1000);
		},
		getSearchResult2 : function(){
			this.normal = false;
			this.specifical = false;
			this.searchResult = true;
			// this.resultStr=this.searchStr;
			this.curSrcs[1]={item:this.resultStr};
			var totPage = 0;
			this.$http.get('http://www.ls1rius.com:8080/getSearchArticlesCount', {
				params: {
                      "str": this.resultStr,
                },dataType:'json'
                }).then((data) => {
					console.log(data.body);
					totPage = data.body;
                }, (response) => {
                  // error callback
            });
			this.$http.get('http://www.ls1rius.com:8080/searchArticles', {
                params: {
					  'str': this.resultStr,
					  'start':0,
					  'cnt':4
                },
                dataType:'json'
                }).then((data) => {
					// console.log(res);
                    console.log(data);
					var self = this;
					var res = data.body;
					self.searchResults = [];
					res.forEach(function (item) {
						// console.log(item);
						self.searchResults.push({
							'title':item.title,
						    'textImage':item.coverUrl,
							'text1':self.$options.methods.indexofStrF(item.content,self.resultStr),
							'text2':self.$options.methods.indexofStrB(item.content,self.resultStr),
						    keyWords:[
						    {
						        item:self.resultStr
						    },
						    {
						        item:'金融创新'
						    },
						    {
						        item:'国内'
						    }
						    ],
						    'authorImage':item.headImage,
						    'authorName':item.ownerName,
						    'messageCount':item.hitCnt,
						    'likeCount':item.likeCnt,
						    'publishTime':item.date
						});
					});
					setTimeout(function(){
						$(".pagination").createPage({
							totalPage:Math.ceil(totPage/4),
							currPage:1,
							backFn:function(p){
								console.log("回调函数："+p);

									self.$http.get('http://www.ls1rius.com:8080/searchArticles', {
									params: {
										'str': self.resultStr,
										'start':(p-1)*4,
										'cnt':4
									},
									dataType:'json'
									}).then((data) => {
										console.log(res);
										var that = self;
										var res = data.body;
										that.searchResults = [];
										console.log(that.searchResults);
                                        //str = str.replace(/\s+/g,"");
                                        item.content = item.content.replace(""," ");
										res.forEach(function (item) {
											// console.log(item);
											that.searchResults.push({
												'title':item.title,
												'textImage':item.coverUrl,
												'text1':self.$options.methods.indexofStrF(item.content,self.resultStr),
												'text2':self.$options.methods.indexofStrB(item.content,self.resultStr),
												keyWords:[
												{
													item:self.resultStr
												},
												{
													item:'金融创新'
												},
												{
													item:'国内'
												}
												],
												'authorImage':item.headImage,
												'authorName':item.ownerName,
												'messageCount':item.hitCnt,
												'likeCount':item.likeCnt,
												'publishTime':item.date
											});
										});

								});


							}
						})
					},1);
                }, (response) => {
                  // error callback
            });
		    
		    setTimeout(function(){
		    	a.createDataRangePicker();
		    },1000);
		},
		filterTheSearch :function(){
			if($('.searchResultCount span').css('display')=='flex'){
				$('.searchResultCount span').css({'opacity':'0'});
				setTimeout(function(){
					$('.searchResultCount span').css({'display':'none'});
				},500);
				$('.searchResultCount .filterBox').css({'opacity':'1'});
				setTimeout(function(){
					$('.searchResultCount .filterBox').css({'display':'flex'});
				},500);
			}
			else{
				$('.searchResultCount span').css({'opacity':'1'});
				setTimeout(function(){
					$('.searchResultCount span').css({'display':'flex'});
				},500);
				$('.searchResultCount .filterBox').css({'opacity':'0'});
				setTimeout(function(){
					$('.searchResultCount .filterBox').css({'display':'none'});
				},500);

			}
		},
		indexofStrF :function(content,str){
			// var values = content.split(str);
			// content = values.join('<p style="background:red;">' + str + '</p>');
			var start = content.indexOf(str);
			content = content.substr(start-10,9);
			return content;
		},
		indexofStrB :function(content,str){
			// var values = content.split(str);
			// content = values.join('<p style="background:red;">' + str + '</p>');
			var start = content.indexOf(str);
			content = content.substr(start+str.length,100);
			return content;
		}
	},

	mounted(){
		// a.s1();
		// a.s2();
		this.searchStr=this.$route.params.str;
		// console.log(this.$route.params.str);
    },
    


}
    $(function($) {
        var ms = {
            init: function(totalsubpageTmep, args) {
                return (function() {
                    console.log("argis");
                    console.log(args);
                    ms.fillHtml(totalsubpageTmep, args);
                    ms.bindEvent(totalsubpageTmep, args);
                })();
            },
            //填充html
            fillHtml: function(totalsubpageTmep, args) {
                return (function() {
                    totalsubpageTmep = "<li><a href=\"javascript:void(0);\" class=\"prev geraltTb_pager\">上一页</a></li>";
                    // 页码大于等于4的时候，添加第一个页码元素
                    console.log("curr",args.currPage);
                    if (args.currPage != 1 && args.currPage >= 4 && args.totalPage != 4) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >" + 1 + "</a></li>";
                    }
                    /* 当前页码>4, 并且<=总页码，总页码>5，添加“···”*/
                    if (args.currPage - 2 > 2 && args.currPage <= args.totalPage && args.totalPage > 5) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                    }
    
                    /* 当前页码的前两页 */
                    var start = args.currPage - 2;
                    /* 当前页码的后两页 */
                    var end = args.currPage + 2;
    
                    if ((start > 1 && args.currPage < 4) || args.currPage == 1) {
                        end++;
                    }
                    if (args.currPage > args.totalPage - 4 && args.currPage >= args.totalPage) {
                        start--;
                    }
    
                    for (; start <= end; start++) {
                        console.log(start,args.currPage);
                        if (start == args.currPage) {
                            console.log(123131131313);
                            totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager now' data-go='' >" + start + "</a></li>";
                        } else if (start <= args.totalPage && start >= 1) {
                            totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >" + start + "</a></li>";
                        }
                    }
    
    
                    if (args.currPage + 2 < args.totalPage - 1 && args.currPage >= 1 && args.totalPage > 5) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                    }
    
                    if (args.currPage != args.totalPage && args.currPage < args.totalPage - 2 && args.totalPage != 4) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >" + args.totalPage + "</a></li>";
                    }
                    totalsubpageTmep += "<li><a href=\"javascript:void(0);\" class=\"next geraltTb_pager\">下一页</a></li>";
                    console.log(totalsubpageTmep);
                    $(".pagination").html(totalsubpageTmep);
                })();
            },
            //绑定事件
            bindEvent: function(totalsubpageTmep, args) {
                return (function() {
                    totalsubpageTmep.on("click", "a.geraltTb_pager", function(event) {
                        console.log()
                        var current = parseInt($(this).text());
    
                        // totalsubpageTmep.off("click");
                        //判断是否是点击上一页
    
                        if ($(this).hasClass("prev")) {
                            $('.pagination li a ').each(function(index, value) {
                                if ($('.pagination li a ').eq(index).hasClass("now")) {
                                    console.log(1230);
                                    var num = $('.pagination li a').eq(index).text();
                                    current = parseInt(num) - 1;
                                    return false;
                                } else {
                                    current = 1;
                                }
                            })
                            current = Math.max(current, 1);
                        }
                        //判断是否点击下一页
                        else if ($(this).hasClass("next")) {
                            $('.pagination li a ').each(function(index, value) {
                                if ($('.pagination li a ').eq(index).hasClass("now")) {
                                    var num = $('.pagination li a').eq(index).text();
                                    current = parseInt(num) + 1;
                                    console.log(index);
                                    return false;
                                } else {
                                    current = 1;
                                }
                            })
                            current = Math.min(current, args.totalPage);
                        }
    
                        ms.fillHtml(totalsubpageTmep, {
                            "currPage": current,
                            "totalPage": args.totalPage,
                            "turndown": args.turndown
                        });
                        if (typeof(args.backFn) == "function") {
                            args.backFn(current);
                        }
    
    
    
                    });
                })();
            }
        }
        $.fn.createPage = function(options) {
            ms.init(this, options);
            console.log("s1",this);
        }
    });
</script>

<style>
body,html {
	height: 720px;
	background-color: transparent!important;
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

#centerContain {
	padding: 20px 30px 20px 30px;
}
#rightContain {
	background-color: transparent;
}
#rightContain .hotPart,
#rightContain .recommendPart {
	width: 100%;
	height: 350px;
	border-radius: 10px;
	background-color: #ffffff;
	padding: 20px;
}
#rightContain .recommendPart {
	margin-top: 20px;	
}
#rightContain .hotPart .title,
#rightContain .recommendPart .title {
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #ccc;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 16px;
	color: #000000;
}
#rightContain .recommendPart .title  p {
	margin: 0;
	font-size: 10px;
	color: #ccc;
	margin-left: 10px;
}
#rightContain .recommendPart .recommendTips {
	width: 100%;
	height: 90px;
	/*border-bottom: 1px solid #ccc;*/
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
#rightContain .recommendPart .recommendTips span {
	border: 1px solid rgb(39,166,155);
	width: 30%;
	height: 25px;
	margin:1.6667%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	color: rgb(39,166,155);
	font-size: 10px;
}
#rightContain .recommendPart .recommendContain {
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	border-top: 1px solid #ccc;
	flex-wrap: wrap;
}

#rightContain .recommendPart .recommendContain .recommendTitle {
	width: 100%;
	height: 25px;
	display: flex;
	align-items: center;

}
#rightContain .recommendPart .recommendContain .recommendContainInside {
	width: 100%;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
#rightContain .recommendPart .recommendContain .recommendContainInside .recommendContainTipsBox {
	display: flex;
	align-items: center;
}
#rightContain .recommendPart .recommendContain .recommendContainInside .recommendContainTips {
	padding: 0 8px 0 8px;
	min-width: 45px;
	height: 20px;
	display: flex;
	justify-content: center;
	background: rgb(39,166,155);
	color: #ffffff;
	margin-right: 8px;
	align-items: center;
	border-radius: 10px;
	font-size: 10px;
} 
#rightContain .recommendPart .recommendContain .recommendContainInside .recommendContainAuthorInfo {
	display: flex;
	align-items: center;
}
#rightContain .recommendPart .recommendContain .recommendContainInside .recommendContainAuthorInfo span {
	margin-right: 8px;
	font-size: 10px;
	color: #ccc;
}

#rightContain .hotPart .title {
	border: none;
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
}

#rightContain .hotPart .hotContain .containStar img {
	width: 15px;
	height: 15px;
}

#centerContain .searchTitleBar {
	width: 100%;
	height: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #000000;
	margin-bottom: 40px;
}

#centerContain .searchTitleBar .rightChoose {
	width: 180px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	color: #999999;
}
#centerContain .searchTitleBar .leftLabel {
	font-size: 20px;
	font-weight: bold;
}
#centerContain .bracketsSpan {
	cursor: pointer;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#centerContain .bracketsSpan:before {
	content: "[ ";
	color: red;
	transition: 0.5s;
	opacity: 0;
}
#centerContain .bracketsSpan:after {
	content: " ]";
	color: red;
	transition: 0.5s;
	opacity: 0;
}
#centerContain .bracketsSpan:hover,
#centerContain .bracketsSpan:hover:before,
#centerContain .bracketsSpan:hover:after {
	color: red;
	opacity: 1;
}
.searchContain {
	width: 100%;
	height: 620px;
}
.searchContain .normalSearch {
	/*background-color: lightblue;*/
	width: 100%;
	height: 100%;
}
.searchContain .specificalSearch {
	/*background-color: lightgreen;*/
	width: 100%;
	height: 100%;
}

.searchContain .normalSearch .searchLogoShow {
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.searchContain .normalSearch .searchLogoShow i {
	font-size: 50px;
	color: #cc0000;
}
.searchContain .normalSearch .searchLogoShow p {
	font-size: 50px;
	color: #000000;
	margin: 0;
}
.searchContain .normalSearch .searchConditions {
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ccc;
	padding: 0 20% 0 20%;
}
.searchContain .normalSearch .searchBox {
	width: 100%;
	padding: 0 15% 0 15%;
	height: 50px;
	/*background-color: red;*/
	display: flex;
}
.searchContain .normalSearch .searchBox input {
	outline:none;
	width: 80%;
	height: 50px;
	padding-left: 20px;
}

 .searchContain .normalSearch .searchBox .searchBtn {
	width: 20%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(39,166,155);
	cursor: pointer;
	color: #ffffff;
	font-size: 16px;
}
 .searchContain .normalSearch .searchBox .searchBoxContain {
	width: 100%;
	height: 100%;
	display: flex;
	box-shadow: 1px 1px 5px #cccccc;
}

.searchContain .specificalSearch .searchLogoShow {
	width: 100%;
	height: 60px;
	margin-top: -30px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.searchContain .specificalSearch .searchLogoShow i {
	font-size: 50px;
	color: #cc0000;
}
.searchContain .specificalSearch .searchLogoShow p {
	font-size: 50px;
	color: #000000;
	margin: 0;
}

.usefulConditionsTitle,
.otherConditionsTitle {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
}
.usefulConditionsTitle i,
.otherConditionsTitle i {
	color: #999;
}
.usefulConditionsTitle p,
.otherConditionsTitle p {
	display: block;
	font-size: 16px;
	margin: 0;
	margin-left: 10px;
	color: #999;
}
.usefulConditions {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90px;
	flex-wrap: wrap;
}
.otherConditions {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 330px;
	flex-wrap: wrap;
}
.usefulConditions .condition {
	width: 50%;
	height: 33%;
	border-top: 1px solid #cccccc;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}
.otherConditions .condition {
	width: 50%;
	height: 9.09090909091%;
	border-top: 1px solid #cccccc;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}
.usefulConditions .condition .conditionDes,
.otherConditions .condition .conditionDes{
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #333333;
}

.usefulConditions .condition .conditionInput,
.otherConditions .condition .conditionInput {
	width: 80%;
	height: 100%;
	background-color: green;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	font-size: 14px;
	color: #000000;
	background-color: #f8f8f8;
	padding: 2px 5px 2px 5px;
}
.usefulConditions .condition .conditionInput input,
.otherConditions .condition .conditionInput input {
	width: 100%;
	height: 100%;
	outline: none;
	padding-left: 10px;
}
.usefulConditions .condition .conditionInput  select,
.otherConditions .condition .conditionInput  select {
	margin-right: 10px;
}
.specificalSearchBtn {
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	padding: 15px 40% 0 40%;
	justify-content: space-between;
}
.specificalSearchBtn .searchBtn,
.specificalSearchBtn .resetBtn,
.specificalSearchBtn .cancelBtn{
	color: #4ea2ff;
	cursor: pointer;
	font-size: 14px;
}

.searchResult {
	width: 100%;
	height: 100%;
}
.searchResult .continueSearch {
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.searchResult .continueSearch .curSrc {
	width: 100%;
	height: 20px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	padding-left: 15px;
}
.searchResult .continueSearch .curSrc p {
	margin: 0;
	font-size: 12px;
	color: #999;
	cursor: pointer;
}
.searchResult .continueSearch .curSrc p:hover {
	color: red;
}
.searchResult .continueSearch .curSrc p:before:hover {
	color: #999;
} 
.searchResult .continueSearch .curSrc p:before {
	content: ">";
}
.searchResult .continueSearch .curSrc p:first-child:before {
	content: none;
}
.searchResult .continueSearch .searchBox {
	width: 65%;
	margin-right: 35%;
	height: 40px;
	display: flex;
	align-items: center;
	box-shadow: 1px 1px 5px #ccc;
}
.searchResult .continueSearch .searchBox input {
	width: 83%;
	height: 100%;
	padding-left: 15px;
}
.searchResult .continueSearch .searchBox .searchBtn {
	width: 17%;
	height: 100%;
	background-color: #01A0D6;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: #ffffff;
}
.searchResult .searchResultCount {
	width: 65%;
	height: 22px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color:#ccc;
	font-size: 12px;
	/*padding-left: 15px;*/
	/*padding-right: 15px;*/
	/*background-color: #ffffdf;*/
}
.searchResult .searchResultCount span,
.searchResult .searchResultCount .filterBox {
	width: 83%;
	height: 100%;
	display: flex;
	/*justify-content: center;*/
	align-items: center;
	align-content: center;
	align-self: center;
	transition: 0.5s;
	opacity: 1s;

}
.searchResult .searchResultCount .filterBox  {
	display: none;
	font-size: 12px;
	/*background-color: red;*/
	/*justify-content: space-between;*/
}
.searchResult .searchResultCount .filterBox select {
	margin-right: 20px;
	height: 100%;
}
.searchResult .searchResultCount i {
	cursor: pointer;
	width: 17%;
	display: flex;
	flex-wrap: nowrap;
}
.searchResult .searchResultContain {
	width: 100%;
	height: 450px;
	display: flex;
	/* align-items: center; */
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
	align-content: center;
	/*background-color: red;*/
}
.searchResult .searchResultContain .searchResultContainBox .searchResultIntro img {
	width: 40%;
	height: 70%;
	border-radius: 10px;
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

.searchResultIntroWords {
	width: 60%;
	height: 70%;
	padding: 5px;
	/* display: flex; */
	word-wrap: break-word;
}
#mysearchResultIntroWords {
	/* display: flex; */
	width:100%;
	height:86%;
}
.introText2{
    overflow: hidden;
	display: flex;
	/* width: 100%; */
	width:auto;
	height:80%;
	height: auto;
	font-size: 10px;
	color: #888888;
	display: inline-block;

}
#mysearchResultIntroWords span {
	overflow: hidden;
	display: flex;
	/* width: 100%; */
	width:auto;
	/* height:86%; */
	height: auto;
	font-size: 10px;
	color: #888888;
	display: inline-block;
    white-space: normal;    
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
.searchResultIntroWords .keyWords i:first-child {
	color: red;
}
.searchResultIntroWords .readAllBtn {
	min-width: 55px;
	height: 100%;
	display: flex;
	align-items: center;
	color:  #01A0D6;
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

.pagination-sm li .now{
	background: #56a9a4!important;
}
.now{
	background: #56a9a4!important;
}


</style>


