<template>
    <button
    class="mc-button"
    :class="[
        `mc-button--${type}`,
        {
            'is-round': round
        }
    ]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: "McButton",
        props: {
            type: {
                type: String,
                default: 'default'
            },
            round: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .mc-button {
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 8px 15px;
        background: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: #a0a0a0;
        border-radius: 5px;
        cursor: pointer;
    }
    // 初级
    .mc-button--primary {
        color: white;
        background: #5db6fa;
        border-color: #5db6fa;
    }
    // 成功
    .mc-button--success {
        color: white;
        background: #44fa7a;
        border-color: #44fa7a;
    }
    // 警告
    .mc-button--warning {
        color: white;
        background: #fad02d;
        border-color: #fad02d;
    }
    // 危险
    .mc-button--danger {
        color: white;
        background: #fa371b;
        border-color: #fa371b;
    }
    .is-round {
        border-radius: 20px;
        padding: 12px 23px;
    }
</style>