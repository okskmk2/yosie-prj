<template>
    <div class="modal-overlay">
        <section class="modal-yellow">
            <div class="integ-modal-header">
                <img src="./assets/integritas1.png" alt="">
                <div>
                    <div class="integ-modal-title">Integritas Ujian</div>
                    <div class="integ-modal-subtitle">Universitas Terbuka UORB</div>
                </div>
            </div>
            <div class="integ-body">
                <div class="integ-body-title">Dengan ini saya menyatakan :</div>
                <p>
                    Berjanji untuk Mengerjakan materi Online Test ini secara bersungguh-sungguh, cermat, dan jujur,
                    serta tidak akan:

                </p>
                <p>
                    1. Bekerja sama dengan orang lain dalam hal memberi dan/atau menerima bantuan dalam menjawab
                    pertanyaan tes
                </p>
                <p>
                    2. Mengambil gambar materi/soal melalui: kamera, handphone dan screenshoot serta aplikasi sejenis
                    dari laptop/desktop dan menggandakan/ menyebarluaskan materi dalam bentuk apapun.
                    Demikian, pernyataan ini saya buat dengan sebenar-benarnya dalam keadaan sadar dan penuh tanggung
                    jawab, tanpa adanya paksaan dari pihak manapun.

                </p>
                <div class="actions">
                    <button class="integ-btn" @click="$emit('integrity1')">submit</button>
                </div>
            </div>
        </section>
    </div>
</template>