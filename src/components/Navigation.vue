<template>
    <div id="nav">
        <router-link to="/" style="font-size: 20px;"><i>DOGOS LOCOS</i></router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/schedule">Schedule</router-link>
        <router-link to="/catering">Catering</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {}
</script>

<style lang="less" scoped>
@import '../variables.less';
#nav {
    background-color: @grey-300;
    padding: 30px;
    a {
        text-decoration: none;
        padding: 20px;
        margin: 10px;
        font-weight: bold;
        border-radius: 5px;
        color: @grey-800;

        &:hover {
            background-color: @green-500;
            color: @grey-200;
        }

        &.router-link-exact-active {
            background-color: @grey-600;
            color: @green-300;
        }
    }
}
</style>