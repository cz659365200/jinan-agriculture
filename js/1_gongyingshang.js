// JavaScript Document

function pagerTemplate1(){
	return "<span class='paginator-center'>{prev}{links}{next}{pginput}</span><span class='paginator-right'><em>显示方式：每页</em>{rowlist}<em>条</em></span>";
}
function format(e,ui,rawObject){
		var status  = rawObject.two;
		var result = "";
		if(status=="一级市场"){
			result += "<img src='images/1.png'>"
		}else if(status=="二级市场"){
			result += "<img src='images/2.png'>";
		}else if(status=="三级市场"){
			result += "<img src='images/3.png'>";
		}
		return result;
}

$(document).ready(function(){
	var $grid = $("#gridDemo1"),
	   _colModel=[
			{name:"1",formatter:"format",sortable:false},
			{name:"two",sortable:false},
			{name:"3",sortable:false},
			{name:"4",sortable:false},
			{name:"5",sortable:false},
			{name:"6",sortable:false},
			{name:"7",sortable:false},
			{name:"8",sortable:false},
			{name:"9",sortable:false},
			{name:"10",sortable:false},
			{name:"11",sortable:false},
			{name:"12",sortable:false},
			{name:"13",sortable:false},
			{name:"14",sortable:false},
			{name:"15",sortable:false},
			{name:"16",sortable:false},
			{name:"17",sortable:false},
			{name:"18",sortable:false},
			{name:"19",sortable:false},
			{name:"20",sortable:false},
			{name:"21",sortable:false},
			{name:"22",sortable:false},
			{name:"23",sortable:false}
		],
		
		_colNames=["预警","市场名称","品名","类别","日期","最高价格","最低价格","平均价格","单位","成交量","成交量单位","日环比（%）","周均价","周环比（%）","周同比","月均价","月环比（%）","月同比","旬均价","旬环比（%）","旬同比","年环比（%）","年均价"],
		_setting={
			width:"auto",
			height:"auto",
			fitStyle:"width",
			minWidth : false,//去掉组件单元格的最小宽度
			colModel:_colModel,
			colNames:_colNames,
			pagerTemplate:pagerTemplate1,
			rowList:[1,1,1,1],
			url:"json/page1.json",
		};
	$grid.grid(_setting);
	
});

