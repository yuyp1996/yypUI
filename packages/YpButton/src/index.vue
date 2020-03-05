<template>
    <button
    class="mc-button"
    :disabled="disabled"
    :class="[
        `mc-button--${type}`,
        {
            'is-round': round
        }
    ]"
    @click="handleClick"
    >
        <i class="mc-icon-" :class="icon" v-if="icon"></i>
        <!-- 如果没有传入插槽的时候才显示 -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        name: "YpButton",
        props: {
            type: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleClick (e) {
                if (this.disabled) {
                    return;
                }
                this.$emit('click', e); // 向父组件派发一个click事件，e表示携带的参数
            }
        }
    }
</script>

<style scoped lang="scss">
    .mc-button {
        box-sizing: border-box;
        outline: none;
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
    .mc-button [class*=mc-icon-]+span {
        margin-left: 5px;
    }
    .mc-button[disabled] {
        cursor: default;
        background: #c9c9c9;
        border-color: #c9c9c9;
        color: white;
    }
</style>