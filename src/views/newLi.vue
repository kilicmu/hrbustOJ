<template>
  <div>
    <Row v-for="item in questions" :key="item.id" style="{weight:100%}" id="a_li">
      <Col span="2" class="col">
        <Icon type="md-done-all" :v-if="item.pass" />
        <Icon type="md-lock" :v-else="item.pass" />
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
.super-link {
  position: relative;
  text-decoration: none;
  color: rgba(0, 174, 255, 0.87);
}

.super-link::after {
  content: "";
  width: 100%;
  height: 1px; /*设置伪元素的高度，这里是下划线的粗细*/
  position: absolute;
  top: 100%;
  left: 0;

  background-color: currentColor; /*当前标签继承的文字颜色，这里让伪元素的背景色与父元素的文字颜色相同*/
  transform: scale(0);
  transition: all 0.35s;
}
.super-link:hover::after {
  transform: scale(1);
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