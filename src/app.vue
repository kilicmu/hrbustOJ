<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 0.25rem;
  min-width: 1300px !important;
  overflow: hidden;
}
.layout-logo {
  width: 6.25rem;
  height: 1.875rem;
  background: #5b6270;
  border-radius: 0.1875rem;
  float: left;
  position: relative;
  top: 0.9375rem;
  left: 1.25rem;
}
.layout-nav {
  width: 26.25rem;
  margin: 0 auto;
  margin-right: 1.25rem;
}
.layout-footer-center {
  text-align: center;
}

.ivu-layout-content {
  min-width: 1300px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

#header {
  width: 100%;
  top: 0;
  position: fixed;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <all-header id="header"></all-header>

      <Breadcrumb :style="{margin: '50px'}"></Breadcrumb>
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