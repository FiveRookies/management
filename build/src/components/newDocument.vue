<template>

    <div class="bodyContain">
        <div class="centerContain">
            <form action="" method="post">
                <div class="title_box">
                    <span>标题：</span>

                    <input class="title_type" type="text" name="title" placeholder="请输入标题..." />
                </div>

                <div class="components-container">
				
				    <div class="editor-container">
				      <UE  :config=config :id=ue1 ref="ue"></UE>
				    </div>
			    </div>
			    
                <div class="btn_group">
                    <input class="btn_type" type="submit" name="submit" value="提交" />
                    <input class="btn_type" type="button" name="saveDraft" value="保存草稿" />
                    <div class="collaborators_box">
                        <ul>协同人员：</ul>

                        <el-select v-model="value5" multiple placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
                    </div>
                    <div class="manager_authority">
                        <ul>权限管理：</ul>
                        <select id="authority">
                            <option>所有人</option>
                            <option>只有你</option>
                            <option>只有我</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>

        <div class="rightContain">
            <ul class="tree_title">目录</ul>

            <div id="treeDemo" class="ztree">
                <el-tree :data="data" 
                        node-key="id" 
                        default-expand-all
                        @node-drag-start="handleDragStart"
                        @node-drag-enter="handleDragEnter"
                        @node-drag-leave="handleDragLeave"
                        @node-drag-over="handleDragOver"
                        @node-drag-end="handleDragEnd"
                        @node-drop="handleDrop"
                        draggable
                        :expand-on-click-node="false"
                        :allow-drop="allowDrop"
                        :allow-drag="allowDrag">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                        <span>{{ node.label }}</span>
                        <span>
                            <span class="btn_mini" @click="() => append(data)"><i class="el-icon-plus"></i></span>
                            <span class="btn_mini" @click="() => edit(node,data)"><i class="el-icon-edit"></i></span>
                            <span class="btn_mini" @click="() => remove(node,data)"><i class="el-icon-delete"></i></span>
                        </span>
                    </span>
                </el-tree>
            </div>
            <div class="ztree_btn_box">
                
                <button class="btn_type" id="back" @click="back()" style='margin:auto;margin-top:26px;display: none;'>返回</button>

                <div id="uploader" class="wu-example">
					<button class="btn_type" id="dosomething" style='float: left;' @click="jinru()">进入编辑</button>
					
					<div id="picker"  class="btn_type" style='margin-left:10px;padding: 1px 6px;'>选择文件</div>
                	<button id="ctlBtn">开始上传</button>
                    
                </div>
            </div>

        </div>
    </div>
</template>
<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .edui-default .edui-editor-bottomContainer table{
  	display: none;
  }
</style>
<script>
	import UE from './ue.vue';
  
    let id = 100;
    export default {
        name: 'newDocument',
        components: {
			UE,
        },
        data: function () {
            return {
            	options: [{
          value: '选项1',
          label: '陈金才'
        }, {
          value: '选项2',
          label: '李豪'
        }, {
          value: '选项3',
          label: '林阳阳'
        }, {
          value: '选项4',
          label: '蛤哈哈'
        }, {
          value: '选项5',
          label: '老王'
        }],
        value5: [],
		        config: {
		          initialFrameWidth: null,
		          initialFrameHeight: 350
		        },
		        ue1: "ue1", // 不同编辑器必须不同的id
        
                setting: {
                    view: {
                        addHoverDom: this.addHoverDom,
                        removeHoverDom: this.removeHoverDom,
                        selectedMulti: false,
                        showIcon: false,
                        showLine: true,
                        fontCss: {
                            'padding-top': '5px',
                            'padding-bottom': '5px'
                        }
                    },
                    edit: {
                        enable: true,
                        editNameSelectAll: true,
                        showRemoveBtn: true,
                        showRenameBtn: true,
                        drag: {
                            isMove: true,
                            prev: true,
                            inner: true,
                            next: true
                        }
                    },
                    data: {
                        simpleData: {
                            enable: true
                        }
                    },
                    callback: {
                        beforeRename: this.beforeRename,
                        beforeDrag: this.beforeDrag,
                        beforeDrop: this.beforeDrop,
                        onClick: this.onClick
                    }
                },
                
                newCount: 1,
                zTreeObj: {},
                data: [
                    {
                        id: 1,
                        label: '公司制度',
                        children: [
                            {
                                id: 1-1,
                                label: '协同区',
                                children: [
                                    {
                                        id: 1-1-1,
                                        label: '协作交流'
                                    },
                                    {
                                        id: 1-1-2,
                                        label: '项目管理'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: '岗位门户',
                        children: [
                            {
                                id: 2-1,
                                label: '工作流程',
                                children: [
                                    {
                                        id: 2-1-1,
                                        label: '下载中心'
                                    },
                                    {
                                        id: 2-1-2,
                                        label: '培训课件'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: '知识地图',
                        children: [
                            {
                                id: 3-1,
                                label: '人事管理',
                                children: [
                                    {
                                        id: 3-1-1,
                                        label: '公司文件'
                                    },
                                    {
                                        id: 3-1-2,
                                        label: '系统使用'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        label: '门户应用',
                        children: [
                            {
                                id: 4-1,
                                label: '上传文件',
                                children: [
                                    {
                                        id: 4-1-1,
                                        label: '写日报'
                                    },
                                    {
                                        id: 4-1-2,
                                        label: '写报告'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
        	jinru:function(){
        		$('.rightContain').css('width','315px')
        		$('#treeDemo').css('width','252px')
        		$('.centerContain').show()
        		$('.wu-example').hide()
        		$('#back').show()
        	},
        	back:function(){
        		$('.rightContain').css('width','403px')
        		$('#treeDemo').css('width','341px')
        		$('.centerContain').hide()
        		$('.wu-example').show()
        		$('#back').hide()
        	},
      
        
            // tree
            // 添加节点
            append(data) {
                console.log(data);
                const name = prompt('请填写节点名称');
                if(name){
                    if(name.trim().length === 0){
                        alert('请填写节点名称');
                        return false;
                    }else{
                        const newChild = { id: id++, label: name, children: [] };
                        if (!data.children) {
                            this.$set(data, 'children', []);
                        }
                        data.children.push(newChild);
                    }
                }else{
                    alert('请填写节点名称');
                    return false;
                }
            },
            // 修改节点
            edit(node, data) {
                console.log(node);
                console.log(data);
                const name = prompt('请填写节点名称',node.label);
                if(name){
                    if(name.trim().length === 0){
                        alert('请填写节点名称');
                        return false;
                    }else{
                        this.$set(data, 'label', name);
                    }
                }else{
                    alert('请填写节点名称');
                    return false;
                }
            },
            // 删除节点
            remove(node, data) {
                if(confirm('确定要删除这个节点吗？')){
                    const parent = node.parent;
                    const children = parent.data.children || parent.data;
                    const index = children.findIndex(d => d.id === data.id);
                    children.splice(index, 1);
                }
            },
            // 节点开始拖拽时触发的事件
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            // 拖拽进入其他节点时触发的事件
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            // 拖拽离开某个节点时触发的事件
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            // 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            // 拖拽结束时（可能未成功）触发的事件(失败成功都会触发)
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            // 拖拽成功完成时触发的事件
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                return type !== 'inner';
                } else {
                return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-1-1') === -1;
            },
            
        },
        mounted() {
            // console.log($.fn);
            console.log("123456789");   
           
            var um = UM.getEditor(' ', {
                initialFrameWidth: 795,
                initialFrameHeight: 340
            });

            um.ready(function(){
                $("#dosomething").click(function () {
                    var treeObj = $.fn.zTree.getZTreeObj("treeDemo")
                    var node = treeObj.getSelectedNodes();
                    //console.log(nodes);
                    if (node.length == 0) {
                        alert("请选择要编辑的项目！");
                    } else {
                        $(".centerContain").show();
                        $("#back").show();
                        $('#uploader').hide();
                        treeObj.getSelectedNodes
                        treeObj.setting.view.addHoverDom = null;
                        treeObj.setting.edit.showRemoveBtn = false;
                        treeObj.setting.edit.showRenameBtn = false;
                        treeObj.setting.edit.drag.isMove = false;
                        treeObj.setting.edit.drag.prev = false;
                        treeObj.setting.edit.drag.inner = false;
                        treeObj.setting.edit.drag.next = false;
                        $('#dosomething').hide();

                    }
                });

                $("#back").click(function () {
                    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
                    $(".centerContain").hide();
                    $("#back").hide();
                    $('#uploader').show();
                    treeObj.getSelectedNodes
                    treeObj.setting.view.addHoverDom = this.addHoverDom;
                    treeObj.setting.edit.showRemoveBtn = true;
                    treeObj.setting.edit.showRenameBtn = true;
                    treeObj.setting.edit.drag.isMove = true;
                    treeObj.setting.edit.drag.prev = true;
                    treeObj.setting.edit.drag.inner = true;
                    treeObj.setting.edit.drag.next = true;
                    $('#dosomething').show();
                });



                //webuploader
                // var $list = $('#thelist'),
                var $btn = $('#ctlBtn');
                var uploader = WebUploader.create({
                    // swf文件路径
                    swf: 'static/ume-utf8-php/lib/webuploader/Uploader.swf',

                    // 文件接收服务端。
                    server: '',

                    // 选择文件的按钮。可选。
                    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                    pick: '#picker',

                    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
                    resize: false
                });

                var name = [];

                // 当有文件被添加进队列的时候
                uploader.on('fileQueued', function (file) {
                    // $list.append( '<div id="' + file.id + '" class="item">' +
                    // 	'<h4 class="info">' + file.name + '</h4>' +
                    // 	'<p class="state">等待上传...</p>' +
                    // '</div>' );
                    name.push(file.name);
                });

                // 文件上传过程中创建进度条实时显示。
                uploader.on('uploadProgress', function (file, percentage) {
                    var $li = $('#' + file.id),
                        $percent = $li.find('.progress .progress-bar');

                    // 避免重复创建
                    if (!$percent.length) {
                        $percent = $('<div class="progress progress-striped active">' +
                            '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                            '</div>' +
                            '</div>').appendTo($li).find('.progress-bar');
                    }

                    $li.find('p.state').text('上传中');

                    $percent.css('width', percentage * 100 + '%');
                });

                uploader.on('uploadSuccess', function (file) {
                    $('#' + file.id).find('p.state').text('已上传');
                });

                uploader.on('uploadError', function (file) {
                    $('#' + file.id).find('p.state').text('上传出错');
                });

                uploader.on('uploadComplete', function (file) {
                    $('#' + file.id).find('.progress').fadeOut();
                });
                //自定义事件
                uploader.onFileQueued = function (file) {
                    // do some things.
                };



                $btn.on('click', function () {
                    uploader.upload();
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    var treeNode = zTree.getSelectedNodes();
                    if (treeNode.length == 0) {
                        alert("请选择要编辑的项目！")
                    } else {
                        //console.log( treeNode[0].id );
                        $.each(name, function (index, val) {
                            //console.log(index, val);
                            zTree.addNodes(treeNode[0], {
                                id: (200 + this.newCount),
                                pId: treeNode[0].pId,
                                name: val
                            }); //***主要语句
                        });
                    }
                });		
            })
            
        }
    };
</script>

<style scoped>
    body {
        margin: 0;
    }

    * {
        box-sizing: content-box;
    }

    .dropdown-menu * {
        box-sizing: border-box;
    }

    .ztree * {
        font-size: 16px;
    }

    .bodyContain {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #f4f4f4;
        padding: 10px;
    }
    /*富文本框*/

    .title_box {
        box-sizing: border-box;
        width: 795px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title_box span {
        font-size: 20px;
        font-weight: 50;
    }

   .title_type {
        font-size: 20px;
        height: 25px;
        border-radius:10px;
        border:1px solid #000;
        box-shadow: 1px 1px 1px #999999;
    }

    .centerContain {
        box-sizing: border-box;
        width: 855px;
        height: 620px;
        padding: 20px 30px 20px 30px;
        background-color: #ffffff;
        border-radius: 10px;
        border: 1px solid #CCCCCC;
        display: none;
    }

    .btn_group {
        box-sizing: border-box;
        width: 795px;
        height: 90px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn_type {
        background-color: rgb(39,166,155);
        box-shadow: 1px 1px 1px #999999;
        width: 100px;
        height: 35px;
        border-radius: 5px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        border: 0px;
    }

    .collaborators_box {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .collaborators_box ul {
        margin: 0 auto;
    }

    .manager_authority ul {
        margin: 0 auto;
    }

    .manager_authority {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /*富文本框*/
    
    /*目录树*/

    .ztree li span.button.add {
        margin-left: 2px;
        margin-right: -1px;
        background-position: -144px 0;
        vertical-align: top;
        *vertical-align: middle;
    }

    .rightContain {
        box-sizing: border-box;
        /*width: 325px;*/
        width:403px;
        height: 620px;
        border: 1px solid #CCCCCC;
        padding: 20px 30px 20px 30px;
        background-color: #ffffff;
        border-radius: 10px;
    }

    #treeDemo {
        box-sizing: border-box;
        display: block;
        overflow: auto;
        /*width: 285px;*/
        width:341px;
        /*$$$*/
        height: 450px;
        border: 1px solid #999999;
        border-radius: 6px
    }

    .tree_title {
        height: 35px;
        margin-top: 0px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }

    .ztree_btn_box {
        box-sizing: border-box;
        /*display: flex;
        justify-content: center;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;*/
        width: 100%;
        height: 80px;
    }
    /*目录树*/
    /*webuploader*/

    #uploader {
        width: 100%;
        height: 80px;
        float: right;
        display: flex;
        /*justify-content: center;*/
        /*justify-content:space-between;*/
        align-items: center;
    }

    #ctlBtn {
        background-color:rgb(39,166,155);
        box-shadow: 1px 1px 1px #999999;
        width: 100px;
        height: 35px;
        border-radius: 5px;
        color: #ffffff;
        line-height: 35px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        border: 0px;
        margin-left:10px;
    }


    /*tree操作摁扭*/
    .custom-tree-node{
        display:flex;
        width:100%;
        padding-right: 10px;
        justify-content:space-between;
        
    }
    .custom-tree-node .btn_mini{
        font-size:12px;
        cursor:pointer;
        display: none;
    }
    .custom-tree-node:hover .btn_mini{
        display: inline-block;;
    }
    .custom-tree-node .btn_mini:hover{
        color:rgb(39,166,155);
    }
</style>

