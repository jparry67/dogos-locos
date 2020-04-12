<template>
    <div class="header-component">
        <div class="header">
            <i>{{ text }}</i>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private text!: string;
}
</script>
<style lang="less" scoped>
@import url('../variables.less');
    .header-component {
        margin-top: 50px;
        height: 200px;
        width: 100%;
        background: linear-gradient(to right, @red-500, @red-500 20px, @grey-100 20px, @grey-100 40px, @green-500 40px, @green-500 60px, @grey-100 60px, @grey-100 80px);
        background-size: 80px;        // background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
        padding: 20px 0;

        .header {
            background-color: @grey-800;
            height: 100%;
            color: @orange-500;
            display: grid;
            align-items: center;
            font-size: 30px;
        }
    }
</style>