export const StadisticCard = ({weather}) => {
  return (
    <section className="flex w-full mt-4 justify-evenly text-gray-800 dark:text-gray-50">
      <div
        className="dark:bg-slate-800 bg-slate-100
          w-2/3 h-auto rounded-xl mr-6 p-4
          flex flex-col shadow-lg justify-center"
      >
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Viento</p>
            <small className="text-sm text-slate-400">{weather.current.temp_c}</small>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Velocidad </span>
            <small className="text-sm text-slate-400">{weather.current.wind_kph}Km/h</small>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Presion</span>
            <small className="text-sm text-slate-400">{weather.current.pressure_in}</small>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Humedad</p>
            <small className="text-sm text-slate-400">{weather.current.humidity}</small>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Rafagas</span>
            <small className="text-sm text-slate-400">{weather.current.gust_kph} Km/h</small>
          </div>
        </div>
      </div>
    </section>
  )
}
