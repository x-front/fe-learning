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
        <button type="submit" class="blue-btn DownloadAPP">
            <a href="http://down2.uc.cn/youku/down.php?spm=a2hmb.20008760.m_221044.5~5~5~5~5~5~P~A&pub=ab235fdcb823d83f">打开优酷APP，流畅到起飞 </a>
        </button>
    </div>
    <!--视频详情  -->
    <div class="videodetail">
        <div class="videotitle">
            <span class="only" v-show="item.ykonly">独家</span>
            <span class="content-title">{{ item.title }}</span>
            <span class="btn-opendetail" @click="toggleDetail"></span>
        </div>
        <div class="video-score">
            <span class="score">{{ vscore }}</span>
            <span class="playnum">{{ vplaynum }}</span>
        </div>
        <!-- 视频信息详情 -->
        <content-detail v-show="detailShow"></content-detail>
        <div class="video-tool">
            <div class="fl">
                <button class="blue-btn videoQuality">高清 ></button>
            </div>
            <div class="fr ico-tool">
                <a class="ico-download">下载</a>
                <a class="ico-favourite">收藏</a>
                <a class="ico-share">分享</a>
            </div>
        </div>
    </div>
    <choose-video></choose-video>
    <content-comment></content-comment>
    <content-footer></content-footer>
  </div>

</template>
<script>
import myVideo from 'vue-video'
import axios from 'axios'
import contentdetail from './contentdetail'
import choosevideo from './choosevideo'
import contentcomment from './contentcomment'
import contentfooter from './contentfooter'
export default {
    data () {
        return {
            video: {
                sources: [{
                    src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: false,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            },
            item: {},
            detailShow:false
        }
    },
    components: {
        myVideo,
        contentDetail:contentdetail,
        chooseVideo:choosevideo,
        contentComment:contentcomment,
        contentFooter:contentfooter
    },
    mounted (){    
    axios.get('https://www.easy-mock.com/mock/5aa71a287a217a5f4903bd7a/myouku/home')
    .then(response=>{
        var videoType = this.$route.query.type;
        if(videoType === 'tv'){
            this.item = response.data.tvinfo[this.$route.query.id]
        } else if (videoType === 'rec'){
            this.item = response.data.vinfo[this.$route.query.id]
        } else {
            this.item = response.data.pinfo;
        }
    })
    .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
    })
    },
    computed:{
        vscore:function () {
            let s = this.item.score
            return s == null ? '' : s.toFixed(1)+'分';
        },
        vplaynum:function () {
            let n = this.item.playnum;
            return Number.isNaN(n) ? '' : n+'万次播放';
        }
    },
    methods:{
        toggleDetail: function(){
            this.detailShow = !this.detailShow
        }
    }
}
</script>
<style>
/*蓝色圆角按钮通用样式*/
.blue-btn{
    border-radius: 50px;
    background-color:#fff;
    border:1px solid #2692ff;
    color:#2692ff;
}
/*视频工具*/
.video-tool{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    padding:0px 10px 15px 10px;
    border-bottom:1px solid #c2c2c280;
}

.videoQuality{
    width:60px;
    height:25px;
}
/*视频详情*/
.videotitle{
    padding:0px 10px;
}
.videotitle .only{
    display: inline-block;
    background-color: #FA533D;
    padding:1px 4px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
}
.videotitle > .content-title{
    font-size: 1.2rem;
    font-weight: bold;
}
.btn-opendetail {
    float: right;
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
    justify-content: space-between;
    align-items: center;
    height: 44px;
    padding:0px 10px;
}
[class*='_icon']{
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1501124161113) no-repeat;
    background-size:375px 200px;
    display: inline-block;
    width:22px;
    height: 20px;
}
.menu_icon {
    background-position: 0 -30px;
}
.yk-logo_icon {
    width: 86px;
    height: 17px;
    background-position: 0 0;
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
.DownloadAPP{
    margin: 15px auto;
    display: block;
    width:90%;
    height:45px;
    font-size: 16px;
}
/*播放器*/
/*视频信息*/
.video-score{
    font-size:1rem;
    margin-top:10px;
    padding-left: 10px;
}
.score {
    color:#FA533D;
    margin-right:10px;
}
.playnum{
    color:#999;
}
.ico-tool{
    color:#999;
}
.ico-tool a{
    cursor: pointer;
}
</style>

