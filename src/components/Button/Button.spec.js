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

  it('should be base layout by default', () => {
    const component = mount(Button)

    expect(component.props('layout')).toBe('base')
  })

  it('overrides file specified layout if prop is passed', () => {
    styles.layouts['testLayout'] = []

    const component = mount(Button, { propsData: { layout: 'testLayout' } })

    expect(component.props('layout')).toBe('testLayout')
  })

  it('validates correct variants from style file', () => {
    const variants = Object.entries(styles.variants).map(
      (variant) => variant[0]
    )
    const validator = Button.props.variant.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })

  it('validates correct layouts from style file', () => {
    const variants = Object.entries(styles.layouts).map((variant) => variant[0])
    const validator = Button.props.layout.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })
})
