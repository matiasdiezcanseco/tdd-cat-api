import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockUseNavigate,
}))

describe('test Header', () => {
  test('should navigate to Home', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(mockUseNavigate).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByText('Home'))
    expect(mockUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockUseNavigate).toHaveBeenCalledWith('/')
  })
  test('should navigate to Find', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(mockUseNavigate).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByText('Buscar'))
    expect(mockUseNavigate).toHaveBeenCalledTimes(1)
    expect(mockUseNavigate).toHaveBeenCalledWith('/find')
  })
  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
