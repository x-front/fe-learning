<template>
  <div name="backtop" class="rsidebar" v-show="visible">
      <ul>
        <li><a @click="goTop"><i class="ico-gotop"></i></a></li>
        <li><a><i class="ico-user"></i></a></li> 
        <li><a><i class="ico-feedback"></i><span>反馈</span></a></li>
      </ul>
    </div>
</template>


<script>
export default {
  name: 'back-top',
  props:{
    visibleHeight: { // 按钮出现条件
        type: Number,
        default: 400
    },
    rate: {
        type: Number, // 滚动速率
        default: 4
    },
},
data() {
    return {
        scrollTop: '',
        visible: false, // 是否显示
        interval: null  // 定时器
    }
},
mounted() {
    // Dom加载完毕时监听scroll事件
    window.addEventListener('scroll', this.handleScroll)
},
beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
        if (this.interval) {
            clearInterval(this.interval)
        }
},
methods:{
    handleScroll() {
        // 判断条件
        this.visible = window.pageYOffset > this.visibleHeight
        this.scrollTop = window.pageYOffset
    },
    goTop(e) {
        this.interval = setInterval(()=>{
            this.scrollTop = this.scrollTop + (-this.scrollTop)/this.rate
            window.scrollTo(0,this.scrollTop)
            if(this.scrollTop <= 0){
                window.scrollTo(0,0)
                clearInterval(this.interval)
            }
        },13)
    }
}
}
</script>

<style scoped>
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
