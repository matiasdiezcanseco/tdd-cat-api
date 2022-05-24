import axios from 'axios'
import { catByBreedId } from './__mocks__/mocks'
import { getCatImageByBreedId } from './CatApi'
jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('test getCatImageByBreedId', () => {
  test('should get cat object ', async () => {
    mockAxios.get.mockResolvedValue({ data: catByBreedId })
    const catObj = await getCatImageByBreedId('catId')
    expect(catObj).toEqual({
      name: 'Abyssinian',
      url: 'https://cdn2.thecatapi.com/images/itfFA4NWS.jpg',
      height: 914,
      width: 1280,
    })
  })

  test('should handle error', async () => {
    mockAxios.get.mockImplementation(() => {
      throw new Error('')
    })
    const catObj = await getCatImageByBreedId('catId')
    expect(catObj).toEqual({
      name: '',
      url: '',
      height: 0,
      width: 0,
    })
  })
})
