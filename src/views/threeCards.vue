<template>
  <div id="box">
    <Card class="box" style="width:300px" :bordered="false" to="">
      <div style="text-align:center">
        <img src="../images/services-icon-1.svg" />
        <h3>Accurate statistics</h3>
      </div>
    </Card>
    <Card class="box" style="width:300px" :bordered="false">
      <div style="text-align:center">
        <img src="../images/services-icon-2.svg" />
        <h3>Rich question bank</h3>
      </div>
    </Card>
    
    <Card class="box" style="width:300px" :bordered="false">
      <div style="text-align:center">
        <img src="../images/services-icon-3.svg" />

        <h3>Elegant code environment</h3>
      </div>
    </Card>
  </div>
</template>

<style>
#box {
  width: 100%;
}

.box {
  margin-left: 12.5rem;
  margin-top: 1200px;

  float: left;
}
.box img {
  width: 130px;
  height: 130px;
  margin: 60px 0;
}
</style>

<script>
export default {};
</script>