<template>
    <svg width="326" height="326" viewBox="0 0 326 326" class="circular-progress">
        <circle class="bg"></circle>
        <circle class="fg"></circle>
    </svg>
</template>
<style>
.circular-progress {
    --size: 326px;
    --half-size: calc(var(--size) / 2);
    --stroke-width: 10px;
    --radius: calc((var(--size) - var(--stroke-width)) / 2);
    --circumference: calc(var(--radius) * pi * 2);
    --dash: calc((var(--progress) * var(--circumference)) / 100);
    animation: progress-animation 1s linear 0s 1 forwards;
}

.circular-progress circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: none;
    stroke-linecap: round;
}

.circular-progress circle.bg {
    stroke: #ddd;
}

.circular-progress circle.fg {
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    stroke: #4ecc71;
}

@property --progress {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
}

@keyframes progress-animation {
    from {
        --progress: 0;
    }

    to {
        --progress: 100;
    }
}
</style>