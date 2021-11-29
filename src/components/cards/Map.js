import React, { Component } from 'react';
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '27%'  ,
  height: '150px '  
};

export class Mapg extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={12}
        initialCenter={
          {
            lat: 35.77046202391152,
            lng: -5.829236893306681
          }
          
        }
        centerAroundCurrentLocation={false}
          visibl= {true}
      >
           <Marker
          onClick={this.onMarkerClick}
          name={'135 Boulevard Anfa Val Fleury Al, Tangier 90000'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwGO9hRzjtwV_ksivLPVmA6zTVj52zcj8'
})(Mapg);