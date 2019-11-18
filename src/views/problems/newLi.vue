<template>
  <div>
    <Row v-for="item in questions" :key="item.id" style="{weight:100%}" id="a_li">
      <Col span="2" class="col">
        <Icon type="md-done-all" v-if="item.pass" />
        <Icon type="md-lock" v-else="item.pass" />
      </Col>
      <Col class="col" span="2">{{item.id}}</Col>

      <Col span="8" class="col">
        <Button type="text" id="position" :to="'/problems/'+item.id">{{item.title}}</Button>
      </Col>

      <Col class="col" span="4">{{item.acceptance}}</Col>
      <Col class="col" span="4">{{item.level}}</Col>
      <Col class="col" span="4">
        <Tag color="success" class="tag" v-if="item.level === 1">Easy</Tag>
        <Tag color="warning" class="tag" v-if="item.level === 2">Medium</Tag>
        <Tag color="error" class="tag" v-if="item.level === 3">Hard</Tag>
      </Col>
    </Row>
  </div>
</template>

<style>
#a_li {
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 32px;
  text-align: center;
  border-bottom: 1px solid rgba(163, 163, 163, 0.397);
}

#position {
  width: 100%;
  padding-left: 0;
  text-align: left;
}

.tag {
  text-align: center;
  font-size: 12px;
}
</style>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["questions"]
};
</script>