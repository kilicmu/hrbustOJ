<style lang="scss">
#line {
  position: absolute;
  top: 1000px;
  font-size: 1.5rem;
  color: rgba(28, 202, 255, 0.863);
}
#bck_pic {
  position: absolute;
  background: url("~@/images/header-background.jpg") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 60rem;
  right: 0;
  top: 0;
}
#header_teamwork {
  position: absolute;
  width: 30rem;
  height: 30rem;
  right: 16rem;
  top: 11.25rem;
}

#info {
  position: absolute;
  top: 13.75rem;
  left: 7.5rem;
  width: 34rem;
  h2 {
    font-weight: bolder;
    font-size: 2.6rem;
    color: rgba(0, 163, 212, 0.911);
  }
  p {
    font-size: 0.8rem;
    margin-top: 0.625rem;
  }
}

.start_to_problems {
  margin-top: 5rem;
  width: 10rem;
  height: 2.5rem;
  font-size: 1.2rem;
  line-height: 2.5rem !important;
  text-align: center;
}
</style>

<template lang="pug">
  Content(:style="{padding: '0 50px'}")
    Card
      div(style="min-height: 1600px;" clearfix)
        div(style="position: relative")
          div#bck_pic
          img(src="~@/images/header-teamwork1.svg" v-if="randnum===1")#header_teamwork
          img(src="~@/images/header-teamwork2.svg" v-if="randnum===2")#header_teamwork
          img(src="~@/images/header-teamwork3.svg" v-if="randnum===3")#header_teamwork
          div#info
            h2 An OJ platform
            p You can learn the algorithm here
            p And of course, we're going to take your problem solving information,you can we're going to show you the data with other people           
            Button(type="primary"
              :append="b_append"
              shape="circle"
              class="start_to_problems"
              to="/problems") start
            Button(shape="circle"
              :append="b_append"
              class="start_to_problems"
              style="margin-left: 3.75rem") news
        Divider(dashed)#line Characteristic
        transition(name="cunstom-classes-transition"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutRight"
          :duration="{ enter: 800, leave: 800 }")
          three-cards(v-if="flag")
</template>
<script>
export default {
  data() {
    return {
      b_append: false,
      scroll: null,
      flag: false,
      pic_url: "~@/images/header-teamwork",
      randnum: 1
    };
  },
  methods: {
    menu() {
      this.scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(this.scroll);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    //获取随机数
    this.randnum = Math.ceil(Math.random() * 3);
    //挂载动态脚本(全局挂载出现失效的状况，在此页面再此挂载)
    if (document.documentElement.offsetWidth > 1300) {
      document.documentElement.style.fontSize =
        document.documentElement.offsetWidth / 100 + "px";
    } else {
      document.documentElement.style.fontSize = 13 + "px";
    }
    window.onresize = function() {
      if (document.documentElement.offsetWidth > 1300) {
        document.documentElement.style.fontSize =
          document.documentElement.offsetWidth / 100 + "px";
      } else {
        document.documentElement.style.fontSize = 13 + "px";
      }
    };
  },
  watch: {
    scroll: function(old) {
      if (old >= 400) {
        this.flag = true;
      }
      if (old < 400) {
        this.flag = false;
      }
    }
  }
};
</script>