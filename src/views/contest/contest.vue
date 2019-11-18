<script>
export default {};
</script>
<template>
  <Content :style="{padding: '0 50px'}" id="content">
    <div style="{margin: '40px'}"></div>
    <Card>
      <div id="background_color">
        <div id="plate_line">
          <img src="~@/images/plate.png" id="plate" />
        </div>
        <div id="page_info">
          <strong>CONTEST</strong>
          <p>look forward to your participation</p>
        </div>
        <div id="contests_line"></div>
      </div>
      <Row id="now_and_o">
        <Col span="8" push="4">
          <Card id="will_start"></Card>
        </Col>
        <Col span="8" push="4">
          <Card id="started"></Card>
        </Col>
      </Row>
    </Card>
  </Content>
</template>
<style scoped>
#background_color {
  height: 32.5rem;
  width: 100%;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 21, 66, 0.856),
    rgba(0, 14, 61, 0.63)
  );
}
#plate_line {
  width: 100%;
  text-align: center;
}

#plate {
  width: 20rem;
  height: 20rem;
  top: 0;
}

#page_info {
  width: 100%;
  text-align: center;
}
#page_info strong {
  font-size: 40px;
  color: rgba(255, 229, 81, 0.521);
}

#page_info p {
  font-size: 30px;
  color: #fff;
}

#contests_line {
  width: 100%;
  text-align: center;
}

#now_and_o {
  margin-top: -70px;
}

#will_start {
  margin-right: 1.875rem;
  border-radius: 20px;
  height: 400px;
  border: 0;
  background-image: linear-gradient(
    to bottom right,
    rgb(223, 100, 0),
    rgba(255, 196, 0, 0.815)
  );
}

#started {
  margin-left: 1.875rem;
  border-radius: 20px;
  height: 300px;
  border: 0;
  background-image: linear-gradient(
    to bottom left,
    rgba(37, 106, 255, 0.61),
    rgba(0, 225, 255, 0.459)
  );
}
#started:hover {
  transition: all 1s;
}
</style>