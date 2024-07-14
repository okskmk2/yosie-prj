<template>
    <Header />
    <router-view class="rest"></router-view>
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
</style>