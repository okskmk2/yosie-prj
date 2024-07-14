<template>
    <div class="container">
        <div class="face2">
            <div class="face2-title">Verifikasi Diri</div>
            <div class="face2icon">
                <img src="./assets/face2.svg" alt="">
            </div>
            <div class="face2-text">
                <div class="face2-text1">proses scan wajah ....</div>
                <div class="face2-text2">proses scan membutuhkan beberapa waktu</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$router.push('/face3')
        }, 3000);
    }
}
</script>
<style>
.face2 {
    margin-top: 3rem;
    text-align: center;
}

.face2icon {
    margin-top: 24px;
    background-color: #E3F2FD;
    display: inline-flex;
    align-items: center;
    padding: 3rem 1rem;
    border-radius: 24px;

    img {
        width: 100%;
    }
}

.face2-title {
    font-size: 30px;
    font-weight: 600;
}

.face2-text {
    margin-top: 24px;
}

.face2-text1 {
    font-size: 25px;
    font-weight: 600;
}

.face2-text2 {
    margin-top: spx;
    font-size: 18px;
    color: #5A5555;
}
</style>