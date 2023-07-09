import "./App.css"

import { Header } from "./components/Header"
import { LocationCard } from "./components/LocationCard"
import { StadisticCard } from "./components/StadisticCard"
import { useWeather } from "./hooks/useWeather"

function App() {
  const { weather, error, loading, handleSearch} = useWeather()

  return (
    <main className="container mx-auto flex flex-col">
      <Header
        handleSearch={handleSearch}
      />

      {loading && (
        <p className="text-xl font-bold text-gray-800 dark:text-gray-50 mt-8 text-center">
          Cargando...
        </p>
      )}
      {error && (
        <p className="text-xl font-bold text-gray-800 dark:text-gray-50 mt-8 text-center">
          {error}
        </p>
      )}
      {weather && (
        <>
          <p className="text-xl font-bold text-gray-800 dark:text-gray-50 mt-8">
            Resultados de la busqueda
          </p>
          <LocationCard weather={weather} />
          <StadisticCard weather={weather} />
        </>
      )}
      {!loading && !error && !weather && (
        <p className="text-xl font-bold text-gray-800 dark:text-gray-50 mt-8 text-center">
          Ingresa una ciudad para buscar el clima
        </p>
      )}
    </main>
  )
}

export default App
