import Button from './Button.vue'
import styles from './Button.styles.json'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(styles.variants),
      },
    },
  },
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Testing</Button>',
})

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
}
