<template>
    <div class="modal-overlay">
        <div class="modal-red">
            <div class="red-title">
                <img src="./assets/redtitle.png" alt="">
                Peringatan Pelanggaran
            </div>
            <div class="red-body">
                <div class="red-body-point">
                    Anda terdeteksi mencoba keluar dari halaman ujian.
                </div>
                <div class="red-body-text">
                    Harap diperhatikan:<br>
                    <ul>
                        <li>Tidak boleh keluar dari halaman ujian.</li>
                        <li>Jika Anda keluar dari halaman, ujian akan otomatis terhenti dan Anda tidak akan bisa masuk
                            kembali.</li>
                    </ul>
                    Mohon tetap berada di halaman ujian untuk kelancaran tes.<br>
                    Terima kasih atas kerjasamanya.
                </div>
                <div class="red-btns">
                    <button @click="$emit('closeredpop2')" class="red-btn">Lanjutkan</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
ul {
    padding-left: 28px;
    margin-top: 6px;
    margin-bottom: 16px;
}
</style>