<style lang="scss">
@import "~@/sass/config.scss";
.topic {
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: $standard-border;
}

.title {
  strong {
    font-size: 30px;
  }
  &_tags {
    position: absolute;
    top: 80px;
    left: 3.875rem;
    right: 3.875rem;
    height: 70%;
  }
}

.question_list {
  margin-top: 60px;
  text-align: center;
  border: false;
  width: 100%;
}

.right_cards {
  margin-left: 10px;
  @for $i from 2 through 3 {
    .right_card_#{$i} {
      margin-top: 5px;
    }
  }
}

.page {
  margin-top: 50px;
  margin-right: 30px;
  float: right;
}

#flush_and_search {
  float: right;
}
</style>
<template>
  <Content :style="{padding: '0 50px'}">
    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="20">
        <Card>
          <div></div>
          <new-li></new-li>
          <div class="title">
            <strong>Problem List:</strong>
            <div class="title_tags">
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

            <List class="question_list">
              <div class="topic">
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
              class="page"
              show-elevator
              :page-size="page_size"
              placement="top"
              :total="problem_num"
              on-change="change_page"
            />
          </div>
        </Card>
      </Col>
      <Col span="4">
        <div class="right_cards">
          <Card class="right_card_1">
            <p slot="title">Your Progress</p>
            <process-pic></process-pic>
          </Card>
          <Card class="right_card_2">
            <p slot="title">Top Hits</p>
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <Card class="right_card_3">
            <p slot="title">Tags</p>
          </Card>
        </div>
      </Col>
    </Row>
  </Content>
</template>

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