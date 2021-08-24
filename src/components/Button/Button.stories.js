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
    layout: {
      control: {
        type: 'select',
        options: Object.keys(styles.layouts),
        defaultValue: 'base',
      },
    },
  },
}

export const Default = (args) =>
  defineComponent({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  })
