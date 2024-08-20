<template>
    <div class="score-page">
        <div class="score-top">
            <img src="./assets/ujianlogo.png" alt="" style="width: 150px;" @click="$router.push('/')">
            <div>
                <div style="color:#171100;font-size: 40px;font-weight: 500;">Universitas Terbuka</div>
                <div style="color:#5A5555;font-size: 25px;">Making Higher Education Open to All</div>
            </div>
        </div>
        <div class="blue-text" style="font-size: 28px;margin-top: 100px;font-weight: 500;">
            INFORMASI PEROLEHAN JUMLAH JAWABAN BENAR
        </div>
        <div class="blue-text" style="font-size: 30px;margin-top: 100px;font-weight: 500;">
            <span class="red-text" style="font-size: 60px;">43</span> DARI <span class="orange-text"
                style="font-size: 60px;">50</span> SOAL
        </div>
        <div class="blue-text" style="font-size: 28px;margin-top: 100px;font-weight: 500;">
            TERIMAKASIH ATAS PERAN SERTA ANDA DALAM<br>
            MENGIKUTI UJIAN ONLINE
        </div>
        <Footer style="position: fixed;
    bottom: 0;
    left: 0;
    right: 0;"></Footer>
    </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
    components: {
        Footer
    }
}
</script>
<style scoped>
.score-page {
    text-align: center;
    background-color: #D8E8FF;
    height: 100vh;
}

.blue-text {
    color: #214395;
}

.red-text {
    color: #B42B2B;
}

.orange-text {
    color: #EAA726;
}

.score-top {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;
    border-bottom: 1px solid #214395;
}
</style>