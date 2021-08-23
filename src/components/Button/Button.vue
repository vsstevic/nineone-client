<template>
  <button :class="classes"><slot /></button>
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
  },
  setup(props) {
    const classes = ref([])

    Object.entries(styles.variants).forEach((variant) => {
      if (props.variant === variant[0]) {
        classes.value = [
          variant[1]?.layout ? styles['layouts'][variant[1]?.layout] : null,
          variant[1]?.classes,
        ]
      }
    })

    return { classes }
  },
}
</script>
