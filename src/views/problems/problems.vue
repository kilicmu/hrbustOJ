<style lang="scss">
@import "~@/sass/config.scss";
.problem_left_card {
  position: relative;
  height: 1400px;
}

.topic {
  font-weight: bolder;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: $standard-border;
}

.title {
  strong {
    font-size: 24px;
    color: $standard-title;
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

.page_li {
  bottom: 60px;
  right: 40px;
  position: absolute;
}
#flush_and_search {
  float: right;
}

#title {
  text-align: left;
}
</style>
<template lang="pug">
  Content(:style="{padding: '0 50px'}")
    Row(type="flex" justify="center" align="top").code-row-bg
      Col(span="20")
        Card.problem_left_card
          div.title
            strong Problem List:
            div.title_tags
              div#flush_and_search
                Input(v-model="search_val"
                  id="search"
                  search="search"
                  placeholder="Search by"
                  style="width: 200px"
                  maxlength="10"
                  @on-enter="search")
                Button(type="primary" @click="flush")#flush
                  Icon(type="md-refresh" )
            List.question_list
              div.topic
                Row
                  Col(span="2")
                    Icon(type="md-done-all")
                  Col(span="2") #
                  Col(span="8")#title Title
                  Col(span="4") Total
                  Col(span="4") AC Rate
                  Col(span="4") Level
              new-li(:questions="questions")#a_line
            Page(show-elevator
              :page-size="page_size"
              placement="top"
              :total="problem_num"
              @on-change="change_page").page_li
        Spin(size="large" fix v-if="!show_problems_list")
      Col(span="4")
        div.right_cards
          Card.right_card_1
            p(slot="title") Your Progress
            process-pic
          Card.right_card_2
            p(slot="title") Top Hits
            p Content of card
          Card.right_card_3      
            p(slot="title") Tags
          
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      search_val: "",
      hards_num: null,
      mediums_num: null,
      easy_num: null,
      page_size: 20,
      //level: 1:简单 2:中等 3.困难
      tmp_questions: [],
      questions: [],
      show_problems_list: false
    };
  },
  methods: {
    flush() {
      this.show_problems_list = false;
      this.questions = this.all_questions.slice(0, this.page_size);
      setTimeout(() => {
        this.show_problems_list = true;
      }, 300);
    },
    search() {
      this.show_problems_list = false;
      this.tmp_questions = [];
      this.all_questions.forEach(item => {
        if (item.title) {
          console.log(item.title.includes(this.search_val));

          if (item.title.includes(this.search_val)) {
            this.tmp_questions.push(item);
          }
        }
      });
      setTimeout(() => {
        this.show_problems_list = true;
      });
      this.questions = this.tmp_questions.slice(0, this.page_size);
      this.search_val = "";
    },
    change_page(page) {
      this.show_problems_list = false;
      this.questions = this.tmp_questions.slice((page - 1) * 20, page * 20);
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.show_problems_list = true;
      }, 300);
    },
    ...mapMutations(["set_all_questions"])
  },
  created() {
    this.show_problems_list = false;
    this.$api
      .problems_init()
      .then(data => {
        this.set_all_questions(data.data);
        this.tmp_questions = this.all_questions;
        this.questions = this.tmp_questions.slice(0, 20);
      })
      .catch(e => {
        console.log(e);
        this.$Message.error("服务器开小差了");
      });

    setTimeout(() => {
      this.show_problems_list = true;
    }, 300);
  },
  computed: {
    ...mapState(["all_questions"]),
    problem_num: function() {
      return this.tmp_questions.length;
    }
  }
};
</script>