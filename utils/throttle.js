export const throttleFn = function (fn, wait = 50, ctx) {
    let lastCall = 0;
    return function (...params) {
        const now = new Date().getTime();
        if (now - lastCall < wait) return;
        lastCall = now;
        fn.apply(ctx, params)
    }
};