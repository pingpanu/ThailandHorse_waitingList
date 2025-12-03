<script>
import imgSrc from '../../assets/ThailandHorse_(2b_redraw).png';

export default {
    name: 'LogoHeader',
    data() {
        return {
            imgSrc,
            imgSize: 100
        };
    }
};
</script>

<template>
    <div class="container">
        <div class="logo">
            <img :src="imgSrc" alt="icon" :width="imgSize" :height="imgSize" />
        </div>
        <div class="webName">
            <h1>Thailand Horse</h1>
        </div>
    </div>
</template>

<style>
    .container {
        display: grid;
        grid-auto-columns: 150px 250px;
        grid-template-rows: 120px;
        gap: 5px;
        grid-template-areas: "logo webName";
    }
    .logo {
        grid-area: logo;
    }

    .logo img {
        padding:25px;
    }

    .webName {
        grid-area: webName;
    }

    .webName h1 {
        line-height: 100px;
    }
</style>