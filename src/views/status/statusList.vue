<style lang="scss">
.status_list {
  &_title {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bolder;
  }
  &_sub {
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 26px;
  }
  &_item:nth-child(2n-1) {
    background-color: rgba(231, 231, 231, 0.486);
  }
  &_item:nth-child(2n) {
    background-color: rgb(255, 255, 255);
  }
}

.show_status_btn {
  width: 100%;
  height: 100%;
}
</style>
<template lang="pug">
div
  List(border).status_list
    ListItem.status_list_item
      Row.status_list_title
        Col(span=4) when
        Col(span=3) id
        Col(span=3) info
        Col(span=3) time
        Col(span=3) memory
        Col(span=3) Language
        Col(span=3) anuther
        Col(span=2) status
    ListItem(v-for="item in show_status_data" :key="item.id").status_list_item
      Row.status_list_sub
        Col(span=4) 
          Time(:time="item.when" type="datetime")
        Col(span=3) {{item.id}}
        Col(span=3) 
          Tag(color="blue" v-show="item.info_state === 'success'") {{item.info_massage}}
          Tag(color="orange" v-show="item.info_state === 'warring'") {{item.info_massage}} 
          Tag(color="red" v-show="item.info_state === 'error'") {{item.info_massage}} 
        Col(span=3) {{item.time}}
        Col(span=3) {{item.memory}}
        Col(span=3) {{item.language}}
        Col(span=3) {{item.anuther}}
        Col(span=2) 
          Button(type="text" @click="show=true").show_status_btn
            Icon(type="ios-trending-up").status_icon
        Modal(
          v-model="show"
          title="STATUS"
          @on-ok="ok"
          @on-cancel="cancel"
        )
          div#app
            div(id="main" style="width: 500px; height:500px;")
            HR(style="FILTER: alpha(opacity=10,finishopacity=0,style=3);" width="100%" size="2")
          
  
    
</template>
<script>
import statusChart from "./statusChart.vue";
export default {
  props: ["show_status_data"],
  components: {
    "status-chart": statusChart
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    show_modal: function() {},
    ok: function() {},
    cancel: function() {}
  },
  mounted() {}
};
</script>