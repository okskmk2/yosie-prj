<template>
    <div class="container">
        <div class="facedone">
            <div class="rel">
                <div class="avatar">
                    <img src="./assets/yosie.png" alt="">
                </div>
                <img src="./assets/doneicon.svg" alt="" class="doneicon">
            </div>
            <div class="face3-text">
                <div class="face3-text1">Verifikasi Sukses</div>
                <div class="face3-text2">anda akan di arahkan ke laman ujian</div>
            </div>
        </div>
        <Teleport to="body">
            <Integrity1Popup v-if="open1" @integrity1="integrity1"></Integrity1Popup>
            <Integrity2Popup v-if="open2"></Integrity2Popup>
        </Teleport>
    </div>
</template>
<script>
import Integrity1Popup from "./Integrity1Popup.vue";
import Integrity2Popup from "./Integrity2Popup.vue";
export default {
    components: {
        Integrity1Popup, Integrity2Popup
    },
    data() {
        return {
            open1: false,
            open2: false,
        }
    },
    methods: {
        integrity1() {
            this.open1 = false;
            this.open2 = true;
        }
    },
    mounted() {
        setTimeout(() => {
            this.open1 = true;
        }, 2000);
    }
}
</script>
<style scoped>
.facedone {
    margin-top: 6rem;
    text-align: center;
    margin-bottom: 6rem;
}

.avatar {
    background-color: #214395;
    display: inline-block;
    border-radius: 50%;
    width: 326px;
    height: 326px;
    overflow: hidden;

    img {
        width: 100%;
        margin-top: 31px;
    }
}

.rel {
    position: relative;
    display: inline-block;
}

.doneicon {
    position: absolute;
    right: -7px;
    bottom: -7px;
}

.face3-text {
    margin-top: 38px;
}

.face3-text1 {
    font-size: 30px;
    font-weight: 600;
}

.face3-text2 {
    font-size: 18px;
    color: #5A5555;
}
</style>