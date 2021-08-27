<template>
  <button class="inline-flex items-center justify-center" :class="classes">
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      :class="[
        { 'mr-3 -ml-1': size === 'base' || size === 'compact' },
        { 'mr-2': size === 'small' },
        { 'text-white': variant !== 'secondary' && variant !== 'warning' },
        { 'text-teal-400': variant === 'secondary' },
        { 'text-yellow-700': variant === 'warning' },
      ]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="2"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </button>
</template>

<script>
import { ref } from 'vue'
import styles from './Button.styles.json'

export default {
  props: {
    variant: {
      type: String,
      validator: (value) => {
        return Object.keys(styles.variants).indexOf(value) !== -1
      },
      default: 'primary',
    },
    shape: {
      type: String,
      validator: (value) => {
        return Object.keys(styles.shapes).indexOf(value) !== -1
      },
      default: 'rounded',
      required: false,
    },
    size: {
      type: String,
      validator: (value) => {
        return Object.keys(styles.sizes).indexOf(value) !== -1
      },
      default: 'base',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = ref([])

    if (props.size) {
      classes.value.push(styles['sizes'][props.size])
    }

    Object.entries(styles.variants).forEach((variant) => {
      if (props.variant === variant[0]) {
        classes.value.push(variant[1])
      }
    })

    if (props.shape) {
      classes.value.push(styles['shapes'][props.shape])
    }

    if (styles.animation) {
      classes.value.push(styles.animation)
    }

    return { classes }
  },
}
</script>
