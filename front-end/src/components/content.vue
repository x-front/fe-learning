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
  </div>
  <!--播放器  -->
</template>
<script>

</script>
<style>
/*顶部*/
.contentheader-wrap{
    width: 100%;
    height: 44px;
    padding:20px 15px;
    text-align: center;
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
.header-right{
    position: absolute;
    top:20px;
    right:15px;
}
.search_icon {
    background-position: 0 -58px;
}
.user_icon {
    background-position: 0 -86px;
}
/*播放器*/
</style>

