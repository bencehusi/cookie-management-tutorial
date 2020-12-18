<template>
    <div
        @keyup.esc="dismiss"
        tabindex="1"
        class="dialog__wrapper">
        <slot name="activator" :activate="activate" />
        <transition
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutDown"
            mode="out-in"
        >
            <div
                v-if="open"
                class="dialog animate__animated"
                :class="{ actions: $slots.actions, snackbar, animate__headShake: dismissAttention }"
                @click="dismiss"
            >
                <div
                    @click.stop=""
                    class="dialog__card">
                    <div class="dialog__header">
                        <slot name="header" />
                        <div
                            v-if="dismissable"
                            @click="dismiss"
                            class="dialog__close">
                        </div>
                    </div>
                    <div class="dialog__body">
                        <slot />
                    </div>
                    <div class="dialog__actions">
                        <slot name="actions" />
                    </div>
                </div>
            </div>
        </transition>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            mode="out-in"
        >
            <div
                v-if="open && !snackbar"
                @click="close"
                class="dialog__backdrop">
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        snackbar: {
            type: Boolean,
            default: false
        },
        timeout: {
            type: [Number, String],
            default: null
        },
        dismissable: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            timing: null,
            dismissAttention: false,
            dismissAnimationTimeout: null
        }
    },
    computed: {
        open: {
            get () {
                return this.value
            },
            set (newValue) {
                this.$emit('input', newValue)
            }
        }
    },
    watch: {
        open (nv, ov) {
            if (nv && this.timeout) this.setTimer()
        }
    },
    mounted () {
        if (this.open && this.timeout) this.setTimer()
    },
    methods: {
        activate () {
            this.open = !this.open
        },
        close () {
            this.open = false
        },
        dismiss () {
            if (this.dismissable) {
                this.open = false
            } else {
                this.dismissAttention = true
                this.dismissAnimationTimeout = setTimeout(() => {
                    this.dismissAttention = false
                    clearTimeout(this.dismissAnimationTimeout)
                }, 1000)
            }
        },
        setTimer () {
            this.timing = setTimeout(() => {
                this.close()
                clearTimeout(this.timeout)
            }, this.timeout)
        }
    },
    beforeDestroy () {
        if (this.timing) {
            clearTimeout(this.timeout)
        }
    }
}
</script>