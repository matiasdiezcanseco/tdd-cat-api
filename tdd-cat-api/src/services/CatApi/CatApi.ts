import axios from 'axios'

export const getCatImageByBreedId = async (id: string) => {
  try {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        breed_id: id,
        size: 1,
        limit: 1,
      },
    })
    const data = res.data
    return {
      name: data[0].breeds[0].name,
      url: data[0].url,
      height: data[0].height,
      width: data[0].width,
    }
  } catch (e) {
    return {
      name: '',
      url: '',
      height: 0,
      width: 0,
    }
  }
}
