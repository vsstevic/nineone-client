import { defineComponent } from 'vue'
import Button from './Button.vue'
import styles from './Button.styles.json'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    default: {
      control: 'text',
      defaultValue: 'Button Label',
    },
    variant: {
      control: {
        type: 'radio',
        options: Object.keys(styles.variants),
        defaultValue: 'primary',
      },
    },
    shape: {
      control: {
        type: 'radio',
        options: Object.keys(styles.shapes),
        defaultValue: 'rounded',
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.keys(styles.sizes),
        defaultValue: 'base',
      },
    },
    loading: {
      boolean: {},
    },
  },
}

export const Default = (args) =>
  defineComponent({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  })

export const Small = Default.bind({})
Small.args = { size: 'small', variant: 'primary', shape: 'rounded' }

export const Compact = Default.bind({})
Compact.args = {
  size: 'compact',
  variant: 'primary',
  shape: 'rounded',
  loading: false,
}

export const Danger = Default.bind({})
Danger.args = {
  size: 'base',
  variant: 'danger',
  shape: 'rounded',
  loading: false,
}
