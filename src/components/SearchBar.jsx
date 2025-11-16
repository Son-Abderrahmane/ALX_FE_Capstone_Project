import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <div className="flex-1 relative">
        <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white text-gray-800 placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:scale-105 active:scale-95"
      >
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;