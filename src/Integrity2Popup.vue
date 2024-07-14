<template>
    <div class="modal-overlay">
        <section class="modal-yellow">
            <div class="integ-modal-header">
                <img src="./assets/integritas2.png" alt="">
                <div>
                    <div class="integ-modal-title">Integrity system</div>
                    <div class="integ-modal-subtitle">Universitas Terbuka UORB</div>
                </div>
            </div>
            <div class="integ-body">
                <div>
                    <div class="integ-body-title">
                        > Pengawasan Webcam ✔️
                    </div>
                    <p class="ml">Pastikan webcam menyala dan mengarah ke wajah Anda selama ujian. Hanya satu wajah yang boleh
                        terlihat dalam satu frame</p>
                </div>
                <div>
                    <div class="integ-body-title">
                        > Deteksi Gerakan Mencurigakan ✔️
                    </div>
                    <p class="ml">Hindari gerakan tidak perlu seperti banyak menoleh, menunduk, dan berbicara. Tetap fokus pada
                        layar !ujian.</p>
                </div>
                <div>
                    <div class="integ-body-title">
                        > Deteksi Keluar Platform ✔️
                    </div>
                    <p class="ml">Jangan mencoba keluar dari platform ujian; ujian akan otomatis dihentikan.</p>
                </div>
                <div class="actions">
                    <button class="integ-btn" @click="$emit('integrity2')">izinkan ></button>
                </div>
            </div>
        </section>
    </div>
</template>