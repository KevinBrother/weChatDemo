// pages/tabOne/tabOne.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clockinTypes: [],
    avatarUrl: '',
    pictures:  [
      'http://img3.100bt.com/upload/ttq/20131027/1382863524813_middle.jpg',
      '/pages/images/1.png',  
      'https://wx.qlogo.cn/mmhead/0pygn8iaZdEfsTTybvl5KslfHQgrZwa9jSW7mtUdXic5F3qAt2nYDK4g/0'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // http://127.0.0.1:8000/getDefType/

    // wx.request({
    //     url: 'https://95mst.com:8000/getDefType/',
    //     success: res => {
    //         // console.log(res)
    //         this.setData({
    //             clockinTypes: res.data
    //         })
    //         // console.log(this)
    //     }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindViewTap: function() {
    var that = this;
    wx.chooseImage({
      // 设置最多可以选择的图片张数，默认9,如果我们设置了多张,那么接收时//就不在是单个变量了,
      count: 1,
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        // 获取成功,将获取到的地址赋值给临时变量
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          //将临时变量赋值给已经在data中定义好的变量
          avatarUrl: tempFilePaths
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },

  previewImage: function(e) {
    console.log(e)
    var that = this;
    //获取当前图片的下表
    let index = e.target.dataset.index;
//     //数据源
    let pictures = this.data.pictures;
    console.log(pictures[index]);
    wx.previewImage({
      //当前显示下表
      current: pictures[index],
      //数据源
      urls: pictures
    })
  },

})