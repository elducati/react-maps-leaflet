import React from 'react';
import L from 'leaflet';
import {
    MapContainer, TileLayer, Marker, Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import LocationMarker from './components/LocationMarker';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
const App = ()=> {  
  return (
    <div className="App">
      <MapContainer center={[-1.285790, 36.820030]} zoom={13} scrollWheelZoom={true} style={{ height: "100vh" }} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default App;
