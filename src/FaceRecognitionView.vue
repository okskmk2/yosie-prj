<template>
    <div class="container col-center">
        <div class="top">
            <div class="greeting-name">Hai Yosie !</div>
            <div class="avatar">
                <img src="./assets/yosie.png" alt="">
            </div>
            <button class="mulai-verifikasi-diri" @click="$router.push('/face2')">
                <div>Mulai Verifikasi Diri</div>
                <img src="./assets/facerecogicon.svg" alt="">
            </button>
        </div>
        <div class="bottom">
            <div class="bottom-item">
                <div class="botop">
                    <img src="./assets/facebenar.png" alt="">
                    <div class="chip benar">✔️ Benar</div>
                </div>
                <div class="info-text">
                    Wajah tanpa penutup, tanpa kacamata, dan tanpa penutup kepala.
                </div>
            </div>
            <div class="bottom-item">
                <div class="botop">
                    <img src="./assets/facesalah.png" alt="">
                    <div class="chip salah">❌ Salah</div>
                </div>
                <div class="info-text">
                    Wajah dengan masker, kacamata hitam, atau penutup kepala yang menghalangi wajah.
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.greeting-name {
    font-size: 40px;
    font-weight: 600;
}

.avatar {
    background-color: #214395;
    display: inline-block;
    border-radius: 50%;
    width: 220px;
    height: 220px;
    overflow: hidden;
    margin: 36px 0 42px;

    img {
        width: 100%;
        margin-top: 21px;
    }
}

.mulai-verifikasi-diri {
    border-style: none;
    display: inline-flex;
    font-size: 20px;
    font-weight: 600;
    background-color: #E3F2FD;
    padding: 14px 32px;
    gap: 14px;
    border-radius: 30px;
}

.bottom {
    margin-top: 86px;
    display: flex;
    justify-content: space-around;
}

.bottom-item {
    width: 20rem;
}

.botop {
    display: flex;
    gap: 12px;
    align-items: center;
}

.chip {
    border-radius: 30px;
    padding: 6px 15px;
}

.benar {
    background-color: #9EF1AC;
    color: #327726;
}

.salah {
    background-color: #FEBABA;
    color: #920404;
}

.info-text {
    margin-top: 19px;
    color: #5A5555;
}
</style>