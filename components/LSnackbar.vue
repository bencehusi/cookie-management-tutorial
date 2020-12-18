<template>
    <div class="snackbar" :class="{success, error}">
        <transition name="snackbar" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <div class="snackbar__body" v-if="open">
                <div class="snackbar__message">
                    <span>{{ message }}</span>
                </div>
                <button class="button ghost snackbar__action" @click="open = false">Close</button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'LSnackbar',
    props: {
        message: {
            type: String,
            default: ''
        },
        success: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        timeout: {
            type: Number,
            default: 5000
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            countDown: null
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
            if (nv) {
                this.countDown = setTimeout(() => {
                    this.open = false
                    clearTimeout(this.countDown)
                }, this.timeout)
            }
        }
    }
}
</script>
