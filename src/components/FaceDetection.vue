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
            type: Number,
            required: true,
            default: 720,
        },
        height: {
            type: Number,
            required: true,
            default: 560,
        },
    },
    mounted() {
        this.start();
    },
    methods: {
        async setupCamera() {
            const video = this.$refs.video;
            const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
            video.srcObject = stream;
            return new Promise((resolve) => {
                video.onloadedmetadata = () => {
                    resolve(video);
                };
            });
        },
        async detectFaces(video, canvas) {
            const displaySize = { width: video.width, height: video.height };
            faceapi.matchDimensions(canvas, displaySize);

            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
                faceapi.draw.drawDetections(canvas, resizedDetections);
            }, 100);
        },
        async start() {
            let baseurl = process.env.NODE_ENV === 'production' ? '/yosie' : '';
            await faceapi.nets.tinyFaceDetector.loadFromUri(baseurl + '/models');

            const video = await this.setupCamera();
            const canvas = this.$refs.canvas;
            this.detectFaces(video, canvas);
        },
    },
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