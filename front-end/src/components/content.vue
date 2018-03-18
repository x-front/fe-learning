<template>
  <!--顶部  -->
  <div class="content-wrap">
    <div class="contentheader-wrap">
        <div class="menu-wrap"><span class="menu_icon"></span></div>
        <div><span class="yk-logo_icon"></span></div>
        <div class="contentheader-right">
            <span class="search_icon"></span>
            <span class="user_icon"></span>
        </div>
        
    </div>
    <!--播放器  -->
    <div class="player">
        <div class="player-box">
            <my-video :sources="video.sources" :options="video.options"></my-video>
        </div>
        <button type="submit" class="btn-DownloadAPP">
            <a href="http://down2.uc.cn/youku/down.php?spm=a2hmb.20008760.m_221044.5~5~5~5~5~5~P~A&pub=ab235fdcb823d83f">打开优酷APP，流畅到起飞 </a>
        </button>
    </div>
    <!--视频详情  -->
    <div class="videodetail">
        <div class="videotitle">
            <span class="only">独播</span>
            <span class="title">Big Buck Bunny</span>
            <!--<span class="btn-opendetail"></span>-->
        </div>
        <div class="video-score">
            <span class="score">9.0分</span>
            <span class="playnum">1.2万亿次播放</span>
        </div>
        <!--
        <div class="btn-tool">
            <div class="fl">
                <button class="videoQuality">高清></button>
            </div>
            <div class="fr">

            </div>
        </div>
        -->
    </div>
  </div>

</template>
<script>
import myVideo from 'vue-video'
export default {
    data () {
        return {
            video: {
                sources: [{
                    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            }
        }
    },
    components: {
        myVideo
    }
}
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
    margin-left:10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
}
[class*='_icon']{
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1501124161113) no-repeat;
    background-size:375px 200px;
    display: inline-block;
    width:22px;
    height: 20px;
}
.menu-wrap {
    position: absolute;
    left:10px;
    top:10px;
}
.menu_icon {
    background-position: 0 -30px;
}
.yk-logo_icon {
    width: 86px;
    height: 17px;
    background-position: 0 0;
}

.contentheader-right{
    position: absolute;
    top:10px;
    right: 10px;
}

.search_icon {
    background-position: 0 -58px;
}
.user_icon {
    background-position: 0 -86px;
    margin-left: 5px;
}
.player-box{
    height:100%;
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
/*视频信息*/
.video-score{
    font-size:1rem;
    margin-left:10px;
    margin-top:10px;
}
.score {
    color:#FA533D;
}
.playnum{
    color:#999;
    margin-left: 10px;
}

</style>

