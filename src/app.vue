<style lang="scss">
@import "~@/sass/config.scss";
@include switch-animation;
.layout {
  border: $standard-border;
  background: $standard-background-color;
  position: relative;
  border-radius: 0.25rem;
  min-width: 1300px !important;
  overflow: hidden;
  &-logo {
    width: 6.25rem;
    height: 1.875rem;
    background: #5b6270;
    border-radius: 0.1875rem;
    float: left;
    position: relative;
    top: 0.9375rem;
    left: 1.25rem;
  }
  &-nav {
    width: 26.25rem;
    margin: 0 auto;
    margin-right: 1.25rem;
  }
  &-footer-center {
    text-align: center;
  }
}
.ivu-layout-content {
  min-width: 1300px;
}

#header {
  width: 100%;
  top: 0;
  min-width: 1300px !important;
  position: fixed;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <all-header id="header"></all-header>
      <Breadcrumb :style="{margin: '40px'}"></Breadcrumb>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      <Footer class="layout-footer-center">2019 &copy; hrbustOJ</Footer>
    </Layout>
    <BackTop></BackTop>
  </div>
</template>
<script>
export default {};
</script>