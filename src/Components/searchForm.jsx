import React from 'react';

const searchForm = props => {
    return (
        <div className="container">
                <form onSubmit={props.getWeather}>
                    <div className="row" style={{marginTop:25, marginLeft:300}}>
                        <div className="col-md-3">
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter City"
                                autoComplete="off"
                            />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="text"
                                name="country"
                                placeholder="Enter Country"
                                autoComplete="off"
                            />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
            </form>
        </div>
      );
};

export default searchForm;