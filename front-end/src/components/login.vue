<template>
    <div class="body-wrap">
        <!--手机快捷登录顶部-->
        <div class="header-wrap">
            <a class="goback"> < </a>  <!--官网是怎么实现的图案 -->
            <div class="title">手机快捷登录</div>
        </div>
        <!--顶部结束  -->
        <!--手机登录模块  -->
        <form class="middle-wrap" method="post">
            <ul class="input-wrap">
                <li>
                    <div class="select-country">
                        <span class="text-countryname">中国大陆</span>
                        <span class="text-countrycode">+86</span>
                    </div> <!--国家选择-->
                </li>
                <li><input type="tel" placeholder="手机号码" name="cell" required></li>
                <li><input type="text" placeholder="动态密码" name="password" required></li>
            </ul>
            <button type="submit" class="btn-login" value="登录">登 录</button>
            <div class="text-or">或</div>
            <button type="button" class="btn-normallogin">账号登录</button>
        </form>
        <!--手机登录模块结束  -->
        <div class="share-wrap"</div> 
    </div>
</template>

<script>

</script>

<style>
*:focus {
    outline: none;
}
.goback {
    position:absolute;
    top:10px;
    left:5px;
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
    /*color:#eee;placholder 颜色设置？*/
    width:100%;
    height:40px;
    border-radius: 45px;
    font-size: 14px;
}
.btn-login,.btn-normallogin{
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
.btn-normallogin{
    background-color: #fff;
    border:1px solid #2692ff;
    color:#2692ff;
}
.text-countryname,.text-countrycode{
    line-height: 20px;
}
.select-country span{
    display: inline-block;
    line-height: 20px;
}

</style>

