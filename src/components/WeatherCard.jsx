import React from "react";
import { WiHumidity, WiStrongWind, WiBarometer, WiThermometer } from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherCard = ({ weather, isPopular = false }) => {
  const tempColor = weather.main.temp > 25 ? "text-orange-500" : weather.main.temp > 15 ? "text-yellow-500" : "text-blue-500";
  
  return (
    <div className={`${isPopular ? 'bg-gradient-to-br from-white to-blue-50' : ''} ${isPopular ? 'p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 min-h-[400px] flex flex-col justify-between' : 'mt-6'}`}>
      <div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaMapMarkerAlt className={`${isPopular ? 'text-xl' : ''} text-blue-500`} />
          <h2 className={`${isPopular ? 'text-2xl' : 'text-2xl'} font-bold text-gray-800`}>
            {weather.name}, {weather.sys.country}
          </h2>
        </div>
        
        <div className="flex justify-center items-center gap-6 mt-6">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className={`${isPopular ? 'w-28 h-28' : 'w-24 h-24'} drop-shadow-lg`}
          />
          <div>
            <p className={`${isPopular ? 'text-5xl' : 'text-5xl'} font-bold ${tempColor}`}>
              {Math.round(weather.main.temp)}°C
            </p>
          </div>
        </div>
        
        <p className={`text-center text-gray-600 capitalize mt-3 font-medium ${isPopular ? 'text-lg' : ''}`}>
          {weather.weather[0].description}
        </p>
      </div>
      
      <div className={`grid grid-cols-2 gap-4 ${isPopular ? 'mt-8' : 'mt-6'}`}>
        <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100 hover:bg-blue-100 transition-colors">
          <WiHumidity className={`${isPopular ? 'text-4xl' : 'text-3xl'} text-blue-500 mx-auto mb-2`} />
          <p className={`${isPopular ? 'text-sm' : 'text-xs'} text-gray-600 font-medium`}>Humidity</p>
          <p className={`${isPopular ? 'text-xl' : 'text-lg'} font-bold text-blue-700`}>{weather.main.humidity}%</p>
        </div>
        <div className="bg-green-50 rounded-xl p-5 text-center border border-green-100 hover:bg-green-100 transition-colors">
          <WiStrongWind className={`${isPopular ? 'text-4xl' : 'text-3xl'} text-green-500 mx-auto mb-2`} />
          <p className={`${isPopular ? 'text-sm' : 'text-xs'} text-gray-600 font-medium`}>Wind</p>
          <p className={`${isPopular ? 'text-xl' : 'text-lg'} font-bold text-green-700`}>{weather.wind.speed} m/s</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-5 text-center border border-purple-100 hover:bg-purple-100 transition-colors">
          <WiBarometer className={`${isPopular ? 'text-4xl' : 'text-3xl'} text-purple-500 mx-auto mb-2`} />
          <p className={`${isPopular ? 'text-sm' : 'text-xs'} text-gray-600 font-medium`}>Pressure</p>
          <p className={`${isPopular ? 'text-xl' : 'text-lg'} font-bold text-purple-700`}>{weather.main.pressure} hPa</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-5 text-center border border-orange-100 hover:bg-orange-100 transition-colors">
          <WiThermometer className={`${isPopular ? 'text-4xl' : 'text-3xl'} text-orange-500 mx-auto mb-2`} />
          <p className={`${isPopular ? 'text-sm' : 'text-xs'} text-gray-600 font-medium`}>Feels like</p>
          <p className={`${isPopular ? 'text-xl' : 'text-lg'} font-bold text-orange-700`}>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
