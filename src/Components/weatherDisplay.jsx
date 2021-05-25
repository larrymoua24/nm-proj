import React from 'react';

const Weather= props => {
    return (
        <div className="container">
            <div className="cards">
                <h1>
                    {props.city}, {props.country}
                </h1>
                <h5 className= "py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-2">
                    {props.temp}&deg;
                </h1>
                <h1>
                    {props.forecast}
                </h1>
            </div>
        </div>
      );
};

export default Weather;