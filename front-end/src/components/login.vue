<template>
    <div class="body-wrap">
        <!--手机快捷登录顶部-->
        <div class="header-wrap">
            <a class="goback" @click="goback"></a>
            <div class="title" v-if="showfast">手机快捷登录</div>
            <div class="title" v-if="shownormal">账号登录</div>
        </div>
        <!--顶部结束  -->
        <!--手机登录模块  -->
        <form class="middle-wrap" method="post">
            <!--手机快捷登录输入  -->
            <ul class="input-wrap" v-show="showfast">
                <li>
                    <div class="select-country">
                        <span class="text-countryname">中国大陆</span>
                        <span class="text-countrycode">+86</span>
                        <span class="btn-open-countrychoose" @click="showCountryPanel"></span>
                    </div> 
                </li>
                <li><input type="tel" placeholder="手机号码" name="cell" required></li>
                <li><input type="text" placeholder="动态密码" name="password" required></li>
            </ul>
            <!--账号登录输入  -->
            <ul class="input-wrap" v-show="shownormal">
                <li><input type="text" placeholder="手机/邮箱/优酷土豆账号" name="account" required></li>
                <li>
                    <input type="text" placeholder="登录密码" name="password" required>
                    <!-- <span class="forgetpassword">忘记密码</span> -->
                </li>
            </ul>
            <!--按钮  -->
            <button type="submit" class="btn-login" value="登录">登 录</button>
            <div class="text-or">或</div>
            <button type="button" class="btn-switchlogin" @click="normallogin" v-show="showfast">账号登录</button>
            <button type="button" class="btn-switchlogin" @click="fastlogin" v-show="shownormal">手机快捷登录</button>
        </form>
        <!--手机登录模块结束  -->
    
        <!--footer  -->
        <div class="footer-wrap">
            <div class="share-wrap">
                <div class="third-sharelist">
                    <ul>
                        <li><icon name="weibo" scale="20"></icon></li>
                        <li><icon name="qq" scale="20"></icon></li>
                        <li><icon name="wechat" scale="20"></icon></li>
                    </ul>
                </div>
                <div class="footer">
                    <span class="text-gray">还没有账号？</span>
                    <span class="link-signin">立即注册</span>
                </div>
            </div>
        </div>
        <!--国家选择组件 -->
        <div class="countryselect" v-if="showcountry">
            <div class="countryselect-title">国家地区</div>
            <div class="countryselect-main">
                <div class="countryselect-list">
                    <ul>
                        <li class="line">常用</li>
                        <li>
                            <span class="country-name">中国大陆</span>
                            <span class="country-code">+86</span>
                        </li>
                        <li>
                            <span class="country-name">中国台湾</span>
                            <span class="country-code">+886</span>
                        </li>
                        <li>
                            <span class="country-name">中国香港</span>
                            <span class="country-code">+852</span>
                        </li>
                        <li>
                            <span class="country-name">美国</span>
                            <span class="country-code">+1</span>
                        </li>
                        <li>
                            <span class="country-name">日本</span>
                            <span class="country-code">+81</span>
                        </li>
                        <li class="line">A</li>
                        <li>
                            <span class="country-name">澳大利亚</span>
                            <span class="country-code">+61</span>
                        </li>
                        <li>
                            <span class="country-name">阿联酋</span>
                            <span class="country-code">+971</span>
                        </li>
                        <li class="line">B</li>
                        <li>
                            <span class="country-name">巴基斯坦</span>
                            <span class="country-code">+92</span>
                        </li>
                        <li class="line">D</li>
                        <li>
                            <span class="country-name">德国</span>
                            <span class="country-code">+49</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="countryselect-cancle" @click="hideCountryPanel">取消</div>
        </div>
</div>
</template>

<script>
export default{
  data () {
    return {
      shownormal: false,
      showfast: true,
      showcountry: false
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    normallogin () {
      this.showfast = false
      this.shownormal = true
    },
    fastlogin () {
      this.showfast = true
      this.shownormal = false
    },
    showCountryPanel () {
      this.showcountry = true
    },
    hideCountryPanel () {
      this.showcountry = false
    }
  }
}
</script>

<style>
/*国家选择*/
.countryselect {
    position:fixed;
    left:0;
    bottom:0;
    height: 333px;
    width:100%;
    background-color: #fff;
}
.countryselect-title{
    text-align: center;
    font-size:1.2rem;
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #ccc;
    color: #4E4E4E;
}
.countryselect-main {
    height:233px;
    overflow-x:hidden;
    overflow-y:auto;
    border: 1px solid #ccc;
}
.countryselect-list {
    position: relative;
}
.countryselect-list li{
    height: 35px;
    line-height: 35px;
    padding-left:10px;
    padding-right: 10px;
    border-bottom: 1px solid #F0F0F0;
    font-size: 1rem;
}
.country-name {
    float:left;
}
.country-code {
    float: right;
    color:#4E4E4E;
}
.line {
    background-color: #F0F0F0;
    font-size: 12px !important;
    color:#9a9a9a;
    height: 19px !important; 
    line-height: 19px !important;
}

.countryselect-cancle{
    height: 48px;
    line-height: 48px;
    color:#9a9a9a;
    font-size: 1rem;
    text-align: center;
}

/*国家选择*/
.text-gray{
    color:#ccc;
}
*:focus {
    outline: none;
}
.goback {
    display: inline-block;
    width:15px;
    height:15px;
    border-top:1px solid #333;
    border-right:1px solid #333;
    position:absolute;
    top:2%;
    left:5%;
    transform:rotate(-135deg);
    -ms-transform:rotate(-135deg); 	/* IE 9 */
    -moz-transform:rotate(-135deg); 	/* Firefox */
    -webkit-transform:rotate(-135deg); /* Safari 和 Chrome */
    -o-transform:rotate(-135deg); 	/* Opera */
}
.title {
    font-size:18px;
    text-align: center;
    margin:10px;
    color:#333;
}
.header-wrap {
    margin-bottom:30px;
}
.middle-wrap {
    width:80%;
    margin:0 auto;
}
.input-wrap li{
    margin: 10px 0;
    list-style: none;
}
.input-wrap input,.select-country{
    border:1px solid #EEE;
    text-indent: 15px;
    width:100%;
    height:40px;
    border-radius: 45px;
    font-size: 14px;
}
.btn-login,.btn-switchlogin{
    display: block;
    width:100%;
    height:45px;
    border-radius: 45px;
    font-size: 16px;
}
.btn-login{
    background-color: #2692ff;
    border:0px;
    color:white;
}
.text-or{
    color:#ccc;
    text-align: center;
    margin:10px 0px;
    font-size: 12px;
}
.btn-switchlogin{
    background-color: #fff;
    border:1px solid #2692ff;
    color:#2692ff;
}
.select-country{
    position: relative;
}
.text-countryname,.text-countrycode{
    height: 40px;
    line-height: 40px;
}
.text-countrycode {
    display: inline-block;
    position: relative;
    right:-48%;
}
.btn-open-countrychoose{
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
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    }

.share-wrap {
    width: 100%;
    position: absolute;
    left: 0; bottom: 0;
}
.third-sharelist{
    margin-bottom: 10px;
    text-align: center;
}
.third-sharelist ul li{
    list-style: none;
    display: inline-block;
    margin-right: 20px;
}
.third-sharelist svg{
    width:40px;
    height:40px;
}
.footer{
    font-size: 12px;
    margin-bottom:20px;
    text-align: center;
}

</style>

