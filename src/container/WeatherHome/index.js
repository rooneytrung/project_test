import React from 'react';
import { Fragment } from 'react';

import WeatherList from '../WeatherList';
import Button from '../../components/Button';

export default class WeatherHome extends React.Component {
	constructor() {
		super();

		this.state = {
			city: "",
			list: [],
			resultList: [],
		}

		this.inputSearch = React.createRef(); 
	}

	listWeather = (list) => {	
		const dates = list
			.map((item, i) => {
				return item.dt_txt.split(" ")[0];
			})
			.filter((item, i, currArr) => {
				return currArr.indexOf(item) === i;
			});

		let sortedResults = [];
		for(let theDate of dates) {
			sortedResults.push({
				name: theDate,
				weathers: []
			});
		}
		for(let item of list) {
			let itemDate = item.dt_txt.split(" ")[0]; 
			for(let result of sortedResults) {
				if(result.name === itemDate) {
					result.weathers.push(item);
				}
			}
		}

		return sortedResults;
	}

	searchCityWeather = () => {
		const city = this.inputSearch.current.value.trim();

		fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=855767bf765a4f0d7155ea99a9223328`, 
			{ method: 'GET'})
			.then(response => response.json())
			.then(json => {
				if(json.cod === "200") {
					const city = json.city;
					this.setState(prevState => {
						return {
							city: city.name,
							resultList: this.listWeather(json.list)
						}
					});
				}				
				return false;
			})
			.catch(error => {
				console.log('error', error);
			});
		this.inputSearch.current.value="";
	}

	render() {
		return (
			<Fragment>
				<div className="search-container">
					<label>Search city:</label>
					<div className="form">
						<input type="text" 
							placeholder="London"
							ref={this.inputSearch}
							onKeyUp={this.validateInput} />
								
						<Button 
							clickHandler={this.searchCityWeather}
							btnCopy="Search" />
					</div>
				</div>
				<WeatherList city={this.state.city} results={this.state.resultList}/>
			</Fragment>
		);
	}
}