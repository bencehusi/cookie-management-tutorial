<template>
    <div
        @keyup.esc="close"
        tabindex="1"
        class="dialog__wrapper">
        <slot name="activator" :activate="activate" />
        <transition name="dialog">
            <div
                v-if="open"
                @click="close"
                class="dialog"
                :class="{ actions: $slots.actions }"
            >
                <div
                    @click.stop=""
                    class="dialog__card">
                    <div class="dialog__header">
                        <slot name="header" />
                        <div @click="close" class="dialog__close"></div>
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
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
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
    mounted () {
        console.log(this)
    },
    methods: {
        activate () {
            console.log('Taddaaaa')
            this.open = !this.open
        },
        close () {
            console.log('Bahhh')
            this.open = false
        }
    }
}
</script>