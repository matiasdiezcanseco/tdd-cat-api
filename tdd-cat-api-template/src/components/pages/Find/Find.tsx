import { useEffect, useState } from 'react'
import { getCatImageByBreedId } from '../../../services/CatApi/CatApi'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import CatDisplay from '../../molecules/CatDisplay/CatDisplay'
import CatList from '../../molecules/CatList/CatList'
import Layout from '../../templates/Layout/Layout'

const Find = () => {
  return (
    <Layout>
      <div className="flex justify-between p-2 space-y-2" data-testid="findpage-testid">
        <div className="space-y-2"></div>
        <div></div>
      </div>
    </Layout>
  )
}

export default Find
