<template>
    <div class="modal-overlay">
        <section class="modal-yellow">
            <div>integrity system</div>
            <div>Universitas Terbuka UORB</div>
            <div>
                <div>
                    <div>
                        > Pengawasan Webcam ✔️
                    </div>
                    <p>Pastikan webcam menyala dan mengarah ke wajah Anda selama ujian. Hanya satu wajah yang boleh
                        terlihat dalam satu frame</p>
                </div>
                <div>
                    <div>
                        > Deteksi Gerakan Mencurigakan ✔️
                    </div>
                    <p>Hindari gerakan tidak perlu seperti banyak menoleh, menunduk, dan berbicara. Tetap fokus pada
                        layar !ujian.</p>
                </div>
                <div>
                    <div>
                        > Deteksi Keluar Platform ✔️
                    </div>
                    <p>Jangan mencoba keluar dari platform ujian; ujian akan otomatis dihentikan.</p>
                </div>
            </div>
            <div>
                <button @click="$emit('integrity2')">izinkan ></button>
            </div>
        </section>
    </div>
</template>

5327 5011 1517 2498
03 29
203