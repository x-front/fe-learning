<template>
  <ul id="nav">
      <li v-for="(item,index) in navlist" :class="{ current: index === currentselect } " :key="item" @click="current(index)">
        <!-- <li v-for="(item,index) in navlist"  active-class="current" :key="item"> -->
        <router-link  :to="item.href">
          {{ item.txt }}
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'my-nav',
  data () {
    return {
      navlist: [
        {
          txt: '首页',
          href: '#'
        },
        {
          txt: '会员',
          href: '#'
        },
        {
          txt: '直播',
          href: '#'
        },
        {
          txt: '剧集',
          href: '#'
        },
        {
          txt: '电影',
          href: '#'
        },
        {
          txt: '综艺',
          href: '#'
        },
        {
          txt: '音乐',
          href: '#'
        },
        {
          txt: '动漫',
          href: '#'
        },
        {
          txt: '少儿',
          href: '#'
        },
        {
          txt: '资讯',
          href: '#'
        },
        {
          txt: '文化',
          href: '#'
        },
        {
          txt: '纪实',
          href: '#'
        },
        {
          txt: '财经',
          href: '#'
        },
        {
          txt: '体育',
          href: '#'
        },
        {
          txt: '汽车',
          href: '#'
        },
        {
          txt: '科技',
          href: '#'
        },
        {
          txt: '游戏',
          href: '#'
        },
        {
          txt: '搞笑',
          href: '#'
        },
        {
          txt: '旅游',
          href: '#'
        },
        {
          txt: '时尚',
          href: '//fashion.youku.com/'
        },
        {
          txt: '亲子',
          href: '//baby.youku.com/'
        },
        {
          txt: '教育',
          href: '//edu.youku.com/ '
        }
      ],
      hasError: false,
      currentselect: 0
    }
  },
  methods: {
    current (index) {
      this.currentselect = index
    }
  }
}
</script>

<style>
/*菜单栏*/
#nav {
  border-bottom: 3px solid #ccc;
  overflow-x: auto;
  white-space: nowrap;
  margin:0 10px;
  color:#555;
}

/*隐藏滚动条*/
#nav::-webkit-scrollbar {
  display:none;
}

#nav li {
  list-style: none;
  display: inline-block;
  margin-top:12px;
  padding-right: 26px;
  padding-bottom: 8px;
  font-size: 18px;
}

#nav .current a{
  border-bottom:2px solid #06a7e1; /*搞不定样式*/
}
</style>

