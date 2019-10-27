<template>
  <Content :style="{padding: '0 50px'}">
    
    <Card>
      <div style="min-height: 1600px;" clearfix>
        <index-show></index-show>
        <Divider id="line" dashed>Characteristic</Divider>
        <transition
          name="cunstom-classes-transition"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutRight"
          :duration="{ enter: 800, leave: 800 }"
        >
          <three-cards v-if="flag"></three-cards>
        </transition>
      </div>
    </Card>
  </Content>
</template>

<style scoped>
#line {
  position: absolute;
  top: 1000px;
  font-size: 1.5rem;
  color: rgba(28, 202, 255, 0.863);
}


</style>
    

<script>
export default {
  data() {
    return {
      scroll: null,
      flag: false
    };
  },
  methods: {
    menu() {
      this.scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(this.scroll);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  watch: {
    scroll: function(old) {
      if (old >= 600) {
        this.flag = true;
      }
      if (old < 600) {
        this.flag = false;
      }
    }
  }
};
</script>