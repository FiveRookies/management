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
				      <!-- <UE  :config=config :id=ue1 ref="ue"></UE> -->
                      <Editor :config=config :id=ue1 ref="Editor"></Editor>
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

        <div class="rightContain" style='position: relative;'>
            <ul class="tree_title">目录</ul>
            <!--<ul id="treeDemo" class="ztree"></ul>-->
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
                        ref="tree"
                        show-checkbox
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
					<button class="btn_type" id="dosomething" style='float: left;width:8%' @click="saveCurStatus()">保存</button>
					
                    <el-upload
					  class="upload-demo"
					  ref="upload"
					  action="http://www.ls1rius.com:8080/upload/singleFile"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  multiple
					  :on-success="handleSuccess"
					  :auto-upload="false"
					  
                      style='width: 19%;display: flex;justify-content: space-around;'>
					  <el-button id="picker"  class="btn_type" style='padding:1px 6px;width:100%;margin-left:10px' slot="trigger" size="small" type="primary">选取文件</el-button>
					  <el-button id="ctlBtn" class="btn_type" style='padding:1px 6px;width:100%;margin-left:10px'  size="small" type="success"  @click="submitUpload">开始上传</el-button>
					 
					</el-upload>
				
					<a style='width:8%;' class='downs'><button id="ctlBtn" style='width:100%;margin-left:10px' @click="down()">开始下载</button></a>
                    <div style="width=10px"></div>
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
  .edui-default .edui-editor{
  	height:488px;
  }
  .el-upload__input{
  	display: none!important;
  }
  .el-upload-list{
  	position: absolute;
    bottom: 0;
    right: 443px;
  }
</style>
<script>
    import Editor from './Editor.vue';
    
    let id = 100;
    export default {
        name: 'newDocument',
        components: {
			Editor,
        },
        data: function () {
            return {
                ownerId : "",
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }
                ],
                value5: [],
		        config: {
		          initialFrameWidth: null,
		          initialFrameHeight: 350
		        },
		        ue1: "ue1", // 不同编辑器必须不同的id
        		fileList: [],
        		onoff:false,
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
                        id: '1',
                        label: '公司制度',
                        children: [
                            {
                                id: '1-1',
                                label: '协同区',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '协作交流'
                                    },
                                    {
                                        id: '1-1-2',
                                        label: '项目管理'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '岗位门户',
                        children: [
                            {
                                id: '2-1',
                                label: '工作流程',
                                children: [
                                    {
                                        id: '2-1-1',
                                        label: '下载中心'
                                    },
                                    {
                                        id: '2-1-2',
                                        label: '培训课件'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '知识地图',
                        children: [
                            {
                                id: '3-1',
                                label: '人事管理',
                                children: [
                                    {
                                        id: '3-1-1',
                                        label: '公司文件'
                                    },
                                    {
                                        id: '3-1-2',
                                        label: '系统使用'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '4',
                        label: '门户应用',
                        children: [
                            {
                                id: '4-1',
                                label: '上传文件',
                                children: [
                                    {
                                        id: '4-1-1',
                                        label: '写日报'
                                    },
                                    {
                                        id: '4-1-2',
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
                },
                arraya:[],
            }
        },
        methods: {
            
            saveCurStatus:function(){
                // console.log(JOSN.stringify(this.data));
                var self = this;
                var result = [];
                console.log(self.ownerId);

                function departTree(data){

                    // console.log(data.children);
                    if(data.children!=null){
                        for(var i=0;i<data.children.length;i++){
                            // console.log(data[i].children[j]);
                            result.push({
                                'id':data.children[i].id,
                                'pid':data.id==null?0:data.id,
                                'label':data.children[i].label,
                                'url':data.children[i].url,
                                'ownerId':self.ownerId
                            });
                            departTree(data.children[i]);
                        }
                    }
                }

                var info = this.data;

                for(var i=0;i<info.length;i++){
                    
                    result.push({
                        'id':info[i].id,
                        'pid':info.id==null?0:info.id,
                        'label':info[i].label,
                        'url':info[i].url,
                        'ownerId':self.ownerId
                    });
                    departTree(info[i]);
                }




                

                $.ajax({  
                url :'http://www.ls1rius.com:8080/clearCatalog',   
                cache : true, 
                type : 'get',
                xhrFields: {
                    withCredentials: true
                },
                datatype : 'json',  
                contentType : 'application/json; charset=utf-8',  
                data : {
                    'ownerId':self.ownerId,
                    'code':'123456'
                    },
                success : function (data){  
                    for(var i=0;i<result.length;i++){
                        $.ajax({  
                            url :'http://www.ls1rius.com:8080/uploadCatalog',   
                            cache : true, 
                            type : 'get',
                            xhrFields: {
                                withCredentials: true
                            },
                            datatype : 'json',  
                            contentType : 'application/json; charset=utf-8',  
                            data : result[i],
                            success : function (data){  
                                console.log(data);
                            }
                        })
                    }
                }
            })

            },

        	jinru:function(){
        		$('.rightContain').css('width','315px')
        		$('#treeDemo').css('width','252px')
        		$('.centerContain').show()
        		$('.wu-example').hide()
        		$('#back').show()
        	},
        	back:function(){
        		$('.rightContain').css('width','1210px')
        		$('#treeDemo').css('width','1148px')
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
            
            submitUpload() {
            	if(this.$refs.tree.getCheckedKeys().length ==0){
            		alert('请选择一个上传的位置！')
            		return;
            	}else{
                    this.$refs.upload.submit();
            	}
		      },
		      down:function(){
		      	console.log(this.$refs.tree.getCheckedNodes())
		      	for(var i=0;i<this.$refs.tree.getCheckedNodes().length;i++){
                    console.log(this.$refs.tree.getCheckedNodes()[i].url);
		      		this.downloadFunc(this.$refs.tree.getCheckedNodes()[i].url);
		      	}
		      },
		      downloadFunc:function(url){
		      	$('.downs').attr('href',url);
		      	$('.downs').attr('download');
                $('.downs').click();
                 
                // window.open(url);
		      },
		      handleRemove(file, fileList) {
		        console.log(fileList);
		      },
		      handlePreview(file) {
		        console.log(file);
		      },
	            handleSuccess(response, file, fileList){
                    var data=this.$refs.tree.getCheckedNodes();
                    var name=data[0];
                    const newChild = { id: name.id+'-1', label: file.name,url:response.url, children: [] };
                    if (!name.children) {
                        this.$set(name, 'children', []);
                    }
                    name.children.push(newChild);
                    this.onoff=true;
                },
            transData:function(a, idStr, pidStr, chindrenStr){    
                var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;    
                for(; i < len; i++){    
                    hash[a[i][id]] = a[i];    
                }    
                for(; j < len; j++){    
                    var aVal = a[j], hashVP = hash[aVal[pid]];    
                    if(hashVP){    
                        !hashVP[children] && (hashVP[children] = []);    
                        hashVP[children].push(aVal);    
                    }else{    
                        r.push(aVal);    
                    }    
                }    
                return r;    
            }
        },
        mounted() {
            
            //将数据库的树状存储转换回树状结构
            var self = this;
             $.ajax({  
                url :'http://www.ls1rius.com:8080/getCurUser',   
                cache : true, 
                type : 'get',
                xhrFields: {
                    withCredentials: true
                },
                datatype : 'json',  
                contentType : 'application/json; charset=utf-8',  
                data : '',
                success : function (data){  
                    console.log(data);
                    // console.log(self.transData(data, 'id', 'pid', 'children'));
                     self.ownerId = data.id;
                    console.log(self.ownerId);
                    $.ajax({  
                        url :'http://www.ls1rius.com:8080/getCatalog',   
                        cache : true, 
                        type : 'get',
                        xhrFields: {
                            withCredentials: true
                        },
                        datatype : 'json',  
                        contentType : 'application/json; charset=utf-8',  
                        data : {'ownerId':parseInt(self.ownerId)},
                        success : function (data){  
                            // console.log(self.transData(data, 'id', 'pid', 'children'));
                            console.log("-------");
                            console.log(data.length);
                            console.log("-------");
                            if(data.length!=0){
                                self.data = self.transData(data, 'id', 'pid', 'children');
                                // self.jinru();
                            }
                                
                }
            })
                }
            })


            
            
        }
    };
</script>

<style scoped>
    body {
        margin: 0;
    }
	.view{
		height:370px;
		
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
        height: 46px;
        display: flex;
       padding-top:3px;
    }

    .title_box span {
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-left: 10px;
        box-sizing: border-box;
    }

    .title_type {
        font-size: 20px;
        height: 25px;
        width: 100%;
    }

    .centerContain {
        box-sizing: border-box;
        width: 855px;
        height: 690px;
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
        float: left;
        /* margin-right:20px; */
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
        width:1210px;
        height: 689px;
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
        width:1148px;
        /*$$$*/
        height: 489px;
        border: 1px solid #999999;
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
       margin-top:31px;
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
    .components-container{
        height: 500px;
        }
    .w-e-text-container{    
        position: relative;
        height: 480px;
    }
    .title_box span{
        width:10%;
    }
</style>
