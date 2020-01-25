<style lang="scss">
@import "~@/sass/config.scss";
@import "~@/sass/contest/contest.scss";

.l_card {
  margin-right: 5px;
  height: 1100px;
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
      strong {
        color: $standard-context;
        font-size: 24px;
      }
      rank-li {
        margin-top: 200px;
        position: absolute;
      }
    }
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
}
</style>

<template>
  <Content :style="{padding: '0 50px'}">
    <Row>
      <Col span="16">
        <Card class="l_card">
          <transition>
            <contest-list :contest_data="contest_data"></contest-list>
          </transition>
        </Card>
      </Col>
      <Col span="8">
        <div class="r_card">
          <Card class="r_card_1_true" :to="contest_url" v-show="contesting">
            <div class="info">
              <p>您有正在进行的比赛</p>
              <p>点击快速加入 ></p>
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

              <rank-li :contest_data="contest_data"></rank-li>
            </Card>
          </div>
        </div>
      </Col>
    </Row>
  </Content>
</template>

<script>
import rankLi from "./rankLi.vue";
import contestList from "./contestList.vue";
import data from "./test.json";

export default {
  data: function() {
    return {
      contest_url: "/contest/1/", //快速参加url
      contesting: true, //是否正在比赛
      contest_data: data //页面整体数据
    };
  },
  components: {
    "rank-li": rankLi,
    "contest-list": contestList
  }
};
</script>