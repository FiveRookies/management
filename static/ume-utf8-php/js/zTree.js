/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-28 21:14:07
 * @version $Id$
 */
var zTreeObj;
var zTreeObj1;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting = {
	view: {
		addHoverDom: addHoverDom,
		removeHoverDom: removeHoverDom,
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
		beforeRename: beforeRename,
		beforeDrag: beforeDrag,
		beforeDrop: beforeDrop,
		onClick: onClick
	}
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [

	{ id: 1, pId: 0, name: "公司制度" },
	{ id: 11, pId: 1, name: "协同区" },
	{ id: 111, pId: 11, name: "协作交流" },
	{ id: 112, pId: 11, name: "项目管理" },
	{ id: 2, pId: 0, name: "岗位门户" },
	{ id: 21, pId: 2, name: "工作流程" },
	{ id: 211, pId: 21, name: "下载中心" },
	{ id: 212, pId: 21, name: "培训课件" },
	{ id: 3, pId: 0, name: "知识地图" },
	{ id: 31, pId: 3, name: "人事管理" },
	{ id: 311, pId: 31, name: "公司文件" },
	{ id: 312, pId: 31, name: "系统使用" },
	{ id: 4, pId: 0, name: "门户应用" },
	{ id: 41, pId: 4, name: "上传文件" },
	{ id: 411, pId: 41, name: "写日报" },
	{ id: 412, pId: 41, name: "写报告" },
];
//重命名
function beforeRename(treeId, treeNode, newName) {
	if (!newName) {  
		alert('The name can not be empty!');  
		return false;
	}
}


//拖拽
function beforeDrag(treeId, treeNodes) {
	for (var i = 0, l = treeNodes.length; i < l; i++) {
		if (treeNodes[i].drag === false) {
			return false;
		}
	}
	return true;
}

function beforeDrop(treeId, treeNodes, targetNode, moveType) {
	return targetNode ? targetNode.drop !== false : true;
}


//点击
function onClick(event, treeId, treeNode, clickFlag) {

 	//console(treeNode.name + " " + treeNode.id + " " + treeNode.pId);
}

//增加节点
var newCount = 1;
function addHoverDom(treeId, treeNode) {
	// console.log(treeId);
	// console.log(treeNode);
	var sObj = $("#" + treeNode.tId + "_span");
	if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
	var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
		+ "' title='add node' onfocus='this.blur();'></span>";
	sObj.after(addStr);
	var btn = $("#addBtn_" + treeNode.tId);
	if (btn) btn.bind("click", function () {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		zTree.addNodes(treeNode, { id: (100 + newCount), pId: treeNode.id, name: "new node" + (newCount++) });//***主要语句
		return false;
	});
};

function removeHoverDom(treeId, treeNode) {
	$("#addBtn_" + treeNode.tId).unbind().remove();
};


	zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
	zTreeObj.expandAll(true);
	//初始化zTree
	var um = UM.getEditor('myEditor', {
		initialFrameWidth: 938,
		initialFrameHeight: 440
	});


	$("#dosomething").click(function () {
		var treeObj = $.fn.zTree.getZTreeObj("treeDemo")
		var node = treeObj.getSelectedNodes();
		//console.log(nodes);
		if(node.length == 0) {
			alert("请选择要编辑的项目！");
		}
		else {
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
		treeObj.setting.view.addHoverDom = addHoverDom;
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
		swf: 'lib/webuploader/Uploader.swf',
	
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
	uploader.on( 'fileQueued', function( file ) {
		// $list.append( '<div id="' + file.id + '" class="item">' +
		// 	'<h4 class="info">' + file.name + '</h4>' +
		// 	'<p class="state">等待上传...</p>' +
		// '</div>' );
		name.push(file.name);
	});

	// 文件上传过程中创建进度条实时显示。
	uploader.on( 'uploadProgress', function( file, percentage ) {
		var $li = $( '#'+file.id ),
			$percent = $li.find('.progress .progress-bar');

		// 避免重复创建
		if ( !$percent.length ) {
			$percent = $('<div class="progress progress-striped active">' +
			'<div class="progress-bar" role="progressbar" style="width: 0%">' +
			'</div>' +
			'</div>').appendTo( $li ).find('.progress-bar');
		}

		$li.find('p.state').text('上传中');

		$percent.css( 'width', percentage * 100 + '%' );
	});

	uploader.on( 'uploadSuccess', function( file ) {
		$( '#'+file.id ).find('p.state').text('已上传');
	});

	uploader.on( 'uploadError', function( file ) {
		$( '#'+file.id ).find('p.state').text('上传出错');
	});

	uploader.on( 'uploadComplete', function( file ) {
		$( '#'+file.id ).find('.progress').fadeOut();
	});
	//自定义事件
	uploader.onFileQueued = function( file ) {
		// do some things.
	};

	

	$btn.on('click', function () {
		uploader.upload();
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		var treeNode = zTree.getSelectedNodes();
		if(treeNode.length == 0) {
			alert("请选择要编辑的项目！")
		}
		else {
			//console.log( treeNode[0].id );
			$.each(name, function(index, val){
				//console.log(index, val);
				zTree.addNodes(treeNode[0], { id: (200 + newCount), pId: treeNode[0].pId, name: val });//***主要语句
			});
		}
	});

