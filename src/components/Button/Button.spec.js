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

  it('should be base size by default', () => {
    const component = mount(Button)

    expect(component.props('size')).toBe('base')
  })

  it('validates correct variants from style file', () => {
    const variants = Object.entries(styles.variants).map(
      (variant) => variant[0]
    )
    const validator = Button.props.variant.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })

  it('validates correct shapes from style file', () => {
    const variants = Object.entries(styles.shapes).map((variant) => variant[0])
    const validator = Button.props.shape.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })

  it('validates correct sizes from style file', () => {
    const variants = Object.entries(styles.sizes).map((variant) => variant[0])
    const validator = Button.props.size.validator

    variants.forEach((valid) => expect(validator(valid)).toBe(true))

    expect(validator('none')).toBe(false)
  })

  it('has loading state', () => {
    const component = mount(Button, { propsData: { loading: true } })

    expect(component.html()).toContain('svg')
  })
})
