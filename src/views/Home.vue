<template>
  <div class="home">
    <div class="main-header">
      <div class="overlay">
        <img src="@/assets/dogos-locos-logo-black-red-7.svg" width="80%">
      </div>
      </div>
    <Header text="What is a Sonoran Dog?"/>
    <div class="info">
      <img class="sonoran-dog" src="@/assets/dogo.jpg"/>
      <div class="text">
        <p>A Sonoran Dog is a hot dog wrapped in bacon in a fresh Mexican bolillo covered in delicious Mexican toppings like avocado, pico de gallo, and salsa.</p>
        <p>Sonoran Dogs traditionally come from Sonora, Mexico, but have become very popular in the U.S. in places like Tucson, Arizona and Los Angeles, California.</p>
        <p>Come and taste our dangerously delicious bacon-wrapped dogos!</p>
      </div>
    </div>
    <Header text="Our Dogo Truck"/>
    <p>The Dogo Truck is coming soon! Follow us on <a href="https://www.instagram.com/dogos.locos/">Instagram</a> to stay updated!</p>
    <img class="dogo-truck" src="@/assets/food-truck.png"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
@Component({
  components: {
    Header,
 },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
@import "../variables.less";
.main-header {
  height: 100vh;
  // height: calc(~"100vh - 78px");
  width: 100%;
  color: @grey-100;
  display: grid;
  place-content: center;
  background-image: url("../assets/dogo-grill.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  .overlay {
    height: 100vh;
  // height: calc(~"100vh - 78px");
    width: 100%;
    background: rgba(114, 67, 97, 0.62);
    z-index: 2;
    position: absolute;
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 120px;
    @media screen and (max-width: 700px) {
      font-size: 75px;
    }
  }
}

.info {
  padding: 50px 20px 0 20px;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-evenly;
  }

  .sonoran-dog {
    height: 300px;
  }

  .text {
    padding: 50px 20px 0 20px;
    max-width: 650px;
  }
}

.dogo-truck {
  width: 100%;
  max-width: 1000px;
  padding: 20px;
}
</style>