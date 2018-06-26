

function s1() {
	console.log('s1')
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
};

function s2() {
	console.log('s2')
	$(function () {
		$(".pagination").createPage({
			totalPage: 30,
			currPage: 1,
			backFn: function (p) {
				console.log("回调函数：" + p);
			}
		});
	})
};

function createDataRangePicker() {
	$('#reservationtime').daterangepicker({
		timePicker: true,
		timePickerIncrement: 5,
		format: 'MM/DD/YYYY h:mm A'
	},
	function (start, end, label) {
		console.log(start.toISOString(), end.toISOString(), label);
	});
	var cb = function (start, end, label) {
		console.log(start.toISOString(), end.toISOString(), label);
		$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		//alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
	}

	var optionSet1 = {
		startDate: moment().subtract('days', 29),
		endDate: moment(),
		minDate: '01/01/2012',
		maxDate: '12/31/2014',
		dateLimit: {
			days: 60
		},
		showDropdowns: true,
		showWeekNumbers: true,
		timePicker: false,
		timePickerIncrement: 1,
		timePicker12Hour: true,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Last 7 Days': [moment().subtract('days', 6), moment()],
			'Last 30 Days': [moment().subtract('days', 29), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
		},
		opens: 'left',
		buttonClasses: ['btn btn-default'],
		applyClass: 'btn-small btn-primary',
		cancelClass: 'btn-small',
		format: 'MM/DD/YYYY',
		separator: ' to ',
		locale: {
			applyLabel: 'Submit',
			cancelLabel: 'Clear',
			fromLabel: 'From',
			toLabel: 'To',
			customRangeLabel: 'Custom',
			daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			firstDay: 1
		}
	};

	var optionSet2 = {
		startDate: moment().subtract('days', 7),
		endDate: moment(),
		opens: 'left',
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Last 7 Days': [moment().subtract('days', 6), moment()],
			'Last 30 Days': [moment().subtract('days', 29), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
		}
	};

	$('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

	$('#reportrange').daterangepicker(optionSet1, cb);

	$('#reportrange').on('show.daterangepicker',
		function () {
			console.log("show event fired");
		});
	$('#reportrange').on('hide.daterangepicker',
		function () {
			console.log("hide event fired");
		});
	$('#reportrange').on('apply.daterangepicker',
		function (ev, picker) {
			console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
		});
	$('#reportrange').on('cancel.daterangepicker',
		function (ev, picker) {
			console.log("cancel event fired");
		});

	$('#options1').click(function () {
		$('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
	});

	$('#options2').click(function () {
		$('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
	});

	$('#destroy').click(function () {
		$('#reportrange').data('daterangepicker').remove();
	});

};

export default { s1, s2, createDataRangePicker }