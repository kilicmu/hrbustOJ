<style lang="scss">
@import "~@/sass/config.scss";
@import "~@/sass/contest/contest.scss";
@include flash-animation;
@include switch-list-animation;

.l_card {
  margin-right: 5px;
  height: 1100px;
  position: relative;

  .contest_page {
    position: absolute;
    right: 20px;
    bottom: 45px;
  }
}

.r_card {
  @include contest_card("true", rgba(255, 255, 255, 0.767), #ff4800);
  @include contest_card("false", rgba(31, 31, 31, 0.815), #b3b3b3);

  &_2 {
    margin-top: 30px;
    position: relative;

    .circle_head {
      background: url("~@/images/plate.png") no-repeat scroll left center/ 100px
        100px;
      height: 100px;
      width: 100px;

      top: -50px;
      left: 50%;
      margin-left: -50px;
      position: absolute;
      border-radius: 50%;
      z-index: 900;
    }

    .card {
      width: 100%;
      height: 620px;
      position: relative;

      strong {
        color: $standard-context;
        font-size: 24px;
      }

      rank-li {
        margin-top: 200px;
        position: absolute;
      }

      .rank_page {
        margin-top: 10px;
        bottom: 20px;
        right: 20px;
        position: absolute;
      }
    }
  }

  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
}
</style>
<template lang='pug'>
  Content(:style="{padding: '0 50px'}")
    Row
      Col(span="16")
        Card.l_card
          transition(name="flash")
            contest-list(:contest_list="contest_list" v-if="show_contest")
          Spin(size="large" fix v-if="spin_show")
          Page(:total="contest_page"
            page_size="10"
            @on-change="contest_change"
            class="contest_page")
      Col(span="8")
        div.r_card
          Card(:to="contest_url" v-show="contesting").r_card_1_true
            div.info
              p 您有正在进行的比赛 
              p 点击快速加入
            img(src="~@/images/fire.png")
          Card(v-show="!contesting").r_card_1_false
            div(v-show="!contesting").info
              p 暂时没有比赛哦 
              p 休息一下吧！
          div.r_card_2
            
            Card.card
              strong 上期排名 
              transition(name="flash")
                rank-li(:rank_list="rank_list" v-if="show_rank")
              Spin(size="large" fix v-if="spin_show") 
              Page(:total="rank_page" @on-change="rank_change" class="rank_page")
          
</template><script>
import rankLi from "./rankLi.vue";
import contestList from "./contestList.vue";
import { mapState, mapMutations } from "vuex";
// import data from "./test.json";

export default {
  data: function() {
    return {
      contest_url: "/contest/1/", //快速参加url
      contesting: false, //是否正在比赛
      //页面整体数据
      contest_list: [], //目前展示数据
      rank_list: [],
      show_rank: true,
      show_contest: true,
      rank_page: 0,
      contest_page: 0,
      spin_show: true
    };
  },

  methods: {
    contest_change: function(page) {
      this.show_contest = false;
      this.contest_list = this.contest_data.contest_list.slice(
        (page - 1) * 10,
        page * 10
      );
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.show_contest = true;
      }, 300);
    },

    rank_change: function(page) {
      this.show_rank = false;
      this.rank_list = this.contest_data.rank_list.slice(
        (page - 1) * 10,
        page * 10
      );
      setTimeout(() => {
        this.show_rank = true;
      }, 300);
    },
    ...mapMutations(["set_contest_data"])
  },

  components: {
    "rank-li": rankLi,
    "contest-list": contestList
  },

  created() {
    this.$api
      .contest_init()
      .then(async data => {
        this.set_contest_data(data);
        this.contest_list = this.contest_data.contest_list.slice(0, 10);
        this.rank_list = this.contest_data.rank_list.slice(0, 10);
        this.contesting = this.contest_data.contesting;
        this.rank_page = this.contest_data.rank_list.length;
        this.contest_page = this.contest_data.contest_list.length;
        this.spin_show = false;
      })
      .catch(err => {
        this.$Message.error("服务器开小差了");
        console.log(err);
        this.spin_show = false;
      });

    // console.log(data);
  },
  computed: {
    ...mapState(["contest_data"])
  }
};
</script>