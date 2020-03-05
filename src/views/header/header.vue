<style scoped>
.ivu-layout-header {
  background: #ffffff00;
  padding: 0;
}

#head {
  box-shadow: 2px 2px 2px #adadad79;
}

#group {
  float: right;
}

#login {
  margin-right: 120px;
}

#school_icon {
  margin-left: 30px;
  width: 50px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  float: left;
}

#icon {
  margin-top: 5px;
  background: url("~@/images/logo.png") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 60px;
}

#school_name {
  float: left;
  margin-top: 3px;
  margin-left: 20px;
  height: 60px;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: rgba(54, 54, 54, 0.507);
}
</style>
<template lang="pug">
  Menu(mode="horizontal" :theme="theme1" :active-name="is_active")#head
    div#school_icon
      div#icon
    p#school_name
    div#group
      MenuItem(name="home" to="/")
        Icon(type="ios-home")
        span Home 
      MenuItem(name="problems" to="/problems")
        Icon(type="md-code") 
        span Problems
      MenuItem(name="contest" to="/contest")
        Icon(type="md-trophy") 
        span Contest
      MenuItem(name="status" to="/status")
        Icon(type="md-stats") 
        span Status
      MenuItem(name="rank" to="/rank")
        Icon(type="ios-people")
        span Rank
      Submenu(name="about")
        template(slot="title")
          Icon(type="ios-menu") 
          span About
        MenuGroup(title="about")
          MenuItem(name="about_notice") 关于
          MenuItem(name="about_developer") 提意见
        MenuGroup(title="who")
          MenuItem(name="who_am_i")
      span(class="ivu-avatar ivu-avatar-circle ivu-avatar-icon")
        i(class="ivu-icon ivu-icon-ios-person")

      button(type="button" @click="show_conversion=true" class="ivu-btn ivu-btn-text ivu-btn-large") Sign in 
      Modal(v-model="show_conversion" title="Welcome" width="400" mask-closable)
        sign-in(:show_sign_in="show_sign_in")
        sign-up(:show_sign_up="show_sign_up")
        change-password(:show_change_password="show_change_password")
        div(slot='footer' v-if="show_sign_in")
          a(style="float:left" @click="show_change_password=true; show_sign_in=false;") forget password
          a(@click="show_sign_in=false; show_sign_up=true") create a account
        div(slot='footer' v-if="show_sign_up" style="text-align:center")
          span already have account?
          a(@click="show_sign_in=true; show_sign_up=false" style="margin-left:10px") sign in
        div(slot='footer' v-if="show_change_password" style="text-align:center")
          span No account yet?
          a(@click="show_change_password=false; show_sign_up=true" style="margin-left:10px") create a account


      Dropdown#login
        a(href="javascript:void(0)")
          Icon(type="ios-arrow-down")
        DropdownMenu(slot="list")
          DropdownItem(@click="show_change_password_by_dropdown").drop_down_item 修改密码
          DropdownItem(divided) 退出登录

      
  
</template>


<script>
import signIn from "@/views/header/signIn.vue";
import signUp from "@/views/header/signUp.vue";
import changePassword from "@/views/header/changePassword.vue";
export default {
  components: {
    "sign-in": signIn,
    "sign-up": signUp,
    "change-password": changePassword
  },
  data() {
    return {
      show: false,
      theme1: "light",
      w: "1600",
      is_active: "home",
      show_conversion: false,
      show_sign_in: true,
      show_sign_up: false,
      show_change_password: false
    };
  },
  methods: {
    change_sign_in() {
      this.show_sign_in = true;
    },
    show_change_password_by_dropdown() {
      console.log("click");
    }
  },
  watch: {
    "$route.path": function() {
      let path = window.location.pathname;
      let patt = new RegExp("/([A-Z]*)", "i");
      let act = patt.exec(path)[1];
      if (act === "") {
        this.is_active = "home";
      } else {
        this.is_active = patt.exec(path)[1];
      }
    }
  }
};
</script>

