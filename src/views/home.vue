<template>
  <div style="position: relative">
    <div id="bck_pic"></div>
    
      <img src="../images/header-teamwork.svg" id="header_teamwork" />
    <div id="info">
      <h2>An OJ platform</h2>
      <p>You can learn the algorithm here</p>
      <p>
        And of course, we're going to take your problem solving information,
        you can we're going to show you the data with other people
      </p>
      <Button type="primary" shape="circle" class="start_to_problems" to="/problems">start</Button>
      <Button shape="circle" class="start_to_problems" style="margin-left: 3.75rem">news</Button>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
#bck_pic {
  position: absolute;
  background: url("../images/header-background.jpg") no-repeat;
  background-size: 100%;
  width: 100%;
  height: 60rem;
  right: 0;
  top: 0;
}
#header_teamwork {
  position: absolute;
  width: 30rem;
  height: 30rem;
  right: 16rem;
  top: 11.25rem;
}

#info {
  position: absolute;
  top: 13.75rem;
  left: 7.5rem;
  width: 34rem;
}
#info h2 {
  font-weight: bolder;
  font-size: 2.5rem;
  color: rgba(0, 163, 212, 0.911);
}

#info p {
  font-size: 0.8rem;
  margin-top: 0.625rem;
}

.start_to_problems {
  margin-top: 5rem;
  width: 10rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
}
</style>