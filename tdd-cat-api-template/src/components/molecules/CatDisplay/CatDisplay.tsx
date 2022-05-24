interface ICatDisplay {
  cat: {
    name: string
    url: string
    width: number
    height: number
  }
}

const CatDisplay: React.FC<ICatDisplay> = () => {
  return <div className="border-[1px] border-gray-600 rounded-md overflow-hidden "></div>
}

export default CatDisplay
