<template>
    <label class="input-field">
        <p class="input__label" v-if="label">{{ label }}</p>
        <select class="input__field input__select" :name="name" :id="name">
            <option
                v-for="(option, index) in items"
                :key="`${name}-${index}`"
                :value="trackedBy ? option[trackedBy] : option">
                {{ labelledBy ? option[labelledBy] : option }}
            </option>
        </select>
    </label>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: () => ([])
        },
        trackedBy: {
            type: String,
            default: null
        },
        labelledBy: {
            type: String,
            default: null
        }
    }
}
</script>