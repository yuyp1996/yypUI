<template>
    <div
        class="yp-dialog"
        v-show="visible"
        :class="[
            {
                'yp-dialog-mask': mask
            }
        ]"
        @click="closeDialog"
    >
        <transition name="yp-slide">
            <div v-if="visible" class="yp-dialog-content" @click.stop="">

            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "YpDatePicker",
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
    .yp-slide-enter-active, .yp-slide-leave-active {
        transition: opacity, transform .5s;
    }
    .yp-slide-enter, .yp-slide-leave-to{
        opacity: 0;
        transform: translate(0, 100%);
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
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 300px;
    }
</style>