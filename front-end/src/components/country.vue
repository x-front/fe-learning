<template>
<div class="countryselect" v-show="status.show" :show="status.show">
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
</template>
<script>
export default {
  name: 'my-country',
  data () {
    return {
      status: {
        show: false
      }
    }
  },
  methods: {
    hideCountryPanel () {
      this.status.show = false //
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
</style>

