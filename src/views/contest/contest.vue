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
    margin-top: 60px;
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
</style><template>
  <Content :style="{padding: '0 50px'}">
    <Row>
      <Col span="16">
        <Card class="l_card">
          <transition>
            <contest-list :contest_list="contest_list" v-if="show_contest"></contest-list>
          </transition>
          <Page
            :total="contest_data.contest_list.length"
            page_size="10"
            @on-change="contest_change"
            class="contest_page"
          />
        </Card>
      </Col>
      <Col span="8">
        <div class="r_card">
          <Card class="r_card_1_true" :to="contest_url" v-show="contesting">
            <div class="info">
              <p>您有正在进行的比赛</p>
              <p>点击快速加入></p>
            </div>
            <img src="~@/images/fire.png" />
          </Card>
          <Card class="r_card_1_false" v-show="!contesting">
            <div class="info" v-show="!contesting">
              <p>暂时没有比赛哦</p>
              <p>休息一下吧！</p>
            </div>
          </Card>
          <div class="r_card_2">
            <div class="circle_head"></div>
            <Card class="card">
              <strong>上期排名</strong>
              <transition>
                <rank-li :rank_list="rank_list" v-if="show_rank"></rank-li>
              </transition>
              <Page
                :total="contest_data.rank_list.length"
                @on-change="rank_change"
                class="rank_page"
              />
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  </Content>
</template><script>
import rankLi from "./rankLi.vue";
import contestList from "./contestList.vue";
import data from "./test.json";

export default {
  data: function() {
    return {
      contest_url: "/contest/1/", //快速参加url
      contesting: true, //是否正在比赛
      contest_data: data, //页面整体数据
      contest_list: data.contest_list.slice(0, 10), //目前展示数据
      rank_list: data.rank_list.slice(0, 10),
      show_rank: true,
      show_contest: true
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
    }
  },

  components: {
    "rank-li": rankLi,
    "contest-list": contestList
  },

  mounted() {
    // console.log(data);
  }
};
</script>