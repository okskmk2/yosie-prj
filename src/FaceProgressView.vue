<template>
    <div class="container col-center">
        <div class="face2">
            <div class="face2-title">Verifikasi Diri</div>
            <div class="face2icon">
                <FaceDetection width="350" height="350" style="border-radius: 4px;" />
                <!-- <img src="./assets/face2.svg" alt=""> -->
            </div>
            <div class="face2-text">
                <div class="face2-text1">proses scan wajah ....</div>
                <div class="face2-text2">proses scan membutuhkan beberapa waktu</div>
            </div>
        </div>
    </div>
</template>
<script>
import FaceDetection from "./components/FaceDetection.vue";
export default {
    components: { FaceDetection },
    mounted() {
        setTimeout(() => {
            this.$router.push('/face3')
        }, 10000);



        // const constraints = {
        //     video: true // 오디오를 포함하고 싶다면, { video: true, audio: true }로 설정
        // };

        // // 사용자의 미디어 장치에 접근합니다.
        // navigator.mediaDevices.getUserMedia(constraints)
        //     .then((stream) => {
        //         // 스트림을 비디오 요소에 설정합니다.
        //         this.$refs.video.srcObject = stream;
        //     })
        //     .catch((error) => {
        //         // if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        //         //     alert('Please go to \n' + this.getSettingUrl() + '\nfor set camera access');
        //         // } else if (error.name === 'NotFoundError') {
        //         //     alert('No camera Error');
        //         // } else {
        //         //     console.log('카메라 권한 확인 중 오류가 발생했습니다:', error);
        //         // }
        //         // this.$router.push('/');
        //     });
    },
    unmounted() {
        // this.$refs.video.pause();
        // this.$refs.video.removeAttribute('src'); // empty source
        // this.$refs.video.load();
    }
}
</script>
<style>
.face2 {
    text-align: center;
}

.face2icon {
    margin-top: 24px;
    background-color: #E3F2FD;
    display: inline-flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;

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