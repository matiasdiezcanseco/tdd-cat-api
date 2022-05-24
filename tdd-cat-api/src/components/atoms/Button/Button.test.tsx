import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('test Button', () => {
  let onClick = jest.fn()

  beforeEach(() => {
    onClick = jest.fn()
  })

  test('should display text', () => {
    render(<Button text="Test" onClick={onClick} />)
    expect(screen.getByText(/test/i)).toBeVisible()
  })

  test('should execute callback on click', async () => {
    render(<Button text="Test" onClick={onClick} />)
    expect(onClick).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByText(/test/i))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('should show loading', () => {
    render(<Button text="Test" onClick={onClick} loading />)
    expect(screen.getByTestId('loading-testid')).toBeVisible()
  })

  test('should match snapshot', () => {
    const { container } = render(<Button text="Test" onClick={onClick} />)
    expect(container).toMatchSnapshot()
  })
})
