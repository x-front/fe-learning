<template>
  <div>
      <p class="cmt-title">评论</p>
      <div class="cmt-wrap">
          <div class="cmt-ico-user"></div>
          <input class="cmt-input-comment" type="text" value="还没有评论，快来说说你的感受吧">
      </div>
      <div class="cmt-list nocomment">
          <p>快来写第一个评论吧</p>
      </div>
  </div>
</template>
<style  scoped>
.cmt-title{
    font-size:16px;
    padding-left: 10px;
}
.cmt-wrap{
    display: flex;
    padding:0px 10px;
}
.cmt-ico-user{
    background: url(http://css.ykimg.com/youku/dist/img/comments/mobile/i_3YQLoSU.png);
    width:36px;
    height: 35px;
    background-size: 100px;
    flex:none;
}
.cmt-input-comment{
    box-sizing: border-box;
    height: 35px;
    border:1px solid #e3e3e3;
    border-radius: 15px;
    color:#e3e3e3;
    background-color:#f7f7f7;
    flex:1;
    margin-left:10px;
    padding:0px 10px;
}
.nocomment{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cmt-list{
    border-bottom:1px solid #e3e3e3;
}
</style>
