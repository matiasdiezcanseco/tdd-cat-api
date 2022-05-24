import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

describe('test Layout', () => {
  test('should render children', () => {
    render(
      <BrowserRouter>
        <Layout>children</Layout>
      </BrowserRouter>
    )
    expect(screen.getByText('children')).toBeVisible()
  })
})
