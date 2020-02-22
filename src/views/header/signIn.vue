<style lang="scss">
</style>
<template lang="pug">
  Form(ref="formInline" :model="login_form" :rules="rule" v-if="show_sign_in").login_form
    FormItem(prop="user")
      Input(type="text" v-model="login_form.user" placeholder="username")
        Icon(type="ios-person-outline" slot="prepend")
    FormItem(prop="password")
      Input(type="password" v-model="login_form.password" placeholder="password")
        Icon(type="ios-lock-outline" slot="prepend")
    FormItem
      Button(type="primary" style="width:100%") Sign in 
  
</template>

<script>
export default {
  props: ["show_sign_in"],
  data() {
    return {
      login_form: {
        user: "",
        password: ""
      },
      rule: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
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