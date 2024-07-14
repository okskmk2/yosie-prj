<template>
    <div class="rest ujianbg">
        <div class="uout">
            <img src="../assets/uouticon.svg" alt="">
            <span>UO - UT</span>
        </div>
        <div class="ujian-header">
            <img src="../assets/ujianlogo.png" alt="" style="width: 150px;">
            <div class="ujian-bg-title">Universitas Terbuka</div>
            <div class="ujian-bg-subtitle">Making Higher Education Open to All</div>
        </div>
        <router-view></router-view>
    </div>
    <Footer />
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Header, Footer
    }
}
</script>
<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.rest {
    flex-grow: 1;
}

.ujianbg {
    background-image: url('../assets/ujianbg.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.uout {
    margin: 1rem 1rem 0;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.ujian-header {
    color: white;
    text-align: center;
    border-bottom: 1px solid #1A1A1A;
    padding-bottom: 32px;
}

.ujian-bg-title {
    font-size: 50px;
    font-weight: 600;
    text-shadow: 0 0 2px black;
}

.ujian-bg-subtitle {
    font-size: 35px;
    line-height: 1;
    text-shadow: 0 0 2px black;
}
</style>