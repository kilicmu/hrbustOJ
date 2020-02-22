<style lang="scss">
</style>
<template lang="pug">
  Form(ref="formInline" :model="sign_up_form" :rules="sign_up_rule" v-if="show_sign_up").login_form
    FormItem(prop="user")
      Input(type="text" v-model="sign_up_form.user" placeholder="username")
        Icon(type="ios-person-outline" slot="prepend")
    FormItem(prop="email")
      Input(type="text" v-model="sign_up_form.email" placeholder="email")
        Icon(type="ios-person-outline" slot="prepend")
    FormItem(prop="password")
      Input(type="password" v-model="sign_up_form.password" placeholder="password")
        Icon(type="ios-lock-outline" slot="prepend")
    FormItem
      Button(type="primary" style="width:100%") Sign up
</template>
<script>
export default {
  props: ["show_sign_up"],
  data() {
    return {
      sign_up_form: {
        user: "",
        email: "",
        password: ""
      },
      sign_up_rule: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please fill in the email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please enter the correct email",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>