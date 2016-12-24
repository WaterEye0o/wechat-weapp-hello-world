/**
 * Created by ${USER} on ${DATE}.
 * https://github.com/WaterEye0o
 */
Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch']
      }, {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['action-sheet', 'modal', 'toast', 'loading']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ],
    test:{test:'aaa'},
    test2:{test:"测试"},
    main:[
      {
        title:'查企业',
        id:'company',
        type:'企业',
      },{
        title:'查关联',
        id:'company',
        type:'企业',
      },{
        title:'查关联人',
        id:'associate',
        type:'企业',
      },{
        title:'查持股人',
        id:'associate',
        type:'企业',
      },{
        title:'查路径',
        id:'associate',
        type:'企业',
      },{
        title:'查报告',
        id:'associate',
        type:'企业',
      },{
        title:'查关联群组',
        id:'associate',
        type:'企业',
      },
    ],
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
  
});
