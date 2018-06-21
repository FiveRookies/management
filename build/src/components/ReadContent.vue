<template>
    <div class="readContent" ref="readContent">
      <!-- 内容 -->
      <div class="topcontent">
        <div class="content">
          <div class="header">
            <div style=""></div>
              <i class="iconfont1 icon-gengduo" style="cursor:pointer;float:right" v-on:click="showDropDown()">
                <ul class="dropDown" v-if="isShowDropDown">
                  <li v-on:click="collectTheArticle()" v-text="isCollect?'取消收藏':'收藏文章'"></li>
                  <li v-on:click="startVersionPick()">切换版本</li>
                  <a href="../static/json/test.docx" target="_blank">下载该文档</a>
                </ul>
              </i>
          </div>
          <div class="notecontent">
            <div class="note">
              <!-- 文章标题 -->
              <h1 class="title">再难也不言苦的天才青年作家、诗人一一笔若</h1>
              <!-- 作者 -->
              <div class="author">
                  <!-- 头像 -->
                  <a class="avatar" href="">
                      <img src="https://upload.jianshu.io/users/upload_avatars/3384404/0839f16b-0afb-4c17-bbe3-7eb4145d6570.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="">
                  </a>
                  <!-- 个人信息 -->
                  <div class="infor">
                      <span class="name">
                          <a href="/u/811ae6268caa">卡兰诺</a>
                      </span>
                      <img class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/1d880fd2-14ce-4622-aacb-e5b588515adf" alt="1d880fd2 14ce 4622 aacb e5b588515adf" data-original-title="简书历史优秀作者">
                      <!-- 关注用户按钮 -->
                      <a class="btn  follow " @click="toggleFollow" :class="[followed?'followed':'btn-success']"><i  :class="[followed?'iconfont1  icon-gou':'iconfont ic-follow']"></i><span>{{followed?'已关注':'关注'}}</span></a>
                      <!-- 文章信息数量 -->
                      <div class="meta"><span>2018.05.29 10:25*</span> <span>字数 2536</span> <span>阅读 41666</span> <span>评论75</span> <span>喜欢 100</span><span>赞赏 1</span></div>
                  </div>
              </div>
              <!-- 文章内容 -->
              <div class="show-content">
                  <blockquote>
                  我们总是以诗般的语言刻画自己在青春的罅隙中的那般狼狈。一一莫言
                  </blockquote>
                  <p>01</p>
                  <p>几天前，我点开简书首页，看见一个笔若约你写诗的专题征集诗稿。我顿时诗兴大发，投了一篇新作、一篇老作，想让笔若过目一下，我写的诗是叫诗吗？</p>
                  <p>二天后，笔若简信给我：嗨！你的第一篇文章可以哦！不失才华之韵唉，愿意笔若与你常联系交流吗？我们都一样，都喜欢文字，真心愿与你互注相拥，笔若向您问好。 </p>
                  <div class="image-package">
                      <div class="image-container" style="max-width: 534px; max-height: 1048px; background-color: transparent;">
                          <div class="image-container-fill" style="padding-bottom: 149.81%;"></div>
                          <div class="image-view" data-width="534" data-height="800">
                              <img data-original-src="//upload-images.jianshu.io/upload_images/3384404-e45408c25901fe81.jpg" data-original-width="534" data-original-height="800" data-original-format="image/jpeg" data-original-filesize="20643" class="" style="cursor: zoom-in;" src="//upload-images.jianshu.io/upload_images/3384404-e45408c25901fe81.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/534">
                          </div>
                      </div>
                  </div>
                  <h4>
                      笔若是个九七后，可是他在诗作上的成就与名气却已是相当非凡。
                  </h4>
                  <p>笔若如今是青星文化传媒有限公司董事长、中国后院读诗协会主席、会长，中国若昕文学诗刊社创始人兼首届理事长、主编，《中国青年新秀作家》主编、青星书艺总监、中国青年作家协会会员，诗中国协会会员，中国网络作家协会会员，博客中国专栏作家、现任《中国后院读诗协会》会长、《若昕文学诗刊社》创始人兼主编、会长，《九天》杂志社副主编、北京洪氏文化发展中心创始委员会成员等等。</p>
              </div>
              <!-- 赞赏和支持那一个框 -->
              <div id="free-reward-panel" class="support-author">
                  <p>小礼物走一走，来简书关注我</p> 
                  <div class="btn btn-pay">赞赏支持</div> 
                  
                  <div class="supporter">
                      <ul class="support-list">
                          <li>
                              <a target="_blank" href="/u/923d31cbdcfe" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3152450/603f1e16-dd0e-4745-896c-3c11948d2ab6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/40/h/40"></a>
                          </li>
                      </ul> 
                  </div>  
              </div>
              <!-- 举报文章 -->
              <div class="show-foot">
                  <a class="notebook" href="/nb/24609866">
                    <i class="iconfont ic-search-notebook"></i>
                    <span>写我所思</span>
                  </a>       
                <div class="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
                    © 著作权归作者所有
                  </div>
                  <div class="modal-wrap" data-report-note="">
                    <a id="report-modal">举报文章</a>
                  </div>
              </div>
              <!-- 文章底部作者信息 -->
              <div class="follow-detail">
                  <div class="info">
                      <a class="avatar" href="/u/811ae6268caa">
                        <img src="//upload.jianshu.io/users/upload_avatars/3384404/0839f16b-0afb-4c17-bbe3-7eb4145d6570.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96">
                      </a>           
                      <a class="btn follow" @click="toggleFollow" :class="[followed?'followed':'btn-success']"><i  :class="[followed?'iconfont1 icon-gou':'iconfont ic-follow']"></i><span>{{followed?'已关注':'关注'}}</span></a>
                      <a class="title" href="/u/811ae6268caa">卡兰诺</a>
                      <img class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/1d880fd2-14ce-4622-aacb-e5b588515adf" alt="1d880fd2 14ce 4622 aacb e5b588515adf" data-original-title="简书历史优秀作者">
                      <p>写了 483365 字，被 87059 人关注，获得了 11200 个喜欢</p>
                    </div>
                    <div class="signature">阳光、个性的我是个人人喜欢的开心果，是个追梦人。向往自由自在的生活，向往做一个旅行作家。

                  我的个人公众号卡兰诺月月

                            微信号15267106787

                  我已加入维权骑士（rightknights.com&nbsp;）进行
                  版权保护。


                  谢绝转载
                  </div>
              </div>
              <!-- 喜欢分享弹窗 -->
              <div class="fakebg" v-if="share" @click="hideShareList"></div>
              <!-- 喜欢分享 -->
              <div class="meta-bottom">
                <div  class="like">
                  <div  class="btn like-group" :class="{liked:liked}" @click="toggleLike">
                    <div  class="btn-like">
                      <a >喜欢</a>
                    </div> 
                    <div  class="modal-wrap">
                      <a >{{likecount}}</a>
                    </div>
                  </div> 
                </div>
                <div class="share-group">
                  <a class="share-circle" @click="openModel" data-action="weixin-share" data-toggle="tooltip" data-original-title="分享到微信">
                    <i class="iconfont ic-wechat"></i>
                  </a>
                  <a class="share-circle" data-action="xinlang-share" data-toggle="tooltip" data-original-title="分享到新浪">
                    <i class="iconfont icon-weibo"></i>
                  </a>
                  <a class="share-circle" data-action="tupian-share" data-toggle="tooltip" data-original-title="分享到图片">
                    <i class="iconfont icon-img"></i>
                  </a>
                  <a @click="moreShareBigbtn" class="share-circle more-share" data-action="weixin-share" data-toggle="tooltip" data-original-title="分享到微信">
                    更多分享
                  </a>
                  <transition name="fade">
                      <div  v-if="share" class="share-list">
                          <ul>
                            <li>
                              <a href="">
                                  分享到微信
                              </a>
                            </li>
                            <li>
                              <a href="">
                                  分享到微博
                              </a>
                            </li>
                            <li>
                              <a href="">
                                  分享到贴吧
                              </a>
                            </li>
                            <li>
                              <a href="">
                                  分享到豆瓣
                              </a>
                            </li>
                            <li>
                              <a href="">
                                  分享到简书
                              </a>
                            </li>
                          </ul>
                      </div>
                  </transition>
                </div>
              </div>
              <!-- 占位符 -->
              <!-- <div style="height:140px"></div> -->
              <!-- 评论 -->
              <div>
                  <div class="comment-list">
                    <!-- 发表评论 -->
                      <div>
                        <form action="" class="new-comment">
                            <a href="" class="avatar">
                              <img src="//upload.jianshu.io/users/upload_avatars/3152450/603f1e16-dd0e-4745-896c-3c11948d2ab6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114">
                            </a>
                            <textarea  @click="showSendBoxOnce" placeholder="写下你的评论..." v-model="commentContent"></textarea>
                            <transition name="fade">
                              <div v-if="showCommentBox" class="write-function-block">
                                <div  class="emoji-modal-wrap">
                                  <a  class="emoji">
                                    <i  class="iconfont ic-comment-emotions"></i>
                                  </a> <!---->
                                </div> 
                                <div class="hint">Ctrl+Enter 发表</div> 
                                <a class="btn btn-send" @click="addComment">发送</a> <a class="cancel" @click="hideCommentBox">取消</a>
                              </div>
                            </transition>
                        </form>
                      </div>
                      <!-- 评论列表 -->
                      <div class="normal-comment-list" ref="subcomment">
                        <div>
                          <!-- 评论排序 -->
                          <div>
                            <div class="top-title">
                                <span>79条评论</span>
                                <a class="author-only">只看作者</a>
                                <a class="close-btn" style="display: none;">关闭评论</a>
                                <div class="pull-right">
                                  <a class="active">按喜欢排序</a>
                                  <a class="">按时间正序</a>
                                  <a class="">按时间倒序</a>
                              </div>
                            </div>
                          </div>
                          <!-- 一条评论 -->
                          <div v-for="(item ,index)  in fakeRecommentList" :key="index">
                            <div   :id="index"   class="comment">
                              <div>
                                <div class="author">
                                  <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                                    <div class="v-tooltip-content">
                                      <a href="/u/923d31cbdcfe" target="_blank" class="avatar">
                                        <img src="//upload.jianshu.io/users/upload_avatars/3152450/603f1e16-dd0e-4745-896c-3c11948d2ab6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114"></a> 
                                    </div> <!---->
                                  </div>
                                  <div class="info">
                                    <a href="/u/923d31cbdcfe" target="_blank" class="name">{{item.name}}</a>
                                    <img src="//upload.jianshu.io/user_badge/22d8d123-271c-4d80-9c59-6990844a9e37" data-toggle="tooltip" data-original-title="简书会员" class="badge-icon">
                                    <div class="meta">
                                      <span>24楼 · {{item.time}}</span>
                                    </div>
                                  </div>
                                </div> 
                                <div class="comment-wrap">
                                  <p>{{item.value}}</p> 
                                  <div class="tool-group">
                                    <a  @click="toggleFollow1" data-v-cdecbe24=""   >
                                      <i :class="[followed1?'like-button':'iconfont1 icon-zan']"></i>
                                      <span data-v-cdecbe24="">{{followed1?'4人赞':'5人赞'}}</span>
                                    </a>
                                    <a class="" @click="toggleCommentBox(index,'')">
                                      <i class="iconfont ic-comment"></i>
                                      <span>回复</span>
                                    </a> 
                                    <a class="report">
                                      <span>举报</span>
                                    </a> 
                                  </div>
                                </div>
                              </div>
                              <div class="sub-comment-list">
                                <div  class="sub-comment" v-for="(item,childindex) in item.sub" :key="childindex" >
                                  <p>
                                    <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                                      <div class="v-tooltip-content">
                                        <a href="/u/811ae6268caa" target="_blank">{{item.name}}</a>：{{item.value}}
                                      </div>     
                                    </div>
                                      <span>
                                        <a href="/users/923d31cbdcfe" class="maleskine-author" target="_blank" data-user-slug="923d31cbdcfe">@{{item.to}}</a> 
                                    </span>
                                  </p>
                                  <div class="sub-tool-group">
                                    <span>{{item.time}}</span>
                                    <a class="" @click="toggleCommentBox(index,item.name)">
                                      <i class="iconfont ic-comment"></i>
                                      <span>回复</span>
                                    </a>
                                    <a class="report">
                                      <span>举报</span>
                                    </a> <!---->
                                  </div>
                                </div>
                                <div class="sub-comment more-comment" @click="toggleCommentBox(index)">
                                  <a class="add-comment-btn">
                                    <i class="iconfont ic-subcomment"></i>
                                    <span>添加新评论</span>
                                  </a> <!----> <!----> <!---->
                                </div> <!---->
                                <transition name="fade">
                                <div v-if="item.recommendBoxShow">
                                  <!-- 更多评论的输入框 -->
                                  <form action="" class="new-comment">
                                      <a href="" class="avatar">
                                        <img src="//upload.jianshu.io/users/upload_avatars/3152450/603f1e16-dd0e-4745-896c-3c11948d2ab6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114">
                                      </a>
                                      <textarea placeholder="写下你的评论..." v-model="item.textareavalue"></textarea>
                                      <div class="write-function-block">
                                        <div  class="emoji-modal-wrap">
                                          <a  class="emoji">
                                            <i  class="iconfont ic-comment-emotions"></i>
                                          </a> <!---->
                                        </div> 
                                        <div class="hint">Ctrl+Enter 发表</div> 
                                        <a @click="addSubComment(index)" class="btn btn-send">发送</a> <a class="cancel">取消</a>
                                      </div>
                                  </form>
                                </div>
                                </transition>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 分页 -->
                      <div>
                        <ul class="pagination" @click="togglePage($event)"><!----> 
                          <li>
                            <a href="javascript:void(null)" data-index=0 :class="{active:active===0}">1</a>
                          </li> 
                          <li>
                            <a data-index=1 :class="{active:active===1}">2</a>
                          </li>
                          <li>
                            <a data-index=2 :class="{active:active===2}">3</a>
                          </li>
                          <li>
                            <a data-index=next>下一页</a>
                          </li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
            <div class="note-bottom">
              <div class="recommend-note">
                <!-- 推荐标题 -->
                <div class="meta">
                  <div class="title">
                      <span>推荐阅读</span> 
                      <a target="_blank" href="/" class="more">
                        更多精彩内容
                        <i class="iconfont ic-link"></i>
                      </a>
                  </div>
                </div>
                <!-- 推荐列表 -->
                <div class="list">
                  <div class="note have-img">
                    <a target="_blank" href="/p/5c4b235e3bf4?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="cover" style="background-image: url(&quot;//upload-images.jianshu.io/upload_images/1714291-b59b0c53cc535d6e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240&quot;);">
                    </a>
                    <a target="_blank" href="/p/5c4b235e3bf4?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="title">被论文毁掉的中国大学生</a>
                    <p class="description">“凌晨两点，我还开着灯，望着满屏幕飞舞跳动的论文。我心里有多苦，我自己多清楚，实在想不出，目录该怎么分，老师又说我的论文结构不完整，我为什么必须要写论文，又为什么要被束缚灵魂，写到天昏地暗，写到头脑发昏……” 上面这段歌词是来自重庆南方翻译学院即将毕业的大四学生李欢创作的歌曲，歌曲名为《不想写论文》。 最近这首歌突然走红网络，在网易云音乐和QQ音乐获得不少评论，诙谐幽默的歌词表达了毕业季还在为论文发愁的学生们真实的心声。 毕业论文算是整个大学“最后一次考试”，不管是本科生、硕士生、还是博士生，要想拿到学位证，完成毕业论文是必不可少的一项任务。 但是写过论文的都知道，不但要想一个好的选题，...</p>
                    <a target="_blank" href="/u/a7e0bdc7c757?utm_campaign=maleskine&amp;utm_content=user&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="author">
                      <div class="avatar" style="background-image: url(&quot;//upload.jianshu.io/users/upload_avatars/1714291/c7ff14f51e1b?imageMogr2/auto-orient/strip|imageView2/1/w/24/h/24&quot;);"></div>
                      <span class="name">黑眼豆豆写字的地方</span>
                    </a>
                  </div>
                  <div class="note">
                    <!-- <a target="_blank" href="/p/5c4b235e3bf4?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="cover" style="background-image: url(&quot;//upload-images.jianshu.io/upload_images/1714291-b59b0c53cc535d6e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240&quot;);"></a> -->
                    <a target="_blank" href="/p/5c4b235e3bf4?utm_campaign=maleskine&amp;utm_content=note&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="title">被论文毁掉的中国大学生</a>
                    <p class="description">“凌晨两点，我还开着灯，望着满屏幕飞舞跳动的论文。我心里有多苦，我自己多清楚，实在想不出，目录该怎么分，老师又说我的论文结构不完整，我为什么必须要写论文，又为什么要被束缚灵魂，写到天昏地暗，写到头脑发昏……” 上面这段歌词是来自重庆南方翻译学院即将毕业的大四学生李欢创作的歌曲，歌曲名为《不想写论文》。 最近这首歌突然走红网络，在网易云音乐和QQ音乐获得不少评论，诙谐幽默的歌词表达了毕业季还在为论文发愁的学生们真实的心声。 毕业论文算是整个大学“最后一次考试”，不管是本科生、硕士生、还是博士生，要想拿到学位证，完成毕业论文是必不可少的一项任务。 但是写过论文的都知道，不但要想一个好的选题，...</p>
                    <a target="_blank" href="/u/a7e0bdc7c757?utm_campaign=maleskine&amp;utm_content=user&amp;utm_medium=pc_all_hots&amp;utm_source=recommendation" class="author">
                      <div class="avatar" style="background-image: url(&quot;//upload.jianshu.io/users/upload_avatars/1714291/c7ff14f51e1b?imageMogr2/auto-orient/strip|imageView2/1/w/24/h/24&quot;);"></div>
                      <span class="name">黑眼豆豆写字的地方</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
             <div class="bottom-content">
       
              <!-- 右侧的操作栏 -->
              <div class="fakebg" v-if="shareList" @click="hideShareList"></div>
              
              <!-- 微信弹窗 有时间抽取成组件-->
              <transition name=fade>
                <aside class="model" v-if="model" @click="closeModel">
                    <div class="wechatbox" @click.stop="stop">
                        <div class="closebox" @click="closeModel">
                          <span >x</span>
                        </div>
                        <h5>
                            打开微信“扫一扫”，打开网页后点击屏幕右上角分享按钮
                        </h5>
                        <div class="QRcode">
                          <!-- 添加你想要的二维码 -->
                          <img src="../assets/img/shoukuan.jpg" alt="">
                        </div>
                    </div>
                </aside>
              </transition>
            </div>
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
        <!-- 右侧栏 -->
        <div class="right-aside">
          <div class="message">
            <div class="messageHeadTitle">
              <span>热门评论区</span>
            </div>

            <div style="width: 100%;height:271.25px;min-height:271.25px;display: flex!important;flex-wrap: wrap;overflow: auto;">
              <div class="messageBoxContain" 
              v-for="(messageItem,index) in messageData" :key="index" @click="tt1(index)">
                <span class="messageContain" 
                v-html="messageItem.messageContain">
                </span>
                <span class="messageTime">
                  <p>{{messageItem.messageTime}}</p>
                </span>
              </div>
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
      <!-- 推荐阅读 -->
      
    </div>
</template>

<script>
import backToTop from "./BackToTop";
//滚动的动画，最好抽取出来单独一个方法吧
function scrollTo(element, to, duration) {
  //简单的缓动动画 ie10+
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  requestAnimationFrame(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
}
export default {
  name: "ReadContent",

  data() {
    return {
      isComment: false,
      isShowDropDown: false,
      shareList: false,
      collected: false,
      showCommentBox: false,
      followed1:true,
      recommendTips: [
        {
          item: "货币型基金"
        },

        {
          item: "海外投资"
        },
        {
          item: "债券市场"
        },
        {
          item: "国际金融"
        },
        {
          item: "比特币"
        },
        {
          item: "大数据"
        }
      ],
      recommendContain: [
        {
          title: "欧洲债务危机的根源是什么？",
          tips: [
            {
              tip: "债务"
            },
            {
              tip: "金融"
            }
          ],
          author: "王小安",
          time: "2018/03/31"
        },
        {
          title: "欧洲债务危机的根源是什么？",
          tips: [
            {
              tip: "债务"
            },
            {
              tip: "金融"
            }
          ],
          author: "王小安",
          time: "2018/03/31"
        },
        {
          title: "欧洲债务危机的根源是什么？",
          tips: [
            {
              tip: "债务"
            },
            {
              tip: "金融"
            }
          ],
          author: "王小安",
          time: "2018/03/31"
        }
      ],
      messageData: [
         {
          messageContain:
            "<i>邓稼先：</i> 励志，人生就该这样才精彩",
          messageTime: "5-30 19:23"
        },
        {
          messageContain: "<i>钱学森：</i>愿您的生活每天幸福快乐。😊",
          messageTime: "5-30 19:51",
        },
       
       {
          messageContain:
            "<i>陈金才：</i> 作者的见解很独特，值得一看 ",
          messageTime: "5-30 19:43"
        },
        
        {
          messageContain:
            "<i>五五开：</i> 马克一下，晚上继续看 ",
          messageTime: "5-31 20:20"
        },
         {
          messageContain:
            "<i>椰果奶茶：</i> 笔若这名字听起来很有诗意 ",
          messageTime: "5-31 20:41"
        },
         
              
      ],
      fakeRecommentList: [
        {
          recommendBoxShow: false,
          textareavalue: "",
          name: "邓稼先",
          value:
            " 励志，人生就该这样才精彩",
          time: " 2018.05.30 19:23",
          sub: [
            {
              name: "赵本山",
              value: " 邓老功德无量",
              time: "2018.05.30 19:35",
              to: "邓稼先"
            }
          ]
        },
        {
          recommendBoxShow: false,
          textareavalue: "",
          name: "钱学森",
          value: "愿您的生活每天幸福快乐。😊",
          time: " 2018.05.30 19:51",
          sub: [
            {
              name: "吴奇隆",
              value: "钱老当为我辈楷模",
              time: " 2018.05.30 19:47",
              to: "钱学森"
            }
          ]
        },
        {
          recommendBoxShow: false,
          textareavalue: "",
          name: "陈金才",
          value: "作者的见解很独特值得一看",
          time: " 2018.05.30 20:23",
          sub: [
            {
              name: "林天",
              value: "我觉得陈金才说的不错",
              time: " 2018.05.30 19:43",
              to: "陈金才"
            }
          ]
        },
        {
          recommendBoxShow: false,
          textareavalue: "",
          name: "五五开",
          value: "马克一下，晚上看",
          time: " 2018.05.31 20:20",
          sub: [
            {
              name: "林天",
              value: "我还是觉得陈金才说的不错，此处",
              time: " 2018.05.31 20:29",
              to: "陈金才"
            }
          ]
        },
        {
          recommendBoxShow: false,
          textareavalue: "",
          name: "椰果奶茶",
          value: "笔若这名字听起来很有诗意",
          time: " 2018.05.31 20:41",
          sub: [
            {
              name: "林天",
              value: "我还是觉得陈金才说的不错，此处再次",
              time: " 2018.05.31 20:49",
              to: "陈金才"
            }
          ]
        }
      ],
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
      liked: false,
      share: false,
      model: false,
      active: 0, //分页,
      likecount: 100, //喜欢的个数
      followed: false,
      commentContent: "",
      isCollect: false,
      isPickingVersion: false,
    };
  },
  beforeCreate() {
    console.log("get article.....");
  },
  mounted() {},
  methods: {
    tt1(index){
    document.getElementById(index).scrollIntoView();  
    },
    //是否显示下拉框
    showDropDown() {
      this.isShowDropDown = !this.isShowDropDown;
    },
    pickVersion (index) {
			var tot = this.versionData.length;
			for (var i = 0; i < tot; i++) {
				this.versionData[i].isCur = false;
			}
			this.curVersion = index;
			this.versionData[this.curVersion].isCur = true;
		},
    cancelVersionPick () {
			this.isPickingVersion = false;
		},
    startVersionPick() {
			this.isPickingVersion = true;
			this.isShowDropDown = false;
		},
    collectTheArticle() {
      if (this.isCollect == false) {
        this.isCollect = true;
        alert("收藏成功");
      } else {
        this.isCollect = false;
        alert("取消收藏");
      }
    },
    //取消评论
    cancelComment() {
      this.isComment = false;
    },
    switchToComment() {
      this.isComment = true;
    },
    //提交评论
    submitComment() {
      var commentText = $(".commentBox textarea").val();
      this.isComment = false;
      this.messageData.push({
        messageContain: this.handleUsrName("沈继涛2号") + commentText,
        messageTime: this.getCurTime()
      });
    },
    // 调出分享列表
    openshare() {
      console.log("openshare...");
      this.shareList = true;
    },
    sayhellow() {
      this.hideShareList();
    },
    hideShareList() {
      this.shareList = false;
      this.share = false;
    },
    //收藏
    toggleCollected() {
      //发送请求到后台收藏，成功再执行下列的方法
      this.collected = !this.collected;
    },
    //显示主要评论输入框
    showSendBoxOnce() {
      this.showCommentBox = true;
    },
    //隐藏主要评论输入框
    hideCommentBox() {
      this.showCommentBox = false;
    },
    //单条评论显示输入框
    toggleCommentBox(index, SomeOne) {
      var targetBox = this.fakeRecommentList[index];
      targetBox.recommendBoxShow = !targetBox.recommendBoxShow;
      targetBox.textareavalue = SomeOne ? "@" + SomeOne : SomeOne;
    },
    //添加大评论
    addComment() {
      this.fakeRecommentList.push({
        recommendBoxShow: false,
        textareavalue: "",
        name: "一只萌新",
        value: this.commentContent,
        time: this.formatDate(new Date()),
        sub: []
      });
      this.commentContent = "";
    },
    //添加小评论
    addSubComment(index) {
      this.fakeRecommentList[index].sub.push({
        name: "一只萌新",
        value: this.fakeRecommentList[index].textareavalue,
        time: this.formatDate(new Date()),
        to: "陈金才"
      });
      this.fakeRecommentList[index].textareavalue = "";
    },
    //格式化时间
    formatDate(date) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let days = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return (
        [year, month, days].map(this.addZero).join(" ") +
        " " +
        [hours, minutes].map(this.addZero).join(" ")
      );
    },
    //不满足两位加零
    addZero(date) {
      let item = date.toString();
      if (item.length < 2) {
        return "0" + date;
      }
      return date;
    },
    // 控制喜欢与否
    toggleLike() {
      //请求到后台成功后回调;
      console.log("liked");
      this.likecount = this.liked ? this.likecount - 1 : this.likecount + 1;
      this.liked = !this.liked;
    },
    //大按钮的分享
    moreShareBigbtn() {
      this.share = true;
    },
    //开启弹窗
    openModel() {
      this.model = true;
    },
    //关闭弹窗
    closeModel() {
      this.model = false;
    },
    //阻止冒泡
    stop() {},
    //分页
    togglePage(event) {
      //  console.log(event.target)
      //分页逻辑
      //请求
      let dom = event.target;
      let index = dom.dataset.index;
      if (!index) {
        return;
      }
      //  dom.get
      if (index === "next") {
        let temp = this.fakeRecommentList;
        this.fakeRecommentList = [];
        setTimeout(() => {
          this.fakeRecommentList = temp;
          this.active++;
          if (this.active > 2) {
            this.active = 2;
          }
          this.backToSubComment();
        }, 500);
        console.log("next ...");
      } else {
        this.active = +index;
        let temp = this.fakeRecommentList;
        this.fakeRecommentList = [];
        setTimeout(() => {
          this.fakeRecommentList = temp;
          this.backToSubComment();
        }, 500);
      }
    },
    backToSubComment() {
      this.$nextTick(() => {
        scrollTo(
          document.documentElement,
          this.$refs.subcomment.offsetTop,
          200
        );
      });
    },
    //关注
    toggleFollow() {
      this.followed = !this.followed;
    },
    //点赞
    toggleFollow1() {
      this.followed1 = !this.followed1;
    }
  },
  components: {
    backToTop
  }
};
</script>

<style scoped>
.relative {
  position: relative;
}

* {
  padding: 0;
  margin: 0;
}

html {
  font-size: 14px;
  height: 100%;
  overflow-y: hidden;
}
from {
  margin: 0 0 20px;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

a {
  cursor: pointer;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a,
a {
  background-color: transparent;
}
p {
  margin: 0 0 10px;
}
.readContent {
  width: 100%;
  height: 100%;
  /*margin-top: 10px;*/
  display: flex;
  flex-wrap: nowrap;
  background-color: #f4f4f4;
}
*,
:after,
:before {
  box-sizing: border-box;
}
li {
  line-height: 20px;
}
.topcontent {
  width: 100%;
  min-width: 700px;
  /*margin-top: 10px;*/
  display: flex;
  flex-wrap: nowrap;
  background-color: #f4f4f4;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  min-width: 700px;
  height: 740px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px 0px 20px;
}
.content .header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 25px;
}
.content .header div {
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
.content .header i {
  min-width: 60px;
  width: 60px;
  height: 40px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.content .header .dropDown {
  list-style: none;
  width: 80px;
  min-width: 80px;
  float: left;
  margin: 0;
  padding: 0;
  font-size: 14px;
  position: relative;
}

.content .header .dropDown li,
.content .header .dropDown a {
  height: 35px;
  font-weight: bold;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 5px;
  color: #000;
}
.content .header .dropDown li:hover,
.content .header .dropDown a:hover {
  background-color: #06689f;
  color: #fff;
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
  left: 50%;
  right: 50%;
  /* margin: auto 0; */
  margin-left: -200px;
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
	top:5px;
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
.versionPick .versionItem:first-child .rightVersionBox span:first-child:after{
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
.right-aside {
  background-color: transparent;
  float: right;
  margin-left: 10px;
  min-width: 325px;
  width: 325px;
  height: 100%;
  /* background-color: #ffffff; */
  border-radius: 10px;
}
.headertitle {
  float: left;
}
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
  color: #`96`9696;
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