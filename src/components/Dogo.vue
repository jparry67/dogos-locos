<template>
    <div class="dogo-component">
        <h4>{{ dogo.name }}</h4>
        <p>{{ dogo.description }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Dogo extends Vue {
    @Prop() public dogo!: Object;
    public mounted() {
        this.test();
    }
    public test() {
        console.log(this.dogo);
    }
}
</script>
<style lang="less" scoped>
@import '../variables.less';
.dogo-component {
    border: 1px solid @orange-500;
    margin: 10px;
}

</style>