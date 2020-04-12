<template>
    <div id="footer">
        <div class="social-media-links">
            <a href="https://www.instagram.com/dogos.locos/"><img src="@/assets/icons/instagram.svg" alt="Instagram logo"></a>
            <a href="https://www.facebook.com/"><img src="@/assets/icons/facebook.svg" alt="Facebook logo"></a>
            <a href="https://www.yelp.com/biz/dogos-locos-provo"><img src="@/assets/icons/yelp.svg" alt="Yelp logo"></a>
            <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> -->
        </div>
        <div>contact@dogoslocos.com</div>
        <div>(801) 855-6895</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less">
@import '../variables.less';
    #footer {
        background-color: @grey-400;
        color: @grey-800;
        padding: 10px;
        display: flex;
        justify-content: space-evenly;
        font-size: 20px;
        font-weight: 600;
        align-items: center;
        @media only screen and (max-width: 700px) {
            flex-direction: column;
        }

        div {
            width: 100%;
            padding: 5px;
        }    

        .social-media-links {
            a {
                margin: 0 10px;
                color: inherit;
                &:hover {
                    color: @red-300;
                }

                img {
                    height: 30px;
                }
            }
        }
    }
</style>