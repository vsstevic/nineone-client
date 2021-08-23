import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import styles from './Button.styles.json'

describe('Button', () => {
  it('renders correctly', () => {
    const component = mount(Button)

    expect(component.vm).toBeTruthy()
  })

  it('should be primary by default', () => {
    const component = mount(Button)

    expect(component.props('variant')).toBe('primary')
  })

  it('validates correct variants from style file', () => {
    const variants = Object.entries(styles.variants).map(
      (variant) => variant[0]
    )
    const validator = Button.props.variant.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })
})
