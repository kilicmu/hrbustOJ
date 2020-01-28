<style lang="scss">
#r_tmp {
  height: 620px;
  position: relative;
}
.rank_li {
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 32px;
  text-align: center;
  border-bottom: 1px solid rgba(163, 163, 163, 0.397);
  width: 100%;
  .user {
    text-align: left;
    padding: 0;
  }
}
</style>
<template>
  <div id="r_tmp">
    <Row class="rank_li">
      <Col span="4">#</Col>
      <Col span="14" class="user">user</Col>
      <Col span="6">score</Col>
    </Row>
    <Row v-for="item in rank_list" :key="item.id" class="rank_li">
      <Col class="col" span="4">{{item.id}}</Col>
      <Col class="col" span="14">
        <Button type="text" class="user" long :to="'/user/' + item.username">{{item.name}}</Button>
      </Col>
      <Col class="col" span="6">{{item.score}}</Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: ["rank_list"]
};
</script>