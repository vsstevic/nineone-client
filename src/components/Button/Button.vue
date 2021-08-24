<template>
  <button :class="classes"><slot /></button>
</template>

<script>
import { ref, computed } from 'vue'
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
    layout: {
      type: String,
      validator: (value) => {
        return Object.keys(styles.layouts).indexOf(value) !== -1
      },
      default: 'base',
    },
  },
  setup(props) {
    const classes = ref([])

    const layout = computed(() => {
      if (props.layout) {
        return styles['layouts'][props.layout]
      }

      if (styles.variants[props.variant]?.layout) {
        return styles['layouts'][styles.variants[props.variant]?.layout]
      }

      return null
    })

    Object.entries(styles.variants).forEach((variant) => {
      if (props.variant === variant[0]) {
        classes.value = [layout.value, variant[1]?.classes]
      }
    })

    return { classes }
  },
}
</script>
