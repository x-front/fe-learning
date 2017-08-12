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
  </div>

</template>
<script>

</script>
<style>
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

