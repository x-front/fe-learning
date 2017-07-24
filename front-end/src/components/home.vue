<template>
  <div class="container">
    <!--头部开始-->
    <div class="header-box">
      <div class="header">
        <div class="header-left">
          <div class="yk-logo">
            <a href="#">
              <span class="youkulogo"></span>
            </a>
            <div class="handle yk-chanel">
              <i class="ico-channel"></i>
              <span><a  href="#">频道</a></span>
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="handle yk-search">
            <i class="ico-search"></i>
            <span><a href="#">搜索</a></span>
          </div>
          <div class="handle yk-center">
            <i class="ico-user"></i>
            <span><a href="#">登录</a></span>
          </div>
        </div>
      </div>
      <!--头部搜索栏-->
      <div class="search-box">
        <form action="" method="post" class="form-search">
          <input type="text" name="search" class="input-search"/>
          <button type="submit" class="btn-search" @click="search">
            <i class="ico-so"></i>
            搜库
          </button>
        </form>
      </div>
    </div>
    <!--头部结束-->
    <!--导航栏开始-->
    <!-- 导航栏开始 -->
    <my-nav></my-nav>  
    <!-- 导航结束 -->
    <keep-alive> <!--啥意思-->
      <router-view></router-view>
    </keep-alive>
    <!--导航栏结束-->

    <div class="videolist">
      <!--幻灯片开始-->
      <div class="thumbnail">
          <div class="p-taglt">
            <i class="ico-isvip"></i>
          </div>
          <div class="thumb-pic">
            <img :src="pinfo.src" class="thumb-real-pic">
            <a href="http://m.youku.com" class="p-link"></a>
          </div>
          <div class="p-metadata">
              <div class="p-title">{{ pinfo.title }}</div>
              <div class="p-desc">
                <span class="p-check">{{ pinfo.check }}</span>
                <i class="ico-stat-play"></i>
                <span class="p-num">{{ pinfo.playnum }}</span>
                <i class="ico-stat-comment"></i>
                <span class="p-num">{{ pinfo.commentnum }}</span>
              </div>
          </div>
      </div>
      <!--幻灯片结束-->
      <!--推荐视频开始-->
      <div class="v-recommend">
        <div class="v-item" v-for="item in vinfo" :key="item">
          <img :src="item.src">
          <div class="v-info">
            <div class="v-title">{{ item.title }}</div>
            <div class="v-desc">
              <span class="v-check">{{ item.check }}</span>
              <i class="ico-stat-play"></i>
              <span class="v-num">{{ item.playnum }}</span>
              <i class="ico-stat-comment"></i>
              <span class="v-num">{{ item.commentnum }}</span>
            </div>
          </div>
        </div>
      <!--推荐视频结束-->
    </div>
    <!--右下角固定工具栏-->
    <div class="rsidebar">
      <ul>
        <li><a ><i class="ico-gotop"></i></a></li>
        <li><a><i class="ico-user"></i></a></li> 
        <li><a><i class="ico-feedback"></i><span>反馈</span></a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import nav from './nav'
export default {
  name: 'app',
  components: {
    MyNav: nav
  },
  data () {
    return {
      pinfo: {
        src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
        title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
        playnum: '3,718万',
        commentnum: '3,146',
        videotime: '97:59',
        check: '更新至46'
      },
      vinfo: [
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        },
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        },
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        },
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        },
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        },
        {
          src: 'http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE',
          title: '[极限挑战3]沙溢被孙红雷逼疯 遭安吉嫌弃',
          playnum: '3,718万',
          commentnum: '3,146',
          videotime: '97:59',
          check: '更新至46'
        }
      ]
    }
  },
  methods: {
    search () {
      alert('What are looking for?')
    }
  }
}

</script>

<style>

body,div,a,span,ul,li,button,input,img{
  margin:0px;
  padding:0px;
}

.container{
  overflow: auto;
  height: 100%;
}

a {
  text-decoration: none;
  color:inherit;
}

.youkulogo{
  background:url(http://static.youku.com/index/img/mheader/yklogo.png);
  height: 26px;
  width: 120px;
  display: inline-block;
  margin-left:10px;
}

/*header小图标通用样式*/
.handle {
  width: 24px;
  font-size:12px;
  text-align: center;
  padding:4px 10px;
  color:#555;
}

.ico-channel,.ico-search,.ico-user,.ico-so {
  width:16px;
  height: 16px;
  background: url(http://static.youku.com/index/img/mheader/mheader@2x.png) no-repeat;
  background-size:96px 144px;
  display: inline-block; 
  vertical-align: middle;
}

.ico-channel{
  background-position: 0 0;
}

.ico-search{
  background-position: -24px 0;
}

.ico-user{
  background-position: 0 -24px;
}

.ico-so {
  background-position: 0 -120px;
}

.middle-container {
  margin: 0 10px;
}

/*其他小图标*/
.ico-stat-play,.ico-stat-comment,.ico-isvip {
  background: url(http://static.youku.com/index/img/mobile/yk@2x.png) no-repeat;
  background-size:300px 300px;
  display: inline-block;
}

.ico-stat-play,.ico-stat-comment{
  height: 12px;
  width:12px;
  vertical-align: middle;
}

.ico-isvip {
  width:44px;
  height: 44px;
}

.p-metadata i,.p-metadata .p-num{
  vertical-align: bottom;
}

.ico-stat-play {
  background-position: -30px 0;
}

.ico-stat-comment {
  background-position: -60px 0;
}

.ico-isvip {
  background-position: -60px -60px;
}

/*header*/
.header {
  width:100%;
  height:40px;
  background-color: #f6f6f6;
}

.header-left,.header-right{
  display:inline-block;
}

.header-right{
  position: absolute;
  right: 0px;
}

.handle {
  display: inline-block;
}

/*搜索栏*/
.search-box{
  margin:10px;
}

.input-search{
  width: 79%;
  float:left;
  height: 28px;
  border:1px solid #a0a0a0;
  border-right:0px;
}

.btn-search {
  border:0px;
  width:20%;
  height: 30px;
  margin-left:1px;
  background-color: #2E8EE2;
  color:#fff;
  font-size:14px;
}

/*大图*/
.thumbnail{
  margin:15px 10px 10px 10px;
  position: relative;
}

.thumb-pic{
  margin-bottom: -4px;
}

.thumb-real-pic {
  width:100%;
  height: 100%;
}

.p-link{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
}

.p-taglt{
  position: absolute;
  top:0;
  left:0;
}

/*大图媒体信息*/
.p-metadata {
  background-color: #f5f5f5;
  padding:5px;
}

.p-title {
  font-size:14px;
  color:#555;
}


/*大图媒体信息*/
.p-check {
  font-size:12px;
  position: absolute;
  bottom:52px;
  color:#ddd;
}

.p-num {
  font-size:10px;
  color:#555;
}

/*小视频列表*/
.v-item {
  float:left;
  width: 50%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-left: 10px;
  padding-right:10px;
  margin-bottom:15px;
  position:relative;
}

.v-item img{
  width: 100%;
  
}

.v-info{
  background-color: #ddd;
  margin-top:-4px;
  padding: 4px;
}

.v-check{
  font-size: 12px;
  color:#fff;
  position: absolute;
  bottom:48px;
  left:15px;
}

.v-title{
  font-size:14px;
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.v-num{
  font-size: 12px;
  color:#909090;
}

/*右下角固定工具栏*/
.rsidebar {
  position: fixed;
  right:10px;
  bottom: 50px;
}

.rsidebar li{
  list-style: none;
  text-align: center;
  margin-top:1px;
}
.rsidebar li a {
  display: block; /*inline元素不能设置宽高*/
  width:50px;
  height: 50px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
}

.rsidebar li span {
  display: block;
  color:#fff;
  font-size:14px;
}

/*sidebar小图标样式*/
.rsidebar .ico-gotop,.rsidebar .ico-feedback,.rsidebar .ico-user{
  background: url(http://static.youku.com/index/img/mobile/sidebar@2x.png) no-repeat; 
  background-size:32px 130px; /*图片尺寸64 260 图片为什么要缩小一倍*/
  display: inline-block;
  margin-top:10px;
}

.rsidebar .ico-gotop {
  width:24px;
  height: 26px;
  background-position: 0 0;
}

.rsidebar .ico-user {
  width:26px;
  height: 26px;
  background-position: 0 -100px; /*位置定位*/
}

.rsidebar .ico-feedback {
  width:22px;
  height: 24px;
  background-position: 0 -40px;
}
</style>
