import React from 'react';
import { Fragment } from 'react';

import { formatDate, formatTime } from '../../functions'; 

export default class WeatherList extends React.Component {
	render() {
		const {city, results} = this.props;
		return (
			<Fragment>
				<h2>{city}</h2>
				<div className="all-item-forest results">
				{					
					results.map((result, i) => {
						return (
							<div className="date" key={i}>
								<h3>{formatDate(result.name)}</h3>
								<ul className="row"> 
									{
									result.weathers.map((itemWeather, i) =>
										<li key= {i}>
											<div><strong>{formatTime(itemWeather.dt_txt.split(' ')[1])}</strong></div> 
											<img src={`http://openweathermap.org/img/w/${itemWeather.weather[0].icon}.png`} alt=""/>
											<div>
												<div className="min">Min: {Math.round(itemWeather.main.temp_max)}</div>
												<div className="max">Max: {Math.round(itemWeather.main.temp_min)}</div>
											</div>
										</li>
									)}
								</ul>								
							</div>	
						)
					})
				}
				</div>
			</Fragment>
		);
	}
}