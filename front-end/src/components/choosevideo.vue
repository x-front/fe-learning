<template>
  <div>
    <h3>选集</h3> 
    <ul class="video-list">
        <li v-for="(item,index) in videolist" :key="index">
            <div class="video-p"><img v-bind:src="item.src" v-bind:alt="item.title"></div>
            <p class="video-title">{{ item.title }}</p>
            <p class="video-playnum">{{ item.playnum }}万次播放</p>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'choosevideo',
  data(){
      return {
          videolist:[
              {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'习近平当选中华人民共和国国家主席',
                  playnum:999
              },
              {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'王岐山当选中华人民共和国国家副主席',
                  playnum:999
              },
              {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              },
              {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              },
                            {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              },
                            {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              },
                            {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              },
                            {
                  src:'https://vthumb.ykimg.com/054104085AAC8AC000000000810D8107',
                  title:'宪法宣誓仪式全过程',
                  playnum:999
              }
          ]
      }
  }
}
</script>

<style scoped>
h3,li:first-child{
    padding-left:10px;
}
.video-list {
    overflow-x:auto;
    white-space: nowrap;
    border-bottom:1px solid #c2c2c280;
    padding-bottom:10px;
}
.video-list li{
    display:inline-block;
    width:114px;
    padding-right: 10px;
}
.video-p img{
    width:114px;
    height:64px;
    border-radius: 5px;
    white-space:normal;
}
.video-title,.video-playnum{
    white-space: pre-wrap;
    word-wrap: break-word;
    margin:2px 0px;
}
.video-title{
    font-size:12px;
    height:36px;
}
.video-playnum{
    color:#999;
    font-size:10px;
}
</style>
