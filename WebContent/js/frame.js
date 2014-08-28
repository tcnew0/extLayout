/**
 * frame.js zhaozb 2014年8月28日 下午5:29:18
 */
Ext.onReady(function(){
	
	// 切换tab
	var navigate = function(panel, direction){
	    var layout = panel.getLayout();
	    layout[direction]();
	    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
	    Ext.getCmp('move-next').setDisabled(!layout.getNext());
	};
	
	// key map
//	var mapleft = Ext.create('Ext.util.KeyMap',{
//		target:'mainFrame',
//		key:Ext.EventObject.LEFT,
//		fn:function(key, ev){
//			alert('添加A');
//		    ev.stopEvent();
//		    return false;
//		}
//	});
	
	// key map
//	var mapright = Ext.create('Ext.util.KeyMap',{
//		target:'mainFrame',
//		key:Ext.EventObject.RIGHT,
//		fn:function(key, ev){
//			alert('添加B');
//		    ev.stopEvent();
//		    return false;
//		}
//	});
	
	Ext.create('Ext.panel.Panel', {
	    title: 'Example Wizard',
	    width: '100%',
	    height: 600,
	    id:'mainFrame',
	    layout: 'card',
	    bodyStyle: 'padding:15px',
	    defaults: {
	        // applied to each contained panel
	        border: true
	    },
	    // just an example of one possible navigation scheme, using buttons
	    bbar: [
	        {
	            id: 'move-prev',
	            text: 'Back',
	            handler: function(btn) {
	                navigate(btn.up("panel"), "prev");
	            },
//	            listeners : {
//	                keypress: function(btn, e, options){
//	                	alert(1);
//	                    if(e.getKey() == 37 ){
//	                    	alert(11);
//	                    }
//	                }
//	            },
	            disabled: true
	        },
	        '->', // greedy spacer so that the buttons are aligned to each side
	        {
	            id: 'move-next',
	            text: 'Next',
	            handler: function(btn) {
	                navigate(btn.up("panel"), "next");
	            }
	        }
	    ],
	    // the panels (or "cards") within the layout
	    items: [{
	        id: 'card-0',
	        html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
	    },{
	        id: 'card-1',
	        html: '<p>Step 2 of 3</p>'
	    },{
	        id: 'card-2',
	        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
	    }],
	    renderTo: Ext.getBody()
	});
});