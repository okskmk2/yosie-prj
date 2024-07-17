<template>
    <div class="exam-wrap">
        <div class="exam-header">
            <img src="./assets/ujianlogo.png" alt="" style="width: 150px;" @click="$router.push('/ujian-lobby/pjluo')">
            <div>
                <div class="exam-title">Universitas Terbuka</div>
                <div class="exam-subtitle">Making Higher Education Open to All</div>
            </div>
        </div>
        <div class="exam-body">
            <div class="exam-grid">
                <img v-if="exam1" src="./assets/exam1.png" alt="">
                <img v-else src="./assets/exam11.png" alt="">
                <img src="./assets/exam2.png" alt="">
                <img src="./assets/exam3.png" alt="">
                <img v-if="exam2" src="./assets/exam4.png" alt="">
                <img v-else src="./assets/exam41.png" alt="">
            </div>
            <div class="exam-bottom">
                <img src="./assets/exammonitoring.svg" alt="">
                <span>EXAM MONITORING</span>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
    components: { Footer },
    data() {
        return {
            exam1: true,
            exam2: true
        }
    },
    mounted() {
        setInterval(() => {
            this.exam1 = !this.exam1;
            this.exam2 = !this.exam2;
        }, 5000);
    }
}
</script>
<style scoped>
.exam-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    border-bottom: 1px solid #214395;

}

.exam-title {
    font-size: 40px;
    font-weight: 600;
}

.exam-subtitle {
    margin-top: 8px;
    font-size: 25px;
    color: #5A5555;
}

.exam-wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1;
}

.exam-header,
.exam-body {
    background-color: #D8E8FF;
}

.exam-body {
    flex-grow: 1;
    padding: 3rem 1rem;
}

.exam-grid {
    display: flex;
    gap: 22px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.exam-bottom {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
        font-size: 35px;
        font-weight: 500;
    }
}
</style>