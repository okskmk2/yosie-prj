<template>
    <div class="modal-overlay">
        <div class="modal-n">
            <div class="modal-n-text">Ujian dihentikan karna terlalu banyak melakukan pelanggaran</div>
            <div class="modal-n-btns">
                <!-- <button class="selasai-tidak-btn" @click="$emit('close3')">TIDAK SAYA INGIN LANJUT !</button> -->
                <button class="selasai-sudah-btn" @click="$router.push('/score')">SELESAI</button>
            </div>
        </div>
    </div>
</template>
<style>
.modal-n {
    background-color: #FFFCF4;
    padding: 42px 36px 32px;
    border-radius: 16px;
}

.modal-n-text {
    font-size: 20px;
}

.modal-n-btns {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.selasai-tidak-btn,
.selasai-sudah-btn {
    border-radius: 30px;
    color: white;
    border-style: none;
    font-size: 18px;
    padding: 8px 24px;
}

.selasai-tidak-btn {
    background-color: #1976D2;
}

.selasai-sudah-btn {
    background-color: #DF5757;
}
</style>