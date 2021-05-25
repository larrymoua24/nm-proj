import React from 'react';

import './App.css';

import Weather from './Components/weatherDisplay';
import SearchForm from './Components/searchForm';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather_API_Key = "3d7813046e363bb66cc74ef8b40b732c"

class App extends React.Component {
    constructor(){
        super();

        this.state={
          city: undefined,
          country: undefined,
          temp: undefined,
          forecast: undefined
        };
    }
    colletWeatherData = async (value) => {

      value.preventDefault();

      const country = value.target.elements.country.value;
      const city = value.target.elements.city.value;
  
      if (country && city) {
        const getWeatherApi = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Weather_API_Key}`
        );
        const response = await getWeatherApi.json();

        this.setState({
          city: response.name,
          country: response.sys.country,
          temp: response.main.temp.toFixed(),
          forecast: response.weather[0].description
        })
        
        console.log(response);
      }else{
        const getWeatherApi = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=milwaukee,us&appid=${Weather_API_Key}`
        );

        const response = await getWeatherApi.json();

        this.setState({
          city: response.name,
          country: response.sys.country,
          temp: response.main.temp.toFixed(),
          forecast: response.weather[0].description
        })
        
        console.log(response);
      }
    };

  render() {

    return (
      <div className="App">
       <Weather 
          city={this.state.city} 
          country={this.state.country} 
          temp= {this.state.temp}
          forecast={this.state.forecast}
        />
        <SearchForm getWeather={this.colletWeatherData()}/>
      </div>
    );
  };
};

export default App;
