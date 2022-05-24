import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('test Loading', () => {
  test('should show loading spinner', () => {
    render(<Loading loading />)
    const loading = screen.getByTestId('loading-testid')
    expect(loading).toBeVisible()
  })

  test('should not show loading spinner', () => {
    render(<Loading />)
    const loading = screen.getByTestId('loading-testid')
    expect(loading).not.toBeVisible()
  })
})
