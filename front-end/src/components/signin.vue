<template>
    <div class="body-wrap">
        <!--手机快捷登录顶部-->
        <div class="header-wrap">
            <a class="goback" @click="goback"></a>
            <div class="title">注册</div>
        </div>
        <!--顶部结束  -->
        <!--输入区域开始  -->
        <form class="middle-wrap" method="post">
            <ul class="input-wrap">
                <li>
                    <div class="select-country">
                        <span class="text-countryname">中国大陆</span>
                        <span class="text-countrycode">+86</span>
                        <span class="btn-open-countrychoose" @click="showCountryPanel"></span>
                    </div> 
                </li>
                <li><input type="tel" placeholder="手机号码" name="cell" required></li>
                <li class="input-verifycode">
                    <input type="text" placeholder="验证码" name="password" required>
                    <span class="getverifycode">获取验证码</span>
                </li>
                <li><input type="tel" placeholder="密码(6-16位字母、数字和符号)" name="cell" required></li>
            </ul>
            <!--按钮  -->
            <button type="submit" class="btn-login" value="登录">完成注册</button>
            <div class="text-loginnow">
                <span class="text-gray">已有账号？</span>
                <span @click="loginnow">立即登录</span>
            </div>
        </form>
        <!--输入区域结束  -->
         <!--footer  -->
        <div class="footer">
            <div class="text-gray">注册即同意
                <router-link to="#">《用户协议》</router-link>
                和
                <router-link to="#">《版权说明》</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    },
    loginnow () {
      this.$router.push({path: '/login'})
    },
    showCountryPanel () {
      alert('hi')
    }
  }
}
</script>

<style>
*:focus {
    outline: none;
}
.text-gray{
    color:#ccc;
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
.text-loginnow{
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
.input-verifycode{
    position: relative;
}
.getverifycode{
    position: absolute;
    right:20px;
    top:10px;
}

.footer{
    width: 100%;
    position: absolute;
    left: 0; bottom: 0;
    font-size: 12px;
    margin-bottom:20px;
    text-align: center;
}
</style>

