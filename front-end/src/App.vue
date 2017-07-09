<template>
  <div class="container">
  <div class="header-box">
    <div class="header">
      <div class="header-left">
        <div class="yk-logo">
          <a href="#"><img src="http://static.youku.com/index/img/mheader/yklogo.png"></a>
          <div class="handle yk-chanel">
            <i></i>
            <span><a  href="#">频道</a></span>
          </div>
        </div>
      </div>
      <div class="header-right">
        <div class="handle yk-search">
          <i></i>
          <span><a href="#">搜索</a></span>
        </div>
        <div class="handle yk-center">
          <i></i>
          <span><a href="#">登录</a></span>
        </div>
      </div>
    </div>
    <div class="search"></div>
  </div>
  <!--菜单栏开始-->
  <ul id="nav">
    <li v-for="nav in navlist">
      <a href="#">
        {{ nav.txt }}
      </a>
    </li>
  </ul>
  <!--菜单栏结束-->
  
    <div class="videolist">
      <!--幻灯片开始-->
      <div class="thumbnail">
          <div class="thumb-pic">
            <a href="#"></a>
          </div>
      </div>
      <!--幻灯片结束-->
      <!--视频列表开始-->
      <div class="v-item">
        <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
        <div class="v-info">
          <div class="v-title">[快男]养鸡带假发变身</div>
          <div class="v-desc">
            <span class="v-num">播放</span>
            <span class="v-num">评论</span>
          </div>
        </div>
      </div>
      <div class="v-item">
        <img src="http://r1.ykimg.com/0515000059609933ADC0AE0E60013AAE">
        <div class="v-info">
          <div class="v-title">[快男]养鸡带假发变身</div>
          <div class="v-desc">
            <i class="ico-stat-play" title="播放"></i>
            <span class="v-num">播放</span>
            <span class="v-num">评论</span>
          </div>
        </div>
      </div>
      <!--视频列表结束-->
    </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navlist: [
      { txt: '首页' },
      { txt: '娱乐' },
      { txt: '文化' },
      { txt: '纪实' },
      { txt: '财经' },
      { txt: '体育' },
      { txt: '直播' },
      { txt: '历史' }
      ]
    }
  }
}
</script>

<style>

* {
  margin: 0px;
  padding:0px;
}

a {
  text-decoration: none;
}

#nav,.middle-container {
  margin: 0 10px;
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

/*菜单栏*/
#nav {
  padding: 5px 0;
  border-bottom: 4px solid #ccc;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 20px;
}

/*隐藏滚动条*/
#nav::-webkit-scrollbar {
  display:none;
}

#nav li {
  list-style: none;
  display: inline-block;
  margin: 0 18px;
  font-size: 16px;
}

#nav li .current{
  border-bottom-color:#06a7e1;
}


.thumbnail{
  margin:0 10px 10px 10px;
}

.thumb-pic {
  background: url("http://r1.ykimg.com/050C000059609755ADC0AE17B902E817") no-repeat;
  background-size:100%;
  width: 100%;
  height: 210px;
}


.v-item {
  float:left;
  width: 50%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-left: 10px;
  padding-right:10px;
}
.v-item img{
  max-width: 100%;
}

.v-info{
  background-color: #ddd;
}

.v-title{
  font-size:14px;
}
.v-num{
  font-size: 12px;
  color:#909090;
}
</style>

