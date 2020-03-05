<style lang="scss">
@import "~@/sass/config.scss";
.user {
  &_card {
    background: linear-gradient(135deg, #3023ae, #c86dd7);
    height: 800px;
    position: relative;
  }
  &_msg_change {
    position: absolute;
    right: 0;
    top: 10px;
    right: 10px;
    outline: none;
  }
  &_panel {
    width: 600px;
    height: 300px;
    border-radius: 10px;
    padding: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar {
      background-color: rgb(0, 0, 0);
      border-radius: 50%;
      left: 50%;
      top: -25%;
      transform: translate(-50%, 0);
      overflow: hidden;
      position: absolute;
      height: 150px;
      img {
        width: 150px;
      }
    }
  }
  &_name {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    color: $standard-title;
  }
  &_description {
    margin-top: 10px;
    text-align: center;
  }
}
.user_panel:hover {
  box-shadow: rgba(204, 204, 204, 0.699) 5px 5px 25px;
}
.visit_site {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  button {
    height: 40px;
    width: 140px;
    background: linear-gradient(135deg, #710083, #a100b6);
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bolder;
  }
  button:hover {
    cursor: pointer;
    background: linear-gradient(135deg, #7d168d, #9f00b8);
  }
}

.user_footer {
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  display: flex;
  margin-top: 30px;
  span {
    cursor: pointer;
    color: darken($standard-disabled, 30%);
  }
}

.user_footer span::before {
  content: "#";
}

.user_change_msg {
  margin-bottom: 12px;
  p {
    font-size: 14px;
    height: 28px;
  }
}
</style>

<template lang="pug">
div
  Content(:style="{padding: '0 50px'}")
    Card.user_card
      Card.user_panel
        Button(type="text" v-show="change_able" @click="show_modal = true").user_msg_change
          Icon(type="ios-brush-outline")
        div.avatar
          img(src="~@/images/title.jpg" alt="avatar")
        h2.user_name {{user.name}}
        div.user_description
          p {{user.description}}
          p ${{user.from}}
        div.visit_site
          button(@click="visit_blog") Visit Blog
        div.user_footer
          span(v-for="item in user.tags") {{item.value}}
    Modal(v-model="show_modal" width="440")
      p(slot="header") 设置修改您的个人信息
      div
        Form(:model="dynamic_user")
          FormItem().user_change_msg
            p 姓名:
            Input(v-model="dynamic_user.name")
          FormItem().user_change_msg
            p 邮箱:
            Input(v-model="dynamic_user.mail")
          FormItem().user_change_msg
            p 签名:
            Input(type="textarea" v-model="dynamic_user.description")
          FormItem().user_change_msg
            p 居住地:
            Input(v-model="dynamic_user.from")
          FormItem().user_change_msg
            p 姓名:
            Input(v-model="dynamic_user.name")
          FormItem().user_change_msg
            p 博客地址:
            Input(v-model="dynamic_user.blog_url")
        
          p 标签:  
          FormItem(
            v-for="(item,index) in dynamic_user.tags"
            :key="index"
            :label="'tag'+index"
            v-model="item.value"
            
          ).user_change_msg
            Row
              Col(span="16")
                Input(type="text" v-model="item.value" placeholder="Enter something...")
              Col(span="4" offset="1")
                Button(@click="handleRemove(index)") delete
          FormItem  
            Row
              Col(span="12")
                Button(type="dashed" long @click="handleAdd" icon="md-add") Add item
      div(slot="footer") 
        Button(type="primary" @click="submit") 确认修改
        Button(@click="dynamic_user = user;show_modal=false") 取消

        

</template>

<script>
import { valueHasEmpty } from "@/utils/valueHasEmpty";
export default {
  data() {
    return {
      // index: 1,
      user: {
        is_login: false,
        name: "",
        mail: "",
        description: "", //限制五十字
        from: "",
        head_pic: "",
        blog_url: "",
        qq: "",
        wechat: "",
        weibo: "",
        wyy: "",
        tags: []
      },
      dynamic_user: {},
      change_able: false,
      show_modal: false
    };
  },
  methods: {
    //博客访问按钮的处理函数
    visit_blog() {
      window.location.href = "http://www.google.com/";
    },
    //添加标签
    handleAdd() {
      // this.index++;
      if (this.dynamic_user.tags.length > 2) {
        this.$Message["warning"]({
          background: true,
          content: "最大标签上限为3"
        });
        return;
      }
      this.dynamic_user.tags.push({
        value: "",
        empty: false
      });
    },
    handleRemove(index) {
      this.dynamic_user.tags.splice(index, 1);
    },
    submit() {
      //校验邮箱格式
      if (!this.$regs.mailReg.test(this.dynamic_user.mail)) {
        this.$Message["warning"]({
          background: true,
          content: "邮箱格式有误"
        });
        return;
      }
      //检查标签是否存在空标签
      if (valueHasEmpty(this.dynamic_user.tags)) {
        this.$Message["warning"]({
          background: true,
          content: "禁止存在空标签哦"
        });
        return;
      }
      this.$api
        .post_user_massage(this.dynamic_user)
        .then(data => (this.user = this.dynamic_user))
        .catch(e => {
          this.$Message["error"]({
            background: true,
            content: "无法连接服务"
          });
        });
    }
  },
  created() {
    // user_data = query_user_by_username(this.$route.params.uid);
    //TODO修改为相应查找的API
    this.user.name = this.$route.params.uid;
    this.user.from = "Shanghai";
    this.user.description = "no description";
    this.user.mail = "kilicmu3389@outlook.com";
    this.user.blog_url = "http://kilic.site";
    this.user.tags = [
      { empty: false, value: "标签1" },
      { empty: false, value: "标签2" },
      { empty: false, value: "标签3" }
    ];
    if (this.$store.getters.user_name === this.user.name) {
      this.change_able = true;
    }
    this.dynamic_user = this.user;
  },
  computed: {},
  mounted() {}
};
</script>