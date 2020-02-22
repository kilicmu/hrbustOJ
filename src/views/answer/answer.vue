<style lang='scss'>
@import "~@/sass/config.scss";
.demo-split {
  height: 1000px;
  &-pane {
    padding: 10px;
  }
  #content {
    height: 100%;
  }
}

#rcard {
  width: 100%;
  margin-left: 20px;
}

.ivu-upload {
  display: inline-block;
}
#buttons {
  display: inline-block;
  position: absolute;
}

.circle_button {
  margin-left: 1rem;
}

.button_group {
  float: right;
  margin-left: 10px;
}

#give_up_button {
  margin-right: 0.9375rem;
}

.submit {
  margin-right: 20px;
  float: right;
}

.ivu-tabs-bar {
  margin-bottom: 0 !important;
}

#problem_title {
  font-size: 30px;
}

.introduce {
  color: $standard-info;
  font-size: 26px;
  margin-top: 10px;
}

.problem_introduce {
  color: rgba(0, 6, 10, 0.377);
  font-size: 21px;
  margin-top: 10px;
  display: block;
  border: 1px solid rgba(141, 141, 141, 0.24);
  border-radius: 4px;
}

.problem_introduce_t {
  color: $standard-context;
  font-size: 21px;
  margin-top: 10px;
  display: block;
}

#copyIt {
  float: right;
}

#temp {
  height: 20px;
}

#lcard {
  width: 100%;
  display: inline-block;
  color: rgba(51, 51, 51, 0.466);
  margin-right: 10px;
  font-size: 21px;
  span {
    float: right;
  }

  &_statistic {
    margin-left: 10px;
  }
}

#problem_msg {
  color: rgba(0, 0, 0, 0.288);
  font-size: 22px;
}

#demo {
  margin-top: 10px;
}

.ivu-poptip-body-content {
  overflow: hidden !important;
}

#Filling {
  height: 20px;
}
</style>
<template lang="pug">
  Content(:style="{padding: '0 50px'}")#content
    div(style="{margin: '40px'}")

    Row
      Col(span="10")
        Card#lcard_description
          span#problem_title {{problem_title}}
          Divider(type="vertical")
          Tag(color="success" v-if="difficuly ===1") Easy
          Tag(color="warning" v-if="difficuly ===2") Medium
          Tag(color="error" v-if="difficuly ===3") Hard
          Tag(color="geekblue" v-if="pass ===1") AC

          Poptip(placement="bottom-end" width="300" style="{white-space: normal;float: right;}")
            Button(type="text")
              Icon(type="ios-menu")
            div(slot="content").api
              Card#lcard
                p.introduce Info:
                p id:
                  span {{problem_info.id}}
                p limit_time:
                  span {{problem_info.limit_time}}
                p limit_memory: 
                  span {{problem_info.limit_memory}}
                p from:
                  span {{problem_info.from}}
                p information: 
                  span {{problem_info.information}}
          Divider
          p.introduce Introduce:
          span.problem_introduce_t &nbsp;&nbsp;&nbsp;&nbsp;{{problem_introduce}}
          Divider
          p.introduce In:
          span.problem_introduce_t &nbsp;&nbsp;&nbsp;&nbsp;{{problem_in}}
          p.introduce Out:
          span.problem_introduce_t &nbsp;&nbsp;&nbsp;&nbsp;{{problem_out}}
        div#temp
        Row(v-for="item in problem_demo" :key="item.id")
          Card#demo
            Tooltip(content="copy demo in" class="circle_button" id="copyIt")
              Button(icon="ios-copy-outline" @click="doCopy(item.in)" shape="circle")
            p.introduce In Demo&nbsp;{{item.id}}:
            span.problem_introduce {{item.in}}
            p.introduce Out Demo&nbsp;{{item.id}}:
            span.problem_introduce {{item.out}}
      Col(span="14")
        Card#rcard
          div#tools
            Select(v-model="l_type" style="width:160px")
              Option(v-for="item in types" :value="item.value" :key="item.value") {{ item.label }}
            Select(v-model="l_terminal" style="width:80px")
              Option(v-for="item in terminals"
                :value="item.value"
                :key="item.value") {{ item.label }}
            div#buttons
              Tooltip(content="上传").circle_button
                Upload(action="#" :before-upload="handleUpload")
                  Button(icon="ios-cloud-upload-outline" shape="circle")
              Tooltip(content="清空").circle_button
                Button(icon="md-refresh" @click.prevent="code=''" shape="circle")
            div.button_group
              Button(type="warning" id="give_up_button" @click.prevent="b_give_up=true") GIVE UP
              Button(type="success" @click.prevent="submit") SUBMIT
              Modal(v-model="b_give_up" title="提示" @on-ok="give_up" @on-cancel="cancel_give_up")
                p 确认要放弃吗?
          div#Filling
          div#textarea-m
            MonacoEditor(:width="editorWidth"
              height="1000"
              :theme="l_terminal"
              v-model="code"
              :language="l_type")  
</template>
<script>
export default {
  data() {
    return {
      //题目信息
      split: 0.5,
      problem_title: "A+B Problem",
      problem_introduce:
        "请计算两个整数的和并输出结果。注意不要有不必要的输出，比如'请输入 a 和 b 的值: '，示例代码见隐藏部分。",
      problem_out: "两数之和",
      problem_in: "两个用空格分开的整数.",
      problem_demo: [
        { id: 1, in: "1 1", out: "2" },
        { id: 2, in: "1 21", out: "21 " }
      ],
      problem_in_demo: "",
      problem_info: {
        id: 1,
        title: "A+B Problem",
        limit_time: "100ms",
        limit_memory: "10M",
        from: "root",
        information: ""
      },

      tabs: 2,
      code: "start", //代码内容
      difficuly: 1,
      pass: 1, //0表示通过， 1表示没通过
      types: [
        {
          value: "C",
          label: "C"
        },
        {
          value: "C++",
          label: "C++"
        },
        {
          value: "Java",
          label: "Java"
        }
      ],
      l_type: "C",
      terminals: [
        { value: "vs", label: "vs" },
        { value: "vs-dark", label: "vs-dark" },
        { value: "hc-black", label: "hc-black" }
      ],
      l_terminal: "vs",
      b_give_up: false,
      editorWidth: "0"
    };
  },
  methods: {
    handleTabsAdd() {
      this.tabs++;
    },
    handleUpload(file) {
      let reader = new FileReader();
      if (typeof FileReader === "undefined") {
        this.$Message.error("您的浏览器不支持FileReader接口");
        return false;
      }
      reader.readAsText(file, "utf8");
      reader.onload = () => {
        this.code = reader.result;
      };
      return false;
    },
    give_up() {
      window.location.href = "/problems";
    },
    cancel_give_up() {},

    submit() {
      var type = this.l_type;
      var data = this.code;
      var pjson = { type: type, data: data };
      console.log(pjson);
      this.$http
        .post("/submit", pjson)
        .then(data => {})
        .catch(err => {
          if (err) {
            this.$Notice.error({
              title: "error"
            });
            throw err;
          }
        }); //提交后台
    },
    doCopy(text_in) {
      this.$copyText(text_in).then(
        e => {
          this.$Message.success("copy success");
        },
        e => {
          this.$Message.error("bad copy");
        }
      );
    }
  },
  mounted() {
    this.editorWidth = document
      .getElementById("textarea-m")
      .offsetWidth.toString();
    window.onresize = () => {
      this.editorWidth = document
        .getElementById("textarea-m")
        .offsetWidth.toString();
    };
  }
};
</script>