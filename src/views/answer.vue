<style>
.demo-split {
  height: 1000px;
  /* border: 1px solid #dcdee2; */
}
.demo-split-pane {
  padding: 10px;
}

#content {
  height: 100%;
}

#lcard {
  margin-right: 10px;
}

#rcard {
  width: 100%;
  margin-left: 10px;
}

textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.textarea-group {
  margin-top: 30px;

  width: 100% !important;
}

.textarea-wrap {
  height: 1000px !important;
}

.textareasubmit {
  height: 1000px;
  width: 100% !important;
  font-size: 16px;
  border: none;
  /* outline: none; */
  background-color: rgb(255, 255, 255);
  resize: none;
  overflow: scroll;
  overflow-x: hidden;
}

#tool {
  text-align: center;
  position: relative;
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
  font-size: 1.5rem;
}

#introduce {
  color: rgb(23, 170, 255);
  font-size: 1.25rem;
  margin-top: 10px;
}

#problem_introduce {
  color: rgba(0, 6, 10, 0.377);
  font-size: 1rem;
  margin-top: 10px;
  display: block;
}
</style>
<template>
  <Content :style="{padding: '0 50px'}" id="content">
    <div style="{margin: '40px'}"></div>

    <Row>
      <Col span="10">
        <Tabs type="card">
          <TabPane id="tabPane" label="problem description">
            <Card id="lcard_description">
              <span id="problem_title">{{problem_title}}</span>
              <Divider type="vertical" />
              <Tag color="success" v-if="difficuly ==1">Easy</Tag>
              <Tag color="warning" v-if="difficuly ==2">Medium</Tag>
              <Tag color="error" v-if="difficuly ==3">Hard</Tag>
              <Divider />
              <p id="introduce">Introduce:</p>
              <span id="problem_introduce">&nbsp;&nbsp;&nbsp;&nbsp;{{problem_introduce}}</span>
              <Divider />
              <p id="introduce">In:</p>
              <span id="problem_introduce">&nbsp;&nbsp;&nbsp;&nbsp;{{problem_in}}</span>
              <p id="introduce">Out:</p>
              <span id="problem_introduce">&nbsp;&nbsp;&nbsp;&nbsp;{{problem_out}}</span>
            </Card>
          </TabPane>
          <TabPane label="limit">
            <Card id="lcard_description">
              <span>限制条件</span>
              <Divider />
            </Card>
          </TabPane>
        </Tabs>
        <Row>
          <Col span="12">
            <Card id="in_demo">
              <Button icon="ios-copy-outline" @click.prevent="doCopy" shape="circle"></Button>
              <p id="introduce">In Demo:</p>
              <Divider />
              <span id="problem_introduce">&nbsp;&nbsp;&nbsp;&nbsp;{{problem_in_demo}}</span>
            </Card>
          </Col>
          <Col span="12">
            <Card id="out_demo">
              <p id="introduce">Out Demo:</p>
              <Divider />
              <span id="problem_introduce">&nbsp;&nbsp;&nbsp;&nbsp;{{problem_out_demo}}</span>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span="14">
        <Card id="rcard">
          <div id="tools">
            <Select v-model="l_type" style="width:160px">
              <Option v-for="item in types" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <div id="buttons">
              <Tooltip content="上传" class="circle_button">
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  :before-upload="handleUpload"
                >
                  <Button icon="ios-cloud-upload-outline" shape="circle"></Button>
                </Upload>
              </Tooltip>
              <Tooltip content="清空" class="circle_button">
                <Button icon="md-refresh" @click.prevent="code=''" shape="circle"></Button>
              </Tooltip>
            </div>
            <div class="button_group">
              <Button type="warning" id="give_up_button" @click.prevent="b_give_up=true">GIVE UP</Button>
              <Button type="success" @click.prevent="b_submit=true">SUBMIT</Button>
              <Modal v-model="b_give_up" title="提示" @on-ok="give_up" @on-cancel="cancel_give_up">
                <p>确认要放弃吗?</p>
              </Modal>
              <Modal v-model="b_submit" title="submit?" @on-ok="submit" @on-cancel="cancel_submit">
                <p>提交不可修改,是否提交?</p>
              </Modal>
            </div>
          </div>
          <textarea name="code_area" v-model="code" class="textareasubmit"></textarea>
        </Card>
      </Col>
    </Row>
  </Content>
</template>


<script>
export default {
  data() {
    return {
      split: 0.5,
      problem_title: "A+B Problem",
      problem_introduce:
        "请计算两个整数的和并输出结果。注意不要有不必要的输出，比如'请输入 a 和 b 的值: '，示例代码见隐藏部分。",
      problem_out: "两数之和",
      problem_in: "两个用空格分开的整数.",
      problem_in_demo: "1 11 11 11 11 11 11 11 11 11 1",
      problem_out_demo: "2",
      tabs: 2,
      code: "", //代码内容
      difficuly: 1,

      types: [
        {
          value: "1",
          label: "C"
        },
        {
          value: "2",
          label: "C++"
        },
        {
          value: "3",
          label: "Java"
        }
      ],
      l_type: "1",
      b_give_up: false,
      b_submit: false
    };
  },
  methods: {
    handleTabsAdd() {
      this.tabs++;
    },
    handleUpload(file) {
      try {
        let reader = new FileReader();
        if (typeof FileReader === "undefined") {
          alert("您的浏览器不支持FileReader接口");
          return false;
        }
        reader.readAsText(file, "utf8");
        reader.onload = () => {
          this.code = reader.result;
          console.log(this.code);
        };
      } catch (e) {
        alert(e);
      } finally {
        return false;
      }
    },
    give_up() {
      window.location.href = "/problems";
    },
    cancel_give_up() {},
    cancel_submit() {},
    submit() {
      var type = this.l_type;
      var data = this.code;
      var pjson = { type: type, data: data };
      this.$http.post("/submit", pjson); //提交后台
    },
    doCopy() {
      this.$copyText(this.problem_in_demo);
    }
  },
  mounted() {
    console.log(this.$route.params.problem_id); //问题id

    $(".textareasubmit").setTextareaCount({
      width: "30px",
      bgColor: "#E9E9E9",
      color: "#000000",
      display: "inline-block"
    });
  }
};
</script>