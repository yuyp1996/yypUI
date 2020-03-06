<script>
    const throttle = function (fn, wait = 50, ctx) {
        let lastCall = 0;
        return function (...params) {
            const now = new Date().getTime();
            if (now - lastCall < wait) return;
            lastCall = now;
            fn.apply(ctx, params)
        }
    };
    export default {
        name: 'throttle',
        abstract: true,
        props: {
            time: Number,
            events: String,
        },
        created() {
            this.eventKeys = this.events.split(',');
            this.originMap = {};
            this.throttledMap = {}
        },
        // render函数直接返回slot的vnode，避免外层添加包裹元素
        render() {
            const vnode = this.$slots.default[0];
            this.eventKeys.forEach((key) => {
                const target = vnode.data.on[key];
                if (target === this.originMap[key] && this.throttledMap[key]) {
                    vnode.data.on[key] = this.throttledMap[key]
                } else if (target) {
                    // 将原本的事件处理函数替换成throttle节流后的处理函数
                    this.originMap[key] = target;
                    this.throttledMap[key] = throttle(target, this.time, vnode);
                    vnode.data.on[key] = this.throttledMap[key]
                }
            });
            return vnode
        }
    }
</script>

<style scoped lang="scss">
    .yp-button {
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
    .yp-button--primary {
        color: white;
        background: #5db6fa;
        border-color: #5db6fa;
    }
    // 成功
    .yp-button--success {
        color: white;
        background: #44fa7a;
        border-color: #44fa7a;
    }
    // 警告
    .yp-button--warning {
        color: white;
        background: #fad02d;
        border-color: #fad02d;
    }
    // 危险
    .yp-button--danger {
        color: white;
        background: #fa371b;
        border-color: #fa371b;
    }
    .is-round {
        border-radius: 20px;
        padding: 12px 23px;
    }
    .yp-button [class*=yp-icon-]+span {
        margin-left: 5px;
    }
    .yp-button[disabled] {
        cursor: default;
        background: #c9c9c9;
        border-color: #c9c9c9;
        color: white;
    }
</style>