<template>
    <div
            @mouseenter.stop="handleMouseEnter"
            @mouseleave.stop="handleMouseLeave">
        <div
                class="yp-carousel__container"
                :style="{ height: height }">
            <transition
                    v-if="arrowDisplay"
                    name="carousel-arrow-left">
                <throttle :time="1000" events="click">
                    <button
                            type="button"
                            v-show="(arrow === 'always' || 'hover') && (loop || activeIndex > 0)"
                            @mouseenter="handleButtonEnter('left')"
                            @mouseleave="handleButtonLeave"
                            @click.stop="setActiveItem(activeIndex - 1)"
                            class="el-carousel__arrow el-carousel__arrow--left">
                        <i class="el-icon-arrow-left"></i>
                    </button>
                </throttle>

            </transition>
            <transition
                    v-if="arrowDisplay"
                    name="carousel-arrow-right">
                <button
                        type="button"
                        v-show="(arrow === 'always' || 'hover') && (loop || activeIndex < items.length - 1)"
                        @mouseenter="handleButtonEnter('right')"
                        @mouseleave="handleButtonLeave"
                        @click.stop="setActiveItem(activeIndex + 1)"
                        class="el-carousel__arrow el-carousel__arrow--right">
                    <i class="el-icon-arrow-right"></i>
                </button>
            </transition>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YpCarousel",
        data() {
            return {
                items: [],
                activeIndex: -1,
                containerWidth: 0,
                timer: null,
                hover: false
            };
        },
        props: {
            height: String,
            initialIndex: {
                type: Number,
                default: 0
            }, // 起始位置
            loop: {
                type: Boolean,
                default: true
            }, // 是否循环
            arrow: {
                type: String,
                default: 'hover'
            }, // 切换箭头的显示时机	always/hover/never	hover
            autoplay: {
                type: Boolean,
                default: true
            }, // 是否自动播放
            interval: {
                type: Number,
                default: 3000
            }, // 自动播放延迟
            direction: {
                type: String,
                default: 'horizontal',
                validator(val) {
                    return ['horizontal', 'vertical'].indexOf(val) !== -1;
                }
            }
        },
        computed: {
            arrowDisplay() {
                return this.arrow !== 'never' && this.direction !== 'vertical';
            },
        },
        watch: {
            items(val) {
                if (val.length > 0) this.setActiveItem(this.initialIndex);
            },
            activeIndex(val, oldVal) {
                this.resetItemPosition(oldVal);
                if (oldVal > -1) {
                    this.$emit('change', val, oldVal);
                }
            },
            autoplay(val) {
                val ? this.startTimer() : this.pauseTimer();
            },
            loop() {
                this.setActiveItem(this.activeIndex);
            }
        },
        methods: {
            handleMouseEnter() {
                this.hover = true;
                this.pauseTimer();
            },

            handleMouseLeave() {
                this.hover = false;
                this.startTimer();
            },

            itemInStage(item, index) {
                const length = this.items.length;
                if (index === length - 1 && item.inStage && this.items[0].active ||
                    (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
                    return 'left';
                } else if (index === 0 && item.inStage && this.items[length - 1].active ||
                    (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
                    return 'right';
                }
                return false;
            },

            handleButtonEnter(arrow) {
                if (this.direction === 'vertical') return;
                this.items.forEach((item, index) => {
                    if (arrow === this.itemInStage(item, index)) {
                        item.hover = true;
                    }
                });
            },

            handleButtonLeave() {
                if (this.direction === 'vertical') return;
                this.items.forEach(item => {
                    item.hover = false;
                });
            },

            updateItems() {
                this.items = this.$children.filter(child => child.$options.name === 'YpCarouselItem');
            },

            resetItemPosition(oldIndex) {
                this.items.forEach((item, index) => {
                    item.translateItem(index, this.activeIndex, oldIndex);
                });
            },

            playSlides() {
                if (this.activeIndex < this.items.length - 1) {
                    this.activeIndex++;
                } else if (this.loop) {
                    this.activeIndex = 0;
                }
            },

            pauseTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },

            startTimer() {
                if (this.interval <= 0 || !this.autoplay || this.timer) return;
                this.timer = setInterval(this.playSlides, this.interval);
            },

            setActiveItem(index) {
                if (typeof index === 'string') {
                    const filteredItems = this.items.filter(item => item.name === index);
                    if (filteredItems.length > 0) {
                        index = this.items.indexOf(filteredItems[0]);
                    }
                }
                index = Number(index);
                if (isNaN(index) || index !== Math.floor(index)) {
                    console.warn('[Element Warn][Carousel]index must be an integer.');
                    return;
                }
                let length = this.items.length;
                const oldIndex = this.activeIndex;
                if (index < 0) {
                    this.activeIndex = this.loop ? length - 1 : 0;
                } else if (index >= length) {
                    this.activeIndex = this.loop ? 0 : length - 1;
                } else {
                    this.activeIndex = index;
                }
                if (oldIndex === this.activeIndex) {
                    this.resetItemPosition(oldIndex);
                }
            }
        },
        created() {
        },
        mounted() {
            this.updateItems();
            this.$nextTick(() => {
                if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
                    this.activeIndex = this.initialIndex;
                }
                this.startTimer();
            });
        },
        beforeDestroy() {
            this.pauseTimer();
        }
    }
</script>

<style scoped lang="scss">
    .yp-carousel {
        width: 100%;
    }
    .yp-carousel__container {
        position: relative;
        text-align: center;
        overflow: hidden;
    }
</style>