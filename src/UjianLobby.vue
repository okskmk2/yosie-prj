<template>
    <div class="ujian-lobby">
        <div class="ujian-lobby-title">UJIAN ONLINE</div>
        <div class="ujian-choice">
            <div class="ujian-item" style="background-color: #D8E8FF;" @click="$router.push('/ujian')">
                <div style="background-color: #2196F3;" class="ujian-img">
                    <img src="./assets/ujian1.svg" alt="">
                </div>
                <div class="ujian-item-title blue">
                    UO MAHASISWA<br>
                    UT
                </div>
            </div>
            <div class="ujian-item" style="background-color: #FFCBC5;">
                <div style="background-color: #FD5721;" class="ujian-img">
                    <img src="./assets/ujian2.svg" alt="">
                </div>
                <div class="ujian-item-title red">
                    SIMULASI<br>
                    UJIAN
                </div>
            </div>
            <div class="ujian-item" style="background-color: #BDF5FE;">
                <div style="background-color: #01BCD5;" class="ujian-img">
                    <img src="./assets/ujian3.svg" alt="">
                </div>
                <div class="ujian-item-title tear">
                    UNDUH / UNGGAH<br>
                    BJU
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.ujian-lobby {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
}

.ujian-lobby-title {
    font-size: 52px;
    font-weight: 700;
    color: #081F57;
}

.ujian-choice {
    margin-top: 32px;
    display: flex;
    gap: 32px;
}

.ujian-img {
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}

.ujian-item-title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
}

.blue {
    color: #005192;
}

.red {
    color: #CC3C0D;
}

.tear {
    color: #107B89;
}

.ujian-item {
    padding: 35px 35px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    transition: box-shadow 200ms ease-in;
    cursor: pointer;
}

.ujian-item:hover {
    /* transform: scale(1.01); */
    box-shadow: 0 0 8px 2px #555;
}
</style>