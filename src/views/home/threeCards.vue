<template>
  <Row id="box">
    <Col span="8">
      <Card class="box" style="width:300px" :bordered="false" to>
        <div style="text-align:center">
          <img src="~@/images/services-icon-1.svg" />
          <h3>Accurate statistics</h3>
        </div>
      </Card>
    </Col>
    <Col span="8">
      <Card class="box" style="width:300px" :bordered="false">
        <div style="text-align:center">
          <img src="~@/images/services-icon-2.svg" />
          <h3>Rich question bank</h3>
        </div>
      </Card>
    </Col>
    <Col span="8">
      <Card class="box" style="width:300px" :bordered="false">
        <div style="text-align:center">
          <img src="~@/images/services-icon-3.svg" />

          <h3>Elegant code environment</h3>
        </div>
      </Card>
    </Col>
  </Row>
</template>

<style>
#box {
  width: 100%;
}

.box {
  margin-left: 6rem;
  margin-top: 1100px;

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