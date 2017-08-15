<template>
  <!--顶部  -->
  <div class="content-wrap">
    <div class="contentheader-wrap">
        <span class="menu_icon"></span>
        <span class="yk-logo_icon"></span>
        <div class="header-right">
            <span class="search_icon"></span>
            <span class="user_icon"></span>
        </div>
    </div>
    <!--播放器  -->
    <div class="player">
        <div class="player-box">
        </div>
        <button type="submit" class="btn-DownloadAPP">打开优酷APP，观看44分钟完整版</button>
    </div>
    <!--视频详情  -->
    <div class="videodetail">
        <div class="videotitle">
            <span class="only">独播</span>
            <span class="title">春风十里不如你</span>
            <span class="btn-opendetail"></span>
        </div>
    </div>
  </div>

</template>
<script>

</script>
<style>
/*视频详情*/
.videotitle .only{
    display: inline-block;
    background-color: #FA533D;
    padding:1px 4px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
}
.videotitle .title{
    font-size: 1.2rem;
    font-weight: bold;
}
.videotitle .btn-opendetail {
    display: inline-block;
    position: relative;
    top:-3px;
    right:-50%;
    width:6px;
    height:6px;
    border-top: 2px solid #333;
    border-left: 2px solid #333;
    transform:rotate(-135deg);
    -ms-transform:rotate(-135deg); 	/* IE 9 */
    -moz-transform:rotate(-135deg); 	/* Firefox */
    -webkit-transform:rotate(-135deg); /* Safari 和 Chrome */
    -o-transform:rotate(-135deg); 	/* Opera */
}
/*顶部*/
.contentheader-wrap{
    width: 100%;
    height: 44px;
    padding:10px 15px 0px 15px;
    text-align: center;
    line-height: 44px;
}
[class*='_icon']{
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1501124161113) no-repeat;
    background-size:375px 200px;
    display: inline-block;
    width:22px;
    height: 20px;
}
.menu_icon {
    position: absolute;
    top:20px;
    left:15px;
    background-position: 0 -30px;
}
.yk-logo_icon {
    width: 86px;
    height: 17px;
    background-position: 0 0;
}
.contentheader-wrap .header-right{
    position: absolute;
    top:10px;
    right:15px;
}
.search_icon {
    background-position: 0 -58px;
}
.user_icon {
    background-position: 0 -86px;
    margin-left: 5px;
}
.player-box{
    height:200px;
    width: 100%;
    background-color:black;
}
.btn-DownloadAPP{
    margin: 15px auto;
    display: block;
    width:90%;
    height:45px;
    border-radius: 45px;
    font-size: 16px;
    background-color: #fff;
    border:1px solid #2692ff;
    color:#2692ff;
}
/*播放器*/
</style>

