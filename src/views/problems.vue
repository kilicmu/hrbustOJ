<template>
  <Content :style="{padding: '0 50px'}">
    
    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="20">
        <Card>
          
            <div></div>
            <new-li></new-li>
            <div id="title_strong">
              <strong>Problem List:</strong>
              <div id="title_tags">
                <Button class="title_tags" shape="circle" type="success">Easys</Button>
                <Button class="title_tags" shape="circle" type="warning">Mediums</Button>
                <Button class="title_tags" shape="circle" type="error">Hards</Button>

                <div id="flush_and_search">
                  <Input
                    v-model="search_val"
                    id="search"
                    search="search"
                    placeholder="Search by"
                    style="width: 200px"
                    maxlength="10"
                    @on-enter="search"
                  />
                  <Button id="flush" type="primary" @click="flush">
                    <Icon type="md-refresh" />
                  </Button>
                </div>
              </div>

              <List style="{border:false; width:100%;}" id="question_list">
                <div id="topic">
                  <Row>
                    <Col span="2">
                      <Icon type="md-done-all" />
                    </Col>
                    <Col span="2">#</Col>
                    <Col span="8" id="title">Title</Col>
                    <Col span="4">Total</Col>
                    <Col span="4">AC Rate</Col>
                    <Col span="4">Level</Col>
                  </Row>
                </div>
                <new-li :questions="questions" id="a_line"></new-li>
              </List>
              <Page
                id="page"
                show-elevator
                :page-size="page_size"
                placement="top"
                :total="problem_num"
                on-change="change_page"
              />
            </div>
          </div>
        </Card>
      </Col>
      <Col span="4">
        <div id="right_cards">
          <Card id="right_card_1">
            <p slot="title">Your Progress</p>
            <process-pic></process-pic>
          </Card>
          <Card id="right_card_2">
            <p slot="title">Top Hits</p>
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <Card id="right_card_3">
            <p slot="title">Tags</p>
          </Card>
        </div>
      </Col>
    </Row>
  </Content>
</template>

<style>
#topic {
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgba(163, 163, 163, 0.212);
}

#flush_and_search {
  float: right;
}

#title_strong strong {
  font-size: 30px;
}

#question_list {
  margin-top: 60px;
  text-align: center;
}

#right_cards {
  margin-left: 10px;
}
#ctl_list {
  float: right;
}

#title {
  text-align: left;
}

#title_tags {
  position: absolute;
  top: 80px;
  left: 3.875rem;
  right: 3.875rem;
  height: 70%;
}

.title_tags {
  margin-left: 20px;
}

#page {
  margin-top: 50px;
  margin-right: 30px;
  float: right;
}
</style>

<script>
export default {
  data: function() {
    return {
      search_val: "",
      hards_num: null,
      mediums_num: null,
      easy_num: null,
      page_size: 20,
      //level: 1:简单 2:中等 3.困难
      questions: require("./test.json")["data"].slice(0, 20)
    };
  },
  methods: {
    flush() {
      /*重新请求接口 */
      //this.$http.get("url").then(response=>{this.someData = response.body;}, response=>{//handleerror})
    },
    search() {
    //   console.log(this.search_val);
      /*查询请求接口*/
      //var data = {data:this.search_val}
      //this.$http.post("url", data).then(response=>{this.someData = response.body;}, response=>{//handleerror})

      this.search_val = "";
    },
    change_page(pg) {
      //this.$http.get("url?page=pg").then(response=>{this.someData = response.body;}, response=>{//handleerror})
    }
  },
  computed: {
    problem_num: function() {
      return this.questions.length;
    }
  }
};
</script>