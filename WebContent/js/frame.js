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
	
	var navigate_inner = function(panel, direction){
	    var layout = panel.getLayout();
	    layout[direction]();
	    Ext.getCmp('imove-prev').setDisabled(!layout.getPrev());
	    Ext.getCmp('imove-next').setDisabled(!layout.getNext());
	};
	
	var pnRow1=new Ext.Panel({  
        border:false,  
        layout:'column',  
        items:[  
            new Ext.Panel({  
                columnWidth:.5,  
                layout:'form',  
                border:false,  
                labelWidth:40,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'textfield',  
                        fieldLabel:'姓名',  
                        name:'uname',  
                        anchor:'95%'  
                    }  
                ]  
            }),  
            new Ext.Panel({  
                columnWidth:.3,  
                layout:'form',  
                border:false,  
                labelWidth:40,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'radio',  
                        fieldLabel:'性别',  
                        boxLabel:'男',  
                        name:'sex',  
                        inputValue:'男',  
                        checked:true,  
                        anchor:"95%"  
                    }  
                ]  
            }),  
            new Ext.Panel({  
                columnWidth:.2,  
                layout:'form',  
                border:false,  
                labelWidth:1,  
                items:[  
                    {  
                        xtype:'radio',  
                        boxLabel:'女',  
                        name:'sex',  
                        inputValue:'女',  
                        labelSeparator:'',  
                        anchor:"95%"  
                    }  
                ]  
            })  
        ]  
    });  
    var pnRow2=new Ext.Panel({  
        layout:'column',  
        border:false,  
        items:[  
            new Ext.Panel({  
                columnWidth:.5,  
                layout:'form',  
                border:false,  
                labelWidth:40,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'datefield',  
                        name:'birthday',  
                        fieldLabel:'生日',  
                        anchor:'95%'  
                    }  
                ]  
            }),  
            new Ext.Panel({  
                columnWidth:.5,  
                layout:'form',  
                border:false,  
                labelWidth:40,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'combo',  
                        name:'study',  
                        store:['专科','本科','硕士','博士'],  
                        fieldLabel:'学历',  
                        anchor:'95%'  
                    }  
                ]  
            })  
        ]  
    });  
    var pnRow3=new Ext.Panel({  
        layout:'column',  
        border:false,  
        items:[  
            new Ext.Panel({  
                columnWidth:.3,  
                layout:'form',  
                border:false,  
                labelWidth:40,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'checkbox',  
                        name:'hoby',  
                        inputValue:'computer',  
                        fieldLabel:'爱好',  
                        boxLabel:'计算机',  
                        anchor:'95%'  
                    }  
                ]  
            }),  
            new Ext.Panel({  
                columnWidth:.3,  
                layout:'form',  
                border:false,  
                labelWidth:1,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'checkbox',  
                        name:'hoby',  
                        inputValue:'football',  
                        boxLabel:'足球',  
                        labelSeparator:'',  
                        anchor:'95%'  
                    }  
                ]  
            }),  
            new Ext.Panel({  
                columnWidth:.4,  
                layout:'form',  
                border:false,  
                labelWidth:1,  
                labelAlign:'right',  
                items:[  
                    {  
                        xtype:'checkbox',  
                        name:'hoby',  
                        intputValue:'tinyTable',  
                        boxLabel:'乒乓球',  
                        labelSeparator:'',  
                        anchor:'95%'  
                    }  
                ]  
            })  
        ]  
    });  
      
    var pnRow4=new Ext.Panel({//当然这里直接在FormPanel中添加TextField就可以了，因为只有一行，但是为了一致以及对齐方便我这里还是放到了panel中  
        layout:'form',  
        border:false,  
        labelWidth:40,  
        labelAlign:'right',  
        items:[  
            {  
                xtype:'textfield',  
                name:'email',  
                fieldLabel:'住址',  
                anchor:'98%'  
            }  
        ]  
    });  
    var pnRow5=new Ext.Panel({  
        layout:'form',  
        border:false,  
        labelWidth:40,  
        labelAlign:'right',  
        items:[  
            {  
                xtype:'htmleditor',  
                name:'note',  
                fieldLabel:'备注',  
                height:200,  
                anchor:'98%'  
            }  
        ]  
    });  
    
	Ext.create('Ext.panel.Panel', {
	    title: 'ExtJs 布局演示',
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
	    items: [
	            //绝对布局（absolute）
	            {
//    	        html: '绝对布局（absolute）：这种方式的布局可以对子元素相对于父级容器控件进行绝对定位，它包含了x、y两个配置项用于定位。'
    	    	title: '绝对布局（absolute）',
    	    	tools: [{type:'help',
    	    	        //tooltip: '说明',
    	    	        handler: function(event, toolEl, panel){
    	    	        	Ext.create('Ext.window.Window', {
    	    	        	    title: '绝对布局（absolute）',
    	    	        	    height: 400,
    	    	        	    width: 600,
    	    	        	    layout: 'fit',
    	    	        	    items: [{
    	    	        	        //title: '局部fit',
    	    	        	        xtype: "panel",
    	    	        	        bodyStyle:{
    	    	        	        	background: '#ffc'
    	    	        	        },
    	    	        	        html: "<font size='4'>继承自Ext.layout.container.Anchor的锚点固定特性的布局, 并添加使用标准x,y属性进行x/y坐标定位功能." +
    	    	        	        		"这种方式的布局可以对子元素相对于父级容器控件进行绝对定位，它包含了x、y两个配置项用于定位。</font>",
    	    	        	    }]
    	    	        	}).show();
    	    	        }}],
        	    width: 400,
        	    height: 300,
        	    layout: 'absolute',
        	    items: [{
        	        title: '面板1',
        	        xtype: "panel",
        	        html: "子元素1",
        	        width: 200,
        	        height: 100,
        	        x: 50,
        	        y: 50
        	 
        	    }, {
        	        title: '面板2',
        	        xtype: "panel",
        	        html: "子元素2",
        	        width: 200,
        	        height: 100,
        	        x: 100,
        	        y: 80
        	    },{
        	        title: '面板3',
        	        xtype: "panel",
        	        html: "子元素3",
        	        anchor: '30% 50%', 
        	        x: 40,
        	        y: 200
        	    },{
        	    	title: '绝对布局（absolute）',
        	        xtype: "panel",
        	        //draggable: true,
        	        html: "子元素2",
        	        width: 500,
        	        height: 400,
        	        x: 400,
        	        y: 50
        	    }]
    	    }
    	    // accordion,手风琴
    	    ,{
    	    	title: '手风琴（accordion）',
//    	        width: 300,
//    	        height: 300,
    	        layout:'accordion',
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '手风琴（accordion）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>此布局将多个Panel以一种可以展开/收缩的样式排列, 且任何时候只有一个Panel可以处于展开状态." +
	    	        	        		"注意: 只有 Ext的各种Panel和Ext.panel.Panel的子类可以用于这种布局的容器中。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        layoutConfig: {
    	            titleCollapse: false,
    	            animate: true,
    	            activeOnTop: true
    	        },
    	        items: [{
    	            title: 'Panel 1',
    	            html: 'Panel content!'
    	        },{
    	            title: 'Panel 2',
    	            html: 'Panel content!'
    	        },{
    	            title: 'Panel 3',
    	            html: 'Panel content!'
    	        }]
    	    }
    	    // 锚:anchor 
    	    ,{
    	    	width: 500,
    	        height: 400,
    	        title: "锚（anchor）",
    	        layout: 'anchor',
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '锚（anchor）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>这个布局将子元素的位置与父容器大小进行关联固定. " +
	    	        	        		"如果容器大小改变, 所有固定的子项将按各自的anchor 规则自动被重新渲染固定. " +
	    	        	        		"例如：anchor: '75% 20%。" +
	    	        	        		"这个布局就是表单面板默认支持的，每一项占据一行，支持用anchor配置项分配各个子项的高度和宽度。" +
	    	        	        		"为百分比时表示当前大小占父容器的百分比，为数字的时一般为负数，表示父容器的值减去差值，剩下的为子项的大小'</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        items: [
    	            {
    	                xtype: 'panel',
    	                title: '75% Width and 20% Height',
    	                anchor: '75% 20%'
    	            },
    	            {
    	                xtype: 'panel',
    	                title: 'Offset -300 Width & -200 Height',
    	                anchor: '-300 -200',
    	                html:'这个布局就是表单面板默认支持的，每一项占据一行，支持用anchor配置项分配各个子项的高度和宽度。为百分比时表示当前大小占父容器的百分比，为数字的时一般为负数，表示父容器的值减去差值，剩下的为子项的大小'
    	            },
    	            {
    	                xtype: 'panel',
    	                title: 'Mixed Offset and Percent',
    	                anchor: '-250 20%'
    	            }
    	        ]
    	    }
    	    // 边界（border）
    	    ,{
    	    	title: '边界（border）',
    	        width: 400,
    	        height: 300,
    	        layout: 'border',
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '边界（border）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>Ext中常用布局方式，这个布局可以定义东南西北四个方向的子元素，还有一个居中的子元素，一般用它来做页面整页布局，" +
	    	        	        		"所以Ext.container.Viewport默认就支持了这个布局方式。。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        defaults: {
    	            split: true,                 //是否有分割线
    	            collapsible: true,           //是否可以折叠
    	        },
    	        items: [{
    	            region: 'north',            //子元素的方位：north、west、east、center、south
    	            title: '北',
    	            xtype: "panel",
    	            html: "子元素1",
    	            height: 70
    	        }, {
    	            region: 'west',
    	            title: '西',
    	            xtype: "panel",
    	            html: "子元素2",
    	            width: 100
    	     
    	        }, {
    	            region: 'east',
    	            title: '东',
    	            xtype: "panel",
    	            html: "子元素2",
    	            width: 100
    	     
    	        }, {
    	            region: 'center',
    	            title: '主体',
    	            xtype: "panel",
    	            html: "子元素3"
    	        }, {
    	            region: 'south',
    	            title: '南',
    	            xtype: "panel",
    	            html: "子元素4",
    	            height: 70
    	        }]
    	    }
    	    //card
    	    ,{
    	    	title: '卡片（card）',
    	        width: 300,
    	        height: 200,
    	        layout: 'card',
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '卡片（card）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>此布局管理多个子组件, 每个都完全填满父容器, 而每次仅显示一个. 此布局样式多用于向导, 实现标签页布局等等" +
	    	        	        		"这个布局可以像卡片一样的切换每个子元素，各个子元素都会独占父元素的容器空间。" +
	    	        	        		"我们可以定义翻页按钮来控制当前处于活动状态的子元素。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        bodyStyle: 'padding:15px',
    	        defaults: {
    	            // applied to each contained panel
    	            border: false
    	        },
    	        // just an example of one possible navigation scheme, using buttons
    	        bbar: [
    	            {
    	                id: 'imove-prev',
    	                text: 'Back',
    	                handler: function(btn) {
    	                	navigate_inner(btn.up("panel"), "prev");
    	                },
    	                disabled: true
    	            },
    	            '->', // greedy spacer so that the buttons are aligned to each side
    	            {
    	                id: 'imove-next',
    	                text: 'Next',
    	                handler: function(btn) {
    	                	navigate_inner(btn.up("panel"), "next");
    	                }
    	            }
    	        ],
    	        // the panels (or "cards") within the layout
    	        items: [{
    	            id: 'icard-0',
    	            html: '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
    	        },{
    	            id: 'icard-1',
    	            html: '<p>Step 2 of 3</p>'
    	        },{
    	            id: 'icard-2',
    	            html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
    	        }]
    	    }
    	    // 列 column
    	    ,{
	    	    title: '列（column）',
	    	    width: '100%',
	    	    height: '100%',
	    	    layout:'column',
	    	    tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '列（column）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>这个布局用于在一个多列格式中创建结构化布局的布局样式, 每列可以用百分比或固定的宽度值来定义, 但允许高度根据内容而改变" +
	    	        	        		"这个布局把子元素按照列进行划分。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
	    	    items: [{
	    	        columnWidth: .25,
	    	        items: [{
	    	            title: '面板1',
	    	            border: false,
	    	            html: '子元素1'
	    	        }, {
	    	            title: '面板2',
	    	            border: false,
	    	            html: '子元素2'
	    	        }]
	    	    },{
	    	        title: 'Column 2',
	    	        //columnWidth: .55,
	    	        width: 120,
	    	        html:'元素3'
	    	    },{
	    	        title: 'Column 3',
	    	        columnWidth: .20,
	    	        html:'元素4'
	    	    }],
    	    }
    	    // 自适应 fit
    	    ,{
    	    	title: '自适应（fit）',
    	        width: 300,
    	        height: 150,
    	        layout:'fit',
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '自适应（fit）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>这个是一个布局的基类, 能使当容器只包含一个子元素时, 子元素自动填满容器。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        items: {
    	            title: 'Inner Panel',
    	            html: 'This is the inner panel content',
    	            //bodyPadding: 20,
    	            border: true
    	        }
    	    }
    	    //表格 table
    	    ,{
    	    	title: '表格（table）',
    	        width: 400,
    	        height: 300,
    	        layout: {
    	            type: 'table',
    	            columns: 4
    	        },
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '表格（table）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>此布局允许你很轻松的将内容渲染到一个HTML的table中. 可以指定列数, 也能够使用rowspan和colspan参数来创建复杂的布局.</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        defaults: { frame: true, width: 70, height: 50 },
    	        items: [
    	            { html: '元素1', rowspan: 3, height: 150 },
    	            { html: '元素2', rowspan: 2, height: 100 },
    	            { html: '元素3' },
    	            { html: '元素4' },
    	            { html: '元素5', colspan: 2, width: 140 },
    	            { html: '元素6' },
    	            { html: '元素7' },
    	            { html: '元素8' }
    	        ]
    	    }
    	    //纵向布局（vbox）
    	    ,{
    	    	title: '纵向布局（vbox）',
    	        width: 400,
    	        height: 300,
    	        layout: {
    	            type: 'vbox',
    	            pack: 'start',              //纵向对齐方式 start：从顶部；center：从中部；end：从底部
    	            align: 'stretchmax'             //对齐方式 center、left、right：居中、左对齐、右对齐；stretch：延伸；stretchmax：以最大的元素为标准延伸
    	        },
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '纵向布局（vbox',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>此布局是将所有子组件在容器中垂直排列. 此布局会选择性将可用的垂直空间分配给包含'flex'数值的子组件。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        defaults: {
    	            xtype: 'button'
    	        },
    	        items: [{
    	            text: '小按钮',
    	            flex: 1                      //表示当前子元素尺寸所占的均分的份数。
    	        }, {
    	            xtype: 'tbspacer',          //插入的空填充
    	            flex: 3
    	        },
    	        {
    	            text: '中按钮',
    	            scale: 'medium'
    	        }, {
    	            text: '大按钮',
    	            width: 120,
    	            scale: 'large',
    	            flex: 1
    	        }]
    	    }
    	    // 横向布局 hbox
    	    ,{
    	    	title: '横向布局（hbox）',
    	        width: 400,
    	        height: 300,
    	        layout: {
    	            type: 'hbox',
    	            pack: 'end',
    	            align: 'middle'             //对齐方式 top、middle、bottom：顶对齐、居中、底对齐；stretch：延伸；stretchmax：以最大的元素为标准延伸
    	        },
    	        tools: [{type:'help',
	    	        //tooltip: '说明',
	    	        handler: function(event, toolEl, panel){
	    	        	Ext.create('Ext.window.Window', {
	    	        	    title: '横向布局（hbox）',
	    	        	    height: 400,
	    	        	    width: 600,
	    	        	    layout: 'fit',
	    	        	    items: [{
	    	        	        //title: '局部fit',
	    	        	        xtype: "panel",
	    	        	        bodyStyle:{
	    	        	        	background: '#ffc'
	    	        	        },
	    	        	        html: "<font size='4'>此布局是将所有子组件在容器中水平排列. 此布局会选择性将可用的水平空间分配给包含'flex'数值的子组件。</font>",
	    	        	    }]
	    	        	}).show();
	    	        }}],
    	        defaults: {
    	            xtype: 'button'
    	        },
    	        items: [{
    	            text: '小按钮'
    	        },{
    	            text: '小按钮'
    	        },{
    	            text: '小按钮'
    	        },{
    	            text: '小按钮'
    	        },{
    	            text: '中按钮',
    	            scale: 'medium'
    	        },{
    	            text: '中按钮',
    	            scale: 'medium'
    	        },{
    	            text: '中按钮',
    	            scale: 'medium'
    	        },{
    	            text: '中按钮',
    	            scale: 'medium'
    	        }, {
    	            text: '大按钮',
    	            width: 120,
    	            scale: 'large'
    	        }, {
    	            text: '大按钮',
    	            width: 120,
    	            scale: 'large'
    	        },{
    	            text: '大按钮',
    	            width: 120,
    	            scale: 'large'
    	        },{
    	            text: '大按钮',
    	            width: 120,
    	            scale: 'large'
    	        }]
    	    }
    	     //表单布局（form）
    	    ,{
    	         title:"表单布局（form）",  
    	         width:600,  
    	         border: true,
    	         bodyStyle:'padding:10px',  
    	         layout:"form",  
    	         tools: [{type:'help',
 	    	        //tooltip: '说明',
 	    	        handler: function(event, toolEl, panel){
 	    	        	Ext.create('Ext.window.Window', {
 	    	        	    title: '表单布局（form）',
 	    	        	    height: 400,
 	    	        	    width: 600,
 	    	        	    layout: 'fit',
 	    	        	    items: [{
 	    	        	        //title: '局部fit',
 	    	        	        xtype: "panel",
 	    	        	        bodyStyle:{
 	    	        	        	background: '#ffc'
 	    	        	        },
 	    	        	        html: "<font size='4'>这个布局是专门为表单而设计的布局方式，当然多数是用在FormPanel中（它也是FormPanel默认的布局方式）。" +
	    	        	        		"我们前面说过FormPanel但是没有涉及复杂布局，事实实际应用中更多的是较复杂的布局。 " +
	    	        	        		"从代码我们也可看出来，区别就是对于Panel我们配置了layout为form，" +
	    	        	        		"从这也能看出来说FormPanel默认的布局就是form布局，所以对于习惯于用Panel而不习惯用FormPanel的朋友尽管用Panel," +
	    	        	        		"但是一定要考虑好提交的问题，如果使用panel的话，要做提交可是要一个个获得控件的值的，而FromPanel则不需要。</font>",
 	    	        	    }]
 	    	        	}).show();
 	    	        }}],
    	         items:[  
    	             pnRow1,  
    	             pnRow2,  
    	             pnRow3,  
    	             pnRow4,  
    	             pnRow5  
    	         ]  
    	    }],
	    renderTo: Ext.getBody()
	});
});