<template>
    <div :style="{ width: `${width}px`, height: `${height}px`, position: 'relative' }">
        <video ref="video" :width="width" :height="height" autoplay muted></video>
        <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
import * as faceapi from 'face-api.js';

export default {
    name: 'FaceDetection',
    props: {
        width: {
            type: String,
            required: true,
            default: '720',
        },
        height: {
            type: String,
            required: true,
            default: '560',
        },
    },
    data() {
        return {
            detectInterval: 0,
            stream: null
        }
    },
    mounted() {
        this.start();
    },
    methods: {
        async setupCamera() {
            const video = this.$refs.video;
            this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
            video.srcObject = this.stream;
            return new Promise((resolve) => {
                video.onloadedmetadata = () => {
                    resolve(video);
                };
            });
        },
        async detectFaces(video, canvas) {
            const displaySize = { width: video.width, height: video.height };
            faceapi.matchDimensions(canvas, displaySize);

            this.detectInterval = setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                faceapi.draw.drawDetections(canvas, resizedDetections);
            }, 220);
        },
        async start() {
            let baseurl = process.env.NODE_ENV === 'production' ? '/yosie' : '';
            await faceapi.nets.tinyFaceDetector.loadFromUri(baseurl + '/models');

            const video = await this.setupCamera();
            const canvas = this.$refs.canvas;
            this.detectFaces(video, canvas);
        },
        stopBothVideoAndAudio(stream) {
            stream.getTracks().forEach((track) => {
                if (track.readyState == 'live') {
                    track.stop();
                }
            });
        }
    },
    unmounted() {
        clearInterval(this.detectInterval);
        this.stopBothVideoAndAudio(this.stream);
    }

};
</script>

<style scoped>
video,
canvas {
    position: absolute;
    top: 0;
    left: 0;
}
</style>