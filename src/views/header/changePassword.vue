<style lang="scss">
.change_password {
  &_userinput {
    width: 100%;
  }
  &_confirm {
    width: 100%;
  }
  &_code {
    width: 220px;
    float: left;
  }
  &_send {
    width: 125px;
    float: right;
  }
}
</style>
<template lang="pug">
  Form(ref="formInline" :model="change_password_form" :rules="change_password_rule" v-if="show_change_password" inline).login_form
    FormItem(prop="user").change_password_userinput
      Input(type="text" v-model="change_password_form.user" placeholder="username/email")
        Icon(type="ios-person-outline" slot="prepend")
    FormItem(prop="check_code").change_password_code
      Input(type="text" v-model="change_password_form.check_code" placeholder="check code" )
    FormItem.change_password_send
      Button(type="info" style="width:100%" @click="send_code") send
    FormItem.change_password_confirm
      Button(type="primary" style="width:100%") confirm 
</template>
<script>
export default {
  props: ["show_change_password"],
  data() {
    return {
      change_password_form: {
        user: "",
        check_code: ""
      },
      change_password_rule: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        check_code: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    send_code(e) {
      e.target.disabled = true;
      function checking() {
        let count = 60;
        let inter = setInterval(() => {
          if (count > 0) {
            e.target.innerText = `Remaining ${count}s`;
            count--;
          } else {
            e.target.disabled = false;
            e.target.innerText = "resend";
            clearInterval(inter);
          }
        }, 1000);
      }
      checking();
    }
  }
};
</script>