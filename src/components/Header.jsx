import viteLogo from "/vite.svg"
import { useState } from "react"

export const Header = ({ handleSearch }) => {
  const [search, setSearch] = useState("")

  return (
    <nav className="flex dark:bg-slate-800 bg-slate-100 w-full h-14 rounded-lg mt-4 shadow-lg">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <img src={viteLogo} alt="Vite Logo" className="w-8 h-8 ml-2" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-50 ml-2">
            Buscador de clima
          </span>
        </div>
        <div className="flex items-center">
          <input
            className="rounded-xl dark:bg-slate-700 h-10 text-gray-800 dark:text-gray-50 
              font-bold border-transparent text-xl p-2 border border-gray-300
              focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
            type="text"
            placeholder="Paris, London"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="h-10 rounded-lg bg-blue-700 text-white p-2 ml-4 font-bold text-sm justify-center hover:bg-blue-600 px-4"
            onClick={() => handleSearch(search)}
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  )
}
