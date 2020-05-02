<template>
  <div>
    <div id="imgSec">
      <img id="myImage" src="~/assets/myImage.png" />
    </div>
    <p class="me">Takanori Mogi</p>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style  scoped>
#imgSec {
  text-align: center;
  margin: 20px 10px 10px 10px;
}
#myImage {
  width: 160px;
  border-radius: 100%;
}
.me {
  text-align: center;
  font-size: 24px;
  font-weight: normal;
}
</style>
