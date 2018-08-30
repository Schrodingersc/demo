const app =getApp()
Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    prolist: [
      {
        logo: '/images/pro_01.jpg',
        title: '平安金融房信贷产品',
        desc: '利率低，还款灵活',
      },
      {
        logo: '/images/pro_02.jpg',
        title: '平安金融车信贷产品',
        desc: '利率低，还款灵活',
      },
      {
        logo: '/images/pro_03.jpg',
        title: '平安金融消费信贷产品',
        desc: '利率低，还款灵活',
      },
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  onLoad: function(){
  this.setData({test:'01',})
  },
  toDetail:function (e){
    console.log(e);
    var index=e.currentTarget.dataset.index;
    console.log(index);
    
  }
})