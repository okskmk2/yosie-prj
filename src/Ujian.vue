<template>
    <div class="ujian">
        <div class="rest" style="padding: 1rem;">
            <div class="ujian-board">
                <section class="header">
                    <div class="header-top">
                        <div class="panel">
                            <div class="panel-row">
                                <img src="./assets/ujianlogo.png" alt="" class="ujian-brand">
                                <div class="text-center">
                                    <div class="bold-blue">012345678</div>
                                    <div class="gray">Ujian Online</div>
                                </div>
                                <div class="text-center">
                                    <div class="bold-blue">DEMO000002</div>
                                    <div class="gray">Mata Kuliah Simulasi</div>
                                </div>
                                <div class="text-center">
                                    <div class="bold-blue">2 July 2024</div>
                                    <div class="gray">Sesi 1</div>
                                </div>
                            </div>
                            <div class="panel-row" style="align-items: flex-end;">
                                <div>
                                    <div
                                        style="margin-left: 16px;margin-bottom: 8px; font-size: 20px;font-weight: 500;">
                                        Menjawab <span style="color:red">2</span>
                                        dari <span style="color:blue">30</span>
                                    </div>
                                    <div style="padding-left: 38px;font-size: 15px;">NO<span
                                            style="margin-left: 22px;">JAWABAN</span>
                                    </div>
                                </div>
                                <div class="row-center" style="margin-bottom: 1rem;">
                                    <span class="skyblue">JAWABAN</span>
                                    <span class="jawaban" @click="openpopup3">
                                        <span class="jawaban-item">A</span>
                                        <span class="jawaban-item">B</span>
                                        <span class="jawaban-item">C</span>
                                        <span class="jawaban-item">D</span>
                                    </span>
                                </div>
                                <div class="text-center" style="padding-bottom: 12px;">
                                    <div class="bold-blue">Sisa Waktu</div>
                                    <div class="skyblue" style="width: 200px;height: 41px; font-family: monospace;">{{
                                        passtime }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FaceDetection width="250" height="178" style="margin-left: 3rem;border-radius: 16px;"
                                @click="openpopup2">
                            </FaceDetection>
                        </div>
                        <!-- <video ref="video" width="250" autoplay style="margin-left: 3rem;border-radius: 16px;"
                            @click="openpopup2"></video> -->
                    </div>
                </section>
                <section class="body rest">
                    <div class="row">
                        <table class="answer-table ybg">
                            <tr>
                                <td>1</td>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>B</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>-</td>
                            </tr>
                        </table>
                        <div class="rest">
                            <div class="row content-header">
                                <div>
                                    <div>
                                        No <span style="color:red;margin-right: 8px;">2</span>
                                        DARI <span style="color:blue">30</span>
                                    </div>
                                </div>
                                <div style="color:#214395">
                                    Halaman 2 / 30
                                </div>
                                <div class="row" style="gap: 17px;">
                                    <span class="row-center">Kamus <img src="./assets/kamusicon.svg" alt=""
                                            class="kimg"></span>
                                    <span class="row-center">Tabel <img src="./assets/tabelicon.svg" alt=""
                                            class="kimg"></span>
                                </div>
                                <div class='row-center'>
                                    <img src="./assets/zoomin.png" alt="">
                                    <span>135 %</span>
                                    <img src="./assets/zoomout.png" alt="">
                                </div>
                            </div>
                            <div class="ybg ujian-content">
                                <div style="display: flex;">
                                    <div style="width: 3rem;">3.</div>
                                    <div>

                                        Prinsip hukum yang menekankan bahwa<br>
                                        kasus-kasus yang serupa harus diperlakukan secara<br>
                                        sama di bawah hukum adalah...
                                    </div>
                                </div>
                                <div style="margin-top: 50px; line-height: 2;margin-left: 3rem;">
                                    A. Asas Legalitas<br>
                                    B. Asas Keadilan<br>
                                    C. Perlindungan Hukum<br>
                                    D. Asas Persamaan
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
        <Teleport to="body">
            <OthertabOpenPopup @closeredpop1="closeredpop1" v-if="redpopup" />
            <CameraRedPopup @closeredpop2="closeredpop2" v-if="open2" />
            <SelasaiPopup @close3="closepop3" v-if="open3" />
        </Teleport>
    </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import OthertabOpenPopup from "./OthertabOpenPopup.vue";
import CameraRedPopup from "./CameraRedPopup.vue";
import SelasaiPopup from "./SelasaiPopup.vue";
import FaceDetection from './components/FaceDetection.vue'

export default {
    components: {
        Footer, OthertabOpenPopup, CameraRedPopup, SelasaiPopup, FaceDetection
    },
    data() {
        return {
            passtime: null,
            endTime: null,
            redpopup: false,
            open2: false,
            open3: false,
        }
    },
    methods: {
        closepop3() {
            this.open3 = false;
        },
        openpopup3() {
            this.open3 = true;
        },
        openpopup2() {
            this.redpopup = false;
            this.open2 = true;
        },
        closeredpop2() {
            this.open2 = false;
            this.openpopup3();
        },
        closeredpop1() {
            this.redpopup = false;
        },
        formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            // Pad with leading zeros if needed
            minutes = String(minutes).padStart(2, '0');
            seconds = String(seconds).padStart(2, '0');

            return `${minutes}:${seconds}`;
        },
        updateCountdown() {
            let currentTime = Date.now();
            let remainingTime = this.endTime - currentTime;

            if (remainingTime >= 0) {
                this.passtime = this.formatTime(remainingTime);
            } else {
                this.passtime = "00:00";
                clearInterval(this.countdownInterval);
                // 여기에서 시간이 끝났을 때 추가 작업을 수행할 수 있습니다.
            }
        },
        detectTab() {
            if (document.visibilityState === 'hidden') {
                this.redpopup = true;
            }
        },
        getSettingUrl() {
            let settingsUrl;
            const userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.includes('chrome')) {
                settingsUrl = 'chrome://settings/content/camera';
            } else if (userAgent.includes('firefox')) {
                settingsUrl = 'about:preferences#privacy';
            } else if (userAgent.includes('safari')) {
                settingsUrl = 'x-apple.systempreferences:com.apple.preference.security?Privacy_Camera';
            } else if (userAgent.includes('edge')) {
                settingsUrl = 'edge://settings/content/camera';
            } else {
                // alert('브라우저 설정에서 권한을 재설정해주세요.');
                return;
            }
            return settingsUrl;
        }
    },
    mounted() {
        // 90분(5400000ms) 후에 카운트다운이 끝나도록 설정
        this.endTime = Date.now() + 90 * 60 * 1000;

        this.countdownInterval = setInterval(() => {
            this.updateCountdown();
        }, 1000);
        document.addEventListener('visibilitychange', this.detectTab);

        setTimeout(() => {
            if (!this.redpopup && !this.open2 && !this.open3) {
                this.redpopup = true;
            }
        }, 10000);
    },
    unmounted() {
        document.removeEventListener('visibilitychange', this.detectTab);
        clearInterval(this.countdownInterval);
    }
}
</script>
<style scoped>
.content-header {
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
}

.ujian-content {
    padding: 100px;
    height: calc(100% - 45px);
    box-sizing: border-box;
    font-size: 30px;
    color: #333;
}

.kimg {
    margin-left: 6px;
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.ybg {
    background-color: #FFFCF4;
}

.answer-table {
    border-right: 1px solid #ddd;

    td {
        padding: 20px 27px;
        font-size: 23px;
        font-weight: 600;
        text-align: right;
        font-family: monospace;
    }
}

.header {
    background-color: #D8E8FF;
}

.text-center {
    text-align: center;
}

.ujian-brand {
    object-fit: contain;
}

.ujian {
    background-color: #8F8C8C;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.ujian-board {
    overflow: hidden;
    border-radius: 15px;
    background-color: #f2f2f2;
}

.header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 2rem;
    padding-right: 2rem;
}

.panel {
    flex-grow: 1;
}

.panel-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bold-blue {
    font-weight: 600;
    font-size: 28px;
    color: #214395;
}

.gray {
    font-size: 30px;
    color: #5F5B53;
}

.skyblue {
    color: #2196F3;
    font-size: 36px;
    font-weight: 500;
}

.jawaban {
    margin-left: 30px;
    background-color: white;
    box-shadow: 0 0 4px 1px #ccc;
    font-size: 30px;
    font-weight: 500;
    padding: 0 12px;
    border-radius: 15px;
    display: inline-block;
}

.jawaban-item {
    display: inline-block;
    padding: 4px 16px;
}

.jawaban-item:hover {
    background-color: #2196F3;
    color: white;
    cursor: pointer;
}
</style>