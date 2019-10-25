<template>
  <div>
    <Content :style="{padding: '0 50px'}">
      <Breadcrumb :style="{margin: '40px'}"></Breadcrumb>
    </Content>
  </div>
</template>

<style>
</style>

<script>
export default {
  methods: {
    mounted() {
      console.log(this.$route.params.problem_id);
    }
  }
};
</script>