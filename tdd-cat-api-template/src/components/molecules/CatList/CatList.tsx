const CatList = () => {
  const cats = [
    'Abyssinian: abys',
    'American Bobtail: abob',
    'American Curl: acur',
    'Australian Mist: abys',
    'Bengal: beng',
    'Bombay: bomb',
    'Chartreux: char',
    'Cheetoh: chee',
    'Cymric: cymr',
  ]
  return (
    <div className="py-2 px-4 border-[1px] space-y-2 border-gray-600 rounded-md">
      <h1 className="text-2xl text-center">Lista de ids</h1>
      <ul className="space-y-1">
        {cats.map((cat) => (
          <li className="" key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CatList
