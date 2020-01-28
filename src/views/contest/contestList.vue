<style lang="scss">
#l_tmp {
  height: 1100px;
  position: relative;
}
.contest_l {
  &_title {
    font-size: 30px;
  }

  &_icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url("~@/images/medals.png") no-repeat scroll left center/ 40px;
  }

  &_sub {
    width: 100%;
    margin-left: 10px;
    position: relative;
    &_title {
      font-size: 20px;
      display: block;
      padding: 10px 0;
    }
    &_time {
      margin-top: 14px;
      margin-left: 10px;
      display: inline;
    }
    &_io {
      margin-left: 10px;
    }
    &_status {
      right: 0;
      top: 15px;
      position: absolute;
    }
  }
}
</style>

<template lang="pug">
div#l_tmp
  List.contest_l
    p.contest_l_title 比赛信息
    ListItem(border size="large" v-for="contest in contest_list" :key="contest.id") 
      div.contest_l_icon
      div.contest_l_sub
        a(:href="contest.contest_url+'/'+contest.id").contest_l_sub_title {{contest.contest_name}}
        Tag(type="dot" :color="contest.contest_state" class="contest_l_sub_status") running
        Icon(type="md-calendar")
        Time(class="contest_l_sub_time" :time="contest.contest_date" type="datetime")
        Poptip(:title="contest.contest_name" :content="contest.contest_info" placement="right")
          a
            Icon(type="ios-alert-outline" class="contest_l_sub_io")
  
</template>

<script>
export default {
  props: ["contest_list"]
};
</script>