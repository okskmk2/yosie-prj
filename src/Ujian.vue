<template>
    <div class="ujian">
        <div class="rest" style="padding: 1rem;">
            <div class="ujian-board">
                <section class="header">
                    <div class="header-top">
                        <div>
                            <div>
                                <img src="./assets/ujianlogo.png" alt="" class="ujian-brand">
                                <div>
                                    <div class="bold-blue">012345678</div>
                                    <div class="gray">Ujian Online</div>
                                </div>
                                <div>
                                    <div class="bold-blue">DEMO000002</div>
                                    <div class="gray">Mata Kuliah Simulasi</div>
                                </div>
                                <div>
                                    <div class="bold-blue">2 July 2024</div>
                                    <div class="gray">Sesi 1</div>
                                </div>
                            </div>
                            <div>
                                <div>Menjawab 2 dari 30</div>
                                <div class="skyblue">JAWABAN</div>
                                <div>
                                    <div>A</div>
                                    <div>B</div>
                                    <div>C</div>
                                    <div>D</div>
                                </div>
                                <div>
                                    <div class="bold-blue">Sisa Waktu</div>
                                    <div class="skyblue">1 : 28 : 35</div>
                                </div>
                            </div>
                        </div>
                        <img src="./assets/ujianface.png" alt="">
                    </div>
                    <div class="header-bottom">
                        <div>NO JAWABAN</div>
                    </div>
                </section>
                <section class="body"></section>
            </div>
        </div>
        <Footer />
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
.header {
    background-color: #D8E8FF;
}

.ujian-brand {
    object-fit: contain;
}

.ujian {
    background-color: #8F8C8C;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.ujian-board {
    border-radius: 15px;
    background-color: #f2f2f2;
}

.header-top {
    display: flex;
    justify-content: space-between;
}

.bold-blue {
    font-weight: 600;
    font-size: 28px;
    color: #214395;
}

.gray {
    font-size: 30px;
    color: #5F5B53;
}

.skyblue {
    color: #2196F3;
    font-size: 40px;
    font-weight: 500;
}
</style>