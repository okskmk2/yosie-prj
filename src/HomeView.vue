<template>
    <div class="container">
        <div class="homesection">
            <div>
                <div class="top">Ujian Online</div>
                <div class="mid">Remote Proctoring</div>
                <div class="bottom">
                    A highly integrated remote online examination platform for Universitas Terbuka Indonesia students,
                    offering a secure, efficient, and flexible exam experience anytime, anywhere
                </div>
                <div class="btns">
                    <button class="btn mulai" @click="$router.push('/start')">Mulai</button>
                    <button class="btn tata">Tata tertib</button>
                </div>
            </div>
            <div>
                <img src="./assets/homelogo.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.homesection {
    display: flex;
    margin-top: 10rem;

    .top {
        font-size: 58px;
        font-weight: 700;
    }

    .mid {
        font-size: 47px;
        font-weight: 700;
    }

    .bottom {
        margin-top: 20px;
        font-size: 18px;
        color: #5F5B53;
    }
}

.btns {
    margin-top: 5rem;
    display: flex;
    gap: 1rem;
}

.btn {
    width: 180px;
    height: 64px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    border-radius: 32px;
    border-style: none;
    box-sizing: border-box;
}

.mulai {
    background-color: #00B2FF;
    transition: background-color 500ms ease;
}

.mulai:hover {
    background-color: #40c6ff;
}

.tata {
    background-color: #FFB800;
}
</style>