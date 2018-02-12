import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrawGraph from '../components/DrawGraph';
class WeatherList extends Component {
	constructor(props){
		super(props);
	}
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(unit=>unit.main.temp);
		const pressures = cityData.list.map(unit=>unit.main.pressure);
		const humidityTable = cityData.list.map(unit=>unit.main.humidity);
		// const {lat,lon} = cityData.city.coord ;
		// console.log(lat,lon);
		return (
			<tr key={ name }>
				<td>{name}</td>
				<td>
					<DrawGraph table={temps} color="red" units="K"/>		
				</td>
				<td>
					<DrawGraph table={pressures} color="blue" units="hPa"/>		
				</td>
				<td>
					<DrawGraph table={humidityTable} color="green" units="%"/>		
				</td>
			</tr>
		);
	}
	render(){
		return(
			<table className="table">
				<thead className="table__head">
					<tr>
						<th>City</th>
						<th>Temperature(K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody className="table__body">
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps ({weather}){
	return {weather};
};

export default connect (mapStateToProps)(WeatherList);