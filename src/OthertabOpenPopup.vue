<template>
    <div class="modal-overlay">
        <div class="modal-red">
            <div class="red-title">
                <img src="./assets/redtitle.png" alt="">
                Peringatan Pelanggaran !
            </div>
            <div class="red-body">
                <div class="red-body-point">
                    Anda terdeteksi melakukan gerakan mencurigakan.
                </div>
                <div class="red-body-text">Harap perhatikan hal-hal berikut :<br>
                    Jangan terlalu sering menoleh.<br>
                    Tidak boleh ada lebih dari satu orang dalam satu frame.<br>
                    Anda tidak boleh menghilang dari pandangan kamera pengawasan.<br>
                    Mohon patuhi aturan ini untuk kelancaran ujian. Terima kasih atas kerjasamanya.</div>
                <div class="red-btns">
                    <button @click="$emit('closeredpop1')" class="red-btn">Lanjutkan</button>
                </div>
            </div>
        </div>
    </div>
</template>