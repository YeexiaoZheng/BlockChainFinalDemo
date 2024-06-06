<template>
    <n-card hoverable embedded size="small">
        <template #cover>
            <img src="@/assets/img/demo.jpeg">
        </template>
        <div class="title-container">
            <div class="title">{{ props.title }}</div>
        </div>
        <div class="info">
            <div>{{ props.author }}</div>
            <div>{{ props.price }} ETH-6</div>
        </div>
    </n-card>
</template>

<script setup>
import { NCard } from 'naive-ui';
// import { CurrencyYuanFilled as Yuan } from '@vicons/material'

const props = defineProps({
    title: String,
    author: String,
    price: Number,
    img: String,
})

</script>

<style scoped>
.n-card {
    width: 100%;
}

img {
    width: 100;
    object-fit: cover;
}

.title-container {
    border-radius: 10px;
    position: relative;
    bottom: 30px;
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: left;
    align-items: center;
}

.title {
    width: fit-content;
    padding: 0 10%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    font-size: large;
    color: black;
}

.info {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: larger;
    bottom: 5px;
}
</style>