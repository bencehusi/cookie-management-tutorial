<template>
    <label
        :for="name"
        class="input-control clickable toggle"
        :class="{ active: value }"
    >
        <input
            class="input hidden"
            type="checkbox"
            :id="name"
            :name="name"
            :checked="value"
            @change.stop="toggle"
        >
        <span class="toggle__body">
            <div class="toggle__switch"></div>
            <div class="toggle__label">{{ label }}</div>
        </span>
    </label>
</template>

<script>
export default {
    name: 'LToggle',
    props: {
        value: {
            type: Boolean,
            default: null
        },
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        checked: {
            get () {
                return this.value
            },
            set (newValue) {
                this.$emit('input', newValue)
            }
        },
        label () {
            return this.value ? 'ON' : 'OFF'
        }
    },
    methods: {
        toggle () {
            this.checked = !this.checked
        }
    }
}
</script>