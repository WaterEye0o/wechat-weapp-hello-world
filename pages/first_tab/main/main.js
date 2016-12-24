/**
 * Created by whb on 2016/12/24.
 * https://github.com/WaterEye0o
 */

Page({
  data:{
    String:'string',
    type:'test'
  },
  onLoad: function (option) {
    this.setData({
      type:option.type,
    });
    console.log("测试",option.type);

    wx.setNavigationBarTitle({title: option.type})
  }
})