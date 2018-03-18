<template>
  <div class="video-detail">
      <div id="Subscribe">
          <div class="fl author">
            <div class="fl author-p"><img src="https://image.uc.cn/o/wemedia/s/upload/1705221035efe75e3d58ed5ad3731ac454f5a68862;,3,jpegx;3,310x"></div>
            <div class="fl author-info">
                <span class="fl author-name">优酷资讯</span>
                <p class="fl author-fans">51.6万粉丝</p>
            </div>
          </div>
          <div class="fr subscibe-btn">
              <button type="submit">+订阅</button>
          </div>
      </div>
      <p class="video-desc">
          中华人民共和国第十三届全国人民代表大会第一次会议和中国人民政治协商会议第十三届全国委员会第一次会议分别于2018年3月5日和3月3日在北京开幕。中国国际广播电台、中国国际广播电视网络台将聚焦2018全国两会，全方位、多角度呈现两会盛况。
      </p>
      <div></div>
  </div>
</template>

<script>
    export default {
        name:'contentdetail'
    }
</script>

<style>
#Subscribe{
    display: flex;
    justify-content: space-between;
}
.author-p{
    display: inline-block;
}
.author-p img{
    width:36px;
    height: 36px;
}
.author-info{
    display: inline-block;
}
.author-name{
    font-size:12px;
    color:#666;
}
.author-fans,.video-desc{
    font-size: 10px;
    color:#b0b0b0;
    margin-top:5px;
}
.subscibe-btn button{
    border-radius: 50px;
    border:1px solid #2692ff;
    color:#2692ff;
    text-align:center;
    width: 80px;
    height: 30px;
    background-color: #f0f0f0;
}
.video-desc{
    font-size:10px;
    margin:0px;
}
</style>

