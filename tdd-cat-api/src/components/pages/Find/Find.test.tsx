import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { mockCat } from './__mocks__/mocks'
import Find from './Find'
import * as catApi from '../../../services/CatApi/CatApi'

// jest.mock('../../../services/CatApi/CatApi', () => {
//   return {
//     getCatImageByBreedId: () => mockCat as any,
//   }
// })

jest.mock('../../../services/CatApi/CatApi')
const mockCatApi = catApi as jest.Mocked<typeof catApi>

describe('test Find', () => {
  beforeEach(() => {
    mockCatApi.getCatImageByBreedId.mockResolvedValue(mockCat as any)
  })

  test('should show cat after api is called ', async () => {
    render(
      <BrowserRouter>
        <Find />
      </BrowserRouter>
    )
    const button = screen.getByRole('button')
    await userEvent.click(button)
    const catName = await screen.findByTestId('catname-testid')
    const catImage = await screen.findByRole('img')
    expect(catName).toBeVisible()
    expect(catImage).toBeVisible()
  })

  test('should not be loading after api call is finished', async () => {
    render(
      <BrowserRouter>
        <Find />
      </BrowserRouter>
    )
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(screen.queryByTestId('loading-testid')).toBeNull()
  })

  test('should show typed text', async () => {
    render(
      <BrowserRouter>
        <Find />
      </BrowserRouter>
    )
    const textbox = screen.getByRole('textbox')
    await userEvent.type(textbox, 'test')
    expect(textbox).toHaveValue('test')
  })

  test('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Find />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
