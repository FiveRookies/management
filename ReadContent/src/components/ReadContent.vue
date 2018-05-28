<template>
  <div id="insideContain">
    <div id="centerContain">
      <div class="contentTitle">
        <div style="">周末啦,带上这几个技巧去拍樱花吧~</div>
        <i class="iconfont icon-gengduo-tianchong" style="cursor:pointer;" v-on:click="showDropDown()">
          <ul class="dropDown" v-if="isShowDropDown">
            <li v-on:click="collectTheArticle()" v-text="isCollect?'取消收藏':'收藏文章'"></li>
            <li v-on:click="startVersionPick()">切换版本</li>
            <a href="/static/json/test.docx" target="_blank">下载该文档</a>
          </ul>
        </i>

      </div>
      <div class="contentBox">
        <h1>周末啦,带上这几个技巧去拍樱花吧~</h1>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        <p>春天繁花盛开，最为吸引人眼球的要数樱花了，看樱花最热门的地方当是武汉。无论是东湖公园的八重垂枝樱、关山樱、云南早樱等樱花中的极品，又或是武汉大学的早樱、晚樱、红垂樱等品种，还是置身其他公园景区的樱花，都把武汉装饰得花枝招展。</p>
        
      </div>
      <div class="versionPickBlur" v-if="isPickingVersion" v-on:click="cancelVersionPick()"></div>
      <div class="versionPick" v-if="isPickingVersion">
        <div class="versionItem"
             v-for="(versionDataItem,index) in versionData"
             v-on:click="pickVersion(index)">
          <div class="leftGudie">
            <div class="gudieBall"
                 v-bind:style="{borderColor:versionDataItem.isCur?'#2a679a':'#ccc'}"></div>
            <div class="gudieBar"
                 v-bind:style="{backgroundColor:versionDataItem.isCur?'#2a679a':'#ccc'}"></div>
          </div>
          <div class="rightVersionBox"
               v-bind:style="{color:versionDataItem.isCur?'#2a679a':'#000'}">
            <span style="font-size: 18px;font-weight: bold;">{{versionDataItem.time}}</span>
            <span style="font-size: 14px;font-weight: thin;">{{versionDataItem.author}}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="rightContain">
      <div class="message">
        <div class="messageHeadTitle">
          <span>知识评论区</span>
          <span class="commentBtn" v-on:click="switchToComment()">评论</span>
        </div>

        <div style="width: 100%;height:271.25px;min-height:271.25px;display: flex!important;flex-wrap: wrap;overflow: auto;">
          <div class="messageBoxContain"
               v-for="messageItem in messageData">
						<span class="messageContain"
                  v-html="messageItem.messageContain">
						</span>
            <span class="messageTime">
							<p>{{messageItem.messageTime}}</p>
						</span>
          </div>
        </div>

      </div>
      <div class="commentBox"
           v-if="isComment">
        <div class="blur"></div>
        <span class="title">评论</span>
        <textarea type="file" placeholder="请输入评论内容...">

				</textarea>
        <div class="commentSubmitBtnBox">
          <div class="cancel" v-on:click="cancelComment()">取消</div>
          <div class="submit" v-on:click="submitComment()">发表</div>
        </div>
      </div>
      <div class="recommendPart">
        <div class="title">关联知识
          <p>以下信息根据您的浏览内容推荐</p></div>
        <div class="recommendTips">
          <span v-for="recommendTipItem in recommendTips">{{recommendTipItem.item}}</span>
        </div>
        <div class="recommendContain" v-for="recommendContainItem in recommendContain">
          <div class="recommendTitle">{{recommendContainItem.title}}</div>
          <div class="recommendContainInside">
            <div class="recommendContainTipsBox">
              <div class="recommendContainTips" v-for="recommendContainItemTip in recommendContainItem.tips">{{recommendContainItemTip.tip}}</div>
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
  export default {
    name: 'ReadContent',
    data() {
      return {
        messageData: [
          {
            messageContain: '<i>故故故故yu：</i> 非常有用，谢谢作者',
            messageTime: '07:23:23'
          },
          {
            messageContain: '<i>一颗柠檬红：</i> 我觉得第二点还是分析的不够透彻，有论点没有论据，东说一点西说一点，完全没有get到重点。这样的文章收藏这么多只能说明我们眼界还是太窄了，看得太少',
            messageTime: '07:40:08'
          },
          {
            messageContain: '<i>奶茶烧仙草：</i> 其实没必要这么较真，都差不多的，网上说的都是大同小异，能总结成这样也不错了',
            messageTime: '07:56:09'
          },
          {
            messageContain: '<i>jgnb：</i> 收藏了',
            messageTime: '08:26:23'
          },
          {
            messageContain: '<i>新石器：</i> 马克一下，晚上继续看',
            messageTime: '10:46:37'
          },
          {
            messageContain: '<i>毛不易：</i> 同事推荐的，我觉得也不错，看看还是对自己的知识水平有提高',
            messageTime: '11:03:21'
          },
          {
            messageContain: '<i>white版：</i> 标题党，都是老生常谈了',
            messageTime: '13:44:47'
          },
          {
            messageContain: '<i>Pokemon：</i> 要是真的像作者说的那样就好了，完全是纸上谈兵',
            messageTime: '15:55:32'
          },
          {
            messageContain: '<i>正电拍拍：</i> 作者见解还是蛮不错的，值得一看',
            messageTime: '15:56:47'
          },
          {
            messageContain: '<i>canjuly：</i> 老旧的看法，换了个壳而已，还行吧，我第一遍是一口气看完，很过瘾，但还是想慢慢看所以下载了，自已看了一下又觉得一般般，没他们说的那么好，其实前面说的确实不错，后面就偷懒了，条例不够清晰，还是不错的，鼓励一下吧',
            messageTime: '17:16:23'
          }
        ],
        recommendTips: [
          {
            item: '货币型基金'
          },
          {
            item: '海外投资保险'
          },
          {
            item: '债券市场'
          },
          {
            item: '国际金融'
          },
          {
            item: '比特币'
          },
          {
            item: '大数据'
          }
        ],
        recommendContain: [
          {
            title: '欧洲债务危机的根源是什么？',
            tips: [
              {
                tip: '债务'
              },
              {
                tip: '金融'
              }
            ],
            author: '王小安',
            time: '2018/03/31'
          },
          {
            title: '欧洲债务危机的根源是什么？',
            tips: [
              {
                tip: '债务'
              },
              {
                tip: '金融'
              }
            ],
            author: '王小安',
            time: '2018/03/31'
          },
          {
            title: '欧洲债务危机的根源是什么？',
            tips: [
              {
                tip: '债务'
              },
              {
                tip: '金融'
              }
            ],
            author: '王小安',
            time: '2018/03/31'
          }
        ],
        isComment: false,
        versionData: [
          {
            time: '2018/03/09 12:00:09',
            author: '沈继涛',
            isCur: true
          },
          {
            time: '2018/03/08 08:10:45',
            author: '张鹏（修改了语法错误）',
            isCur: false
          },
          {
            time: '2018/03/05 15:55:20',
            author: '李雷（上传了新图片）',
            isCur: false
          },
          {
            time: '2018/03/05 12:10:56',
            author: '沈继涛',
            isCur: false
          },
          {
            time: '2018/03/04 22:19:44',
            author: '韩梅梅',
            isCur: false
          },
          {
            time: '2018/03/01 07:05:19',
            author: '沈继涛',
            isCur: false
          },
          {
            time: '2018/02/28 15:22:13',
            author: '韩梅梅（添加了新内容）',
            isCur: false
          },
          {
            time: '2018/02/26 10:56:49',
            author: '吴亦凡',
            isCur: false
          },
          {
            time: '2018/02/23 12:22:09',
            author: '沈继涛',
            isCur: false
          }
        ],
        isPickingVersion: false,
        curVersion: 0,
        isShowDropDown: false,
        isCollect: false
      }
    },
    methods: {
      switchToComment: function () {
        this.isComment = true;
      },
      cancelComment: function () {
        this.isComment = false;
      },
      addZero: function (t) {
        if (t < 10) {
          return '0' + t;
        }
        else {
          return t;
        }
      },
      getCurTime: function () {
        var now = new Date();
        return this.addZero(now.getHours()) + ":" + this.addZero(now.getMinutes()) + ":" + this.addZero(now.getSeconds());
      },
      handleUsrName: function (name) {
        return '<i>' + name + '：</i>';
      },
      submitComment: function () {
        var commentText = $('.commentBox textarea').val();
        this.isComment = false;
        this.messageData.push({
          messageContain: this.handleUsrName('沈继涛2号') + commentText,
          messageTime: this.getCurTime()
        })
      },
      showDropDown: function () {
        this.isShowDropDown = !this.isShowDropDown;
      },
      startVersionPick: function () {
        this.isPickingVersion = true;
        this.isShowDropDown = false;
      },
      cancelVersionPick: function () {
        this.isPickingVersion = false;
      },
      pickVersion: function (index) {
        var tot = this.versionData.length;
        for (var i = 0; i < tot; i++) {
          this.versionData[i].isCur = false;
        }
        this.curVersion = index;
        this.versionData[this.curVersion].isCur = true;
        console.log(this.curVersion);
      },
      collectTheArticle: function () {
        if (this.isCollect == false) {
          this.isCollect = true;
          alert('收藏成功');
        }
        else {
          this.isCollect = false;
          alert('取消收藏');
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #insideContain{width:1100px; margin:0 auto; display:flex; justify-content:space-between; align-items:flex-start}
  #centerContain{flex:1; box-sizing:border-box}
</style>
