import React, { Component } from 'react';
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

export default (props)=> {
	return(
		<GoogleMapLoader
			containerElement={<div style={{height:'100%'}}/>}
			googleMapElement={
				<GoogleMap defaultZoom={12} defaultCenter={{lat:props.lat,lng:props.lon}}/>
			}
		/>
	);
}
