import { useState } from "react"

const API_KEY = "YOUR_API_KEY"
const API_URL = "https://weatherapi-com.p.rapidapi.com/current.json"

export const useWeather = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = (search) => {
    setLoading(true)
    setWeather(null)
    setError(null)
    const headers = {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    }

    fetch(`${API_URL}?q=${search}`, { headers })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.error && data.error.code === 1006) {
          setError(`No se encontraron resultados para tu busqueda de ${search}`)
        } else {
          setWeather(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    weather,
    loading,
    error,
    handleSearch,
    setLoading,
    setError,
    setWeather,
  }
}
