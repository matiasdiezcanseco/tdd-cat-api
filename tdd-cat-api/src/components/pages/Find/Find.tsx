import { useState } from 'react'
import { getCatImageByBreedId } from '../../../services/CatApi/CatApi'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import CatDisplay from '../../molecules/CatDisplay/CatDisplay'
import CatList from '../../molecules/CatList/CatList'
import Layout from '../../templates/Layout/Layout'

const Find = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState<{
    name: any
    url: any
    height: any
    width: any
  } | null>(null)

  const handleApiCall = async () => {
    setLoading(true)
    const _cat = await getCatImageByBreedId(search)
    console.log(_cat)
    setCat(_cat)
    setLoading(false)
  }

  return (
    <Layout>
      <div className="flex justify-between p-2 space-y-2" data-testid="findpage-testid">
        <div className="space-y-2">
          <Input onChange={(e) => setSearch(e)} title="Buscar por id: " />
          <Button text="Buscar" onClick={handleApiCall} loading={loading} />
          {cat?.name && <CatDisplay cat={cat} />}
        </div>
        <div>
          <CatList />
        </div>
      </div>
    </Layout>
  )
}

export default Find
