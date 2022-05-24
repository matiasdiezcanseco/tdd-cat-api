import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'

describe('test Routing in App', () => {
  let history = createMemoryHistory()

  beforeEach(() => {
    history = createMemoryHistory()
  })

  test('should land in Home page ', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId('homepage-testid')).toBeInTheDocument()
  })

  test('should land in Find page ', async () => {
    history.push('/find')
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId('findpage-testid')).toBeInTheDocument()
  })
})
