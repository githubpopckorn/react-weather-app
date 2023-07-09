export const LocationCard = ({ weather }) => {
  return (
    <section className="flex w-full mt-4 justify-evenly text-gray-800 dark:text-gray-50">
      <div
        className="dark:bg-slate-800 bg-slate-100 
          w-2/3 h-auto rounded-xl mr-6 p-4
          flex flex-col shadow-lg justify-center"
      >
        <p className="text-2xl font-bold tracking-wide"> {weather.location.name} - {weather.location.country} </p>
        <p className="text-xl">
          <strong>Hora local:</strong> <small>{weather.location.localtime}</small>
        </p>
        <p className="text-xl">
          <strong>Region:</strong> <small>{weather.location.region}</small>
        </p>
        <p className="text-xl">
          <strong>Latitud:</strong> <small>{weather.location.lat}</small> -{" "}
          <strong>Longitud:</strong> <small>{weather.location.lon}</small>
        </p>
      </div>
      <div className="flex flex-col dark:bg-slate-800 bg-slate-100 w-2/3 h-auto rounded-xl p-4 shadow-lg">
        <p className="text-2xl font-bold tracking-wide text-center">
          Partly cloudy
        </p>
        <img
          src={weather.current.condition.icon}
          alt="Weather icon"
          className="w-24 h-24 mx-auto mt-2"
        />
        <span className="text-xl font-bold tracking-wide text-center">
          {weather.current.temp_c}°C
        </span>
      </div>
    </section>
  )
}
