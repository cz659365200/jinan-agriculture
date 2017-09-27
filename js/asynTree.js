    define(['jquery'], function ($) {
        
        return $.controller("demo_tree_asynTree", {
            onInit: function(){
            },
            data : [{ name:"root", id:"1", ename:"b0", isParent:true}],
            reload : function(){
                $('#tree12').tree( "option", "asyncUrl", $.coral.contextPath+"/resources/jsp/treedata.jsp" );
                $('#tree12').tree( "reload", {
                    asyncOtherParam: [],
                    onLoad: function(){
                    }
                } );
            }
        })
    });