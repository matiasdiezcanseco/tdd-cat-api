import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'
describe('test Input', () => {
  let onChange = jest.fn()
  beforeAll(() => {
    onChange = jest.fn()
    jest.clearAllMocks()
  })

  test('should show text value', async () => {
    render(<Input onChange={onChange} />)
    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'test')
    expect(textbox).toHaveValue('test')
  })

  test('should call onChange with correct value', async () => {
    render(<Input onChange={onChange} />)
    const textbox = screen.getByRole('textbox')
    expect(onChange).toHaveBeenCalledTimes(0)
    await userEvent.type(textbox, 'test')
    expect(onChange).toHaveBeenCalledTimes(4)
    expect(onChange).toHaveBeenCalledWith('test')
  })

  test('should show title', () => {
    render(<Input onChange={onChange} title="title" />)
    expect(screen.getByText('title')).toBeVisible()
  })

  test('should match snapshot', () => {
    const { container } = render(<Input onChange={onChange} />)
    expect(container).toMatchSnapshot()
  })
})
