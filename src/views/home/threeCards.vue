<style type='scss'>
#box {
  width: 100%;
}

.box {
  margin-left: 6rem;
  margin-top: 1100px;
  float: left;
  img {
    width: 130px;
    height: 130px;
    margin: 60px 0;
  }
}
</style>

<template lang="pug">
  Row#box
    Col(span="8")
      Card(style="width:300px" :bordered="false").box
        div(style="text-align:center")
          img(src="~@/images/services-icon-1.svg")
          h3 Accurate statistics
    Col(span="8")
      Card(style="width:300px" :bordered="false").box
        div(style="text-align:center")
          img(src="~@/images/services-icon-2.svg")
          h3 Rich question bank
    Col(span="8")
      Card(style="width:300px" :bordered="false").box
        div(style="text-align:center")
          img(src="~@/images/services-icon-3.svg")
          h3 Elegant code environment

</template>



<script>
export default {};
</script>