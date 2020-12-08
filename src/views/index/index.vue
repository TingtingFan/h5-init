<template>
    <div class="container">
        <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>

        <van-icon name="chat-o" class="icon_chat_color"  color="#1989fa" />
        <van-icon name="chat-o" class="icon_chat"  />
    </div>
</template>
<style scoped>
    .container{
        border:1px solid red;
    }
    .icon_chat{
        font-size: 1rem;
    }
    .icon_chat_color{
        font-size: 37.5px;
    }
</style>