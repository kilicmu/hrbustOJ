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
<template lang="pug">
  div#r_tmp
    Row.rank_li
      Col(span="4") #    
      Col(span="14").user user     
      Col(span="6") score      
    Row(v-for="item in rank_list" :key="item.id").rank_li     
      Col(span="4").col {{item.id}}  
      Col(span="14").col    
        Button(type="text" long :to="'/user/' + item.username").user {{item.name}} 
      Col(span="6").col {{item.score}}
</template>
<script>
export default {
  props: ["rank_list"]
};
</script>