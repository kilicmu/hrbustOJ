<style lang="scss">
.rank_li {
  height: 100%;
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
.page {
  margin-top: 10px;
  text-align: center;
}
</style>
<template>
  <div>
    <Row class="rank_li">
      <Col span="4">#</Col>
      <Col span="14" class="user">user</Col>
      <Col span="6">score</Col>
    </Row>
    <Row v-for="item in l_data" :key="item.id" class="rank_li">
      <Col class="col" span="4">{{item.id}}</Col>
      <Col class="col" span="14">
        <Button type="text" class="user" long :to="'/user/' + item.username">{{item.name}}</Button>
      </Col>
      <Col class="col" span="6">{{item.score}}</Col>
    </Row>
    <div class="page">
      <Page :total="rank_list.length" @on-change="on_change" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["rank_list"],

  data() {
    return { l_data: this.rank_list.slice(0, 10), page_size: 10 };
  },
  methods: {
    on_change: function(page) {
      this.l_data = this.rank_list.slice((page - 1) * 10, page * 10);
      //   l_data = this.data.slice(page, page + 10);
      //   console.log(this.l_data);
    }
  },
  mounted() {}
};
</script>