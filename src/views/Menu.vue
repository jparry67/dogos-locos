<template>
  <div class="dogo-page">
    <h1>Our Menu</h1>
    <h3>Bacon-wrapped Dogos</h3>
    <div class="menu">
      <div v-for="dogo in dogos" v-bind:key="dogo.name">
        <Dogo :dogo="dogo"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dogo from '@/components/Dogo.vue';
@Component({
  components: {
    Dogo,
 },
})
export default class Menu extends Vue {
  public dogos = [
    {
      name: 'The Sonoran Dog',
      imgUrl: '',
      description: 'All beef hot dog wrapped in bacon in a soft bolillo bun with mayo, beans, pico de gallo, salsa, and avocado.',
    },
    {
      name: 'El Hawaiano',
      imgUrl: '',
      description: 'All beef hot dog wrapped in bacon in a soft bolillo bun with grilled pineapple and spicy barbecue sauce.',
    },
    {
      name: 'Chili Cheese Dog',
      imgUrl: '',
      description: 'All beef hot dog wrapped in bacon in a soft bolillo bun covered in chili and shredded cheese.',
    },
  ];
}
</script>

<style lang="less" scoped>
@import '../variables.less';
.menu {
  // border: @red-500 5px solid;
}
</style>
