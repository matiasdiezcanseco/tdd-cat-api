interface ICatDisplay {
  cat: {
    name: string
    url: string
    width: number
    height: number
  }
}

const CatDisplay: React.FC<ICatDisplay> = ({ cat }) => {
  return (
    <div className="border-[1px] border-gray-600 rounded-md overflow-hidden ">
      <h4
        className="p-2 text-lg text-center text-gray-200 bg-slate-600"
        data-testid="catname-testid"
      >
        {cat.name}
      </h4>
      <img src={cat.url} alt={cat.name} width={400} />
    </div>
  )
}

export default CatDisplay
