import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} style={{ width: "100%", height: "400px" }}
        initialCenter={{ lat: this.props.lats, lng: this.props.lngs }}
      >
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} position={{ lat: this.props.lats, lng: this.props.lngs }} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyB7tki2pMGrw1sbfdb-MvmU7SilSvMKOCw")
})(MapContainer)
