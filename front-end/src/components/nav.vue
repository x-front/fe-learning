<template>
  <ul id="nav">
      <li v-for="(item,index) in navlist" :class="{ current: index === currentselect } " :key="item" @click="current(index)">
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
          href: '//www.youku.com'
        },
        {
          txt: '会员',
          href: '#'
        },
        {
          txt: '直播',
          href: '//live.youku.com/'
        },
        {
          txt: '剧集',
          href: '//tv.youku.com/'
        },
        {
          txt: '电影',
          href: '//movie.youku.com/'
        },
        {
          txt: '综艺',
          href: '//zy.youku.com/'
        },
        {
          txt: '音乐',
          href: '//music.youku.com/'
        },
        {
          txt: '动漫',
          href: '//comic.youku.com/'
        },
        {
          txt: '少儿',
          href: '//child.youku.com/'
        },
        {
          txt: '资讯',
          href: '//news.youku.com/'
        },
        {
          txt: '文化',
          href: '//culture.youku.com/'
        },
        {
          txt: '纪实',
          href: '//jishi.youku.com/'
        },
        {
          txt: '财经',
          href: '//finance.youku.com/'
        },
        {
          txt: '体育',
          href: '//sports.youku.com/'
        },
        {
          txt: '汽车',
          href: '//auto.youku.com/'
        },
        {
          txt: '科技',
          href: '//tech.youku.com/'
        },
        {
          txt: '游戏',
          href: '//game.youku.com/'
        },
        {
          txt: '搞笑',
          href: '//fun.youku.com/'
        },
        {
          txt: '旅游',
          href: '//travel.youku.com/'
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

