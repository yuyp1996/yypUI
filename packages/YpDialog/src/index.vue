<template>
    <transition name="yp-fade">
        <div
            class="yp-dialog"
            v-if="visible"
            :class="[
                {
                    'yp-dialog-mask': mask
                }
            ]"
            @click="closeDialog"
        >
            <div class="yp-dialog-content" @click.stop="">
                <div class="yp-dialog__header">
                    <span
                            class="dialog__title"
                            v-if="title"
                    >
                        {{title}}
                    </span>
                    <slot name="title" v-else></slot>
                    <button
                            class="yp-dialog__headerbtn"
                            @click="closeDialog">
                        X
                    </button>
                </div>
                <div class="yp-dialog__body">
                    <slot></slot>
                </div>
                <div class="yp-dialog__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "YpDialog",
        props: {
            title: {
                type: String,
                default: ''
            },
            mask: {
                type: Boolean,
                default: false
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeDialog () {
                this.$emit('update:visible', false); // 向父组件发送关闭dialog
            }
        }
    }
</script>

<style scoped lang="scss">
    .yp-fade-enter-active, .yp-fade-leave-active {
        transition: opacity .5s;
    }
    .yp-fade-enter, .yp-fade-leave-to{
        opacity: 0;
    }
    .yp-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    .yp-dialog-mask {
        background: rgba(0, 0, 0, .4);
    }
    .yp-dialog-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        border-radius: 2px;
        min-width: 30%;
    }
    .yp-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        width: 13px;
        height: 13px;
        text-align: center;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 13px;
        color: #a0a0a0;
    }
    .yp-dialog__header {
        padding: 20px 20px 10px;
    }
    .yp-dialog__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
    }
    .yp-dialog__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
    }
</style>