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

<template lang="pug">
  div
    Row(v-for="item in questions" :key="item.id" style="{weight:100%}")#a_li
      Col(span="2" class="col")
        Icon(type="md-done-all" v-if="item.pass")
        Icon(type="md-lock" v-else="item.pass")
      Col(span="2").col {{item.id}}
      Col(span="8").col
        Button(type="text" id="position" :to="'/problems/'+item.id") {{item.title}}
      Col(span="4").col {{item.acceptance}}
      Col(span="4").col {{item.level}}
      Col(span="4").col
        a(@click="show_state = true")
          Tag(color="success" class="tag" v-if="item.level === 1") Easy
          Tag(color="warning" class="tag" v-if="item.level === 2") Medium
          Tag(color="error" class="tag" v-if="item.level === 3") Hard
        Modal(v-model="show_state" title="Modal Title" ok-text="OK" cancel-text="Cancel")
</template>
<script>
export default {
  data: function() {
    return { show_state: false };
  },
  methods: {
    show_state: function() {}
  },
  props: ["questions"]
};
</script>