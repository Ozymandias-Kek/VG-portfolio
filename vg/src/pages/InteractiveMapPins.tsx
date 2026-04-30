import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Gumamit tayo ng direct link para sa marker icons para iwas error sa Vite build
const pinIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const InteractiveMapPins = () => {
  // Mga coordinates ng opisina/locations base sa Plus Codes mo
  const locations = [
    { name: "Biñan", address: "83PH+47P Biñan, Laguna", coords: [14.3312, 121.0827] as [number, number] },
    { name: "Calamba", address: "55W6+XX9, Manila S Rd, Calamba", coords: [14.2081, 121.1554] as [number, number] },
    { name: "Sta. Cruz", address: "7CG8+JX2, Pedro Guevara Ave, Santa Cruz", coords: [14.2811, 121.4116] as [number, number] }
  ];

  return (
    <MapContainer 
      center={[14.27, 121.25]} // Gitna ng Laguna para kita lahat ng pins
      zoom={10} 
      // Tinanggal ang borderRadius para pumantay sa gilid nang saktong-sakto
      style={{ height: '100%', width: '100%', zIndex: 0 }}
    >
      {/* Pinalitan ang URL dito para lumabas ang tunay at normal na kulay ng mapa */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Loop para ilagay yung 3 pins sa mapa */}
      {locations.map((loc, index) => (
        <Marker key={index} position={loc.coords} icon={pinIcon}>
          <Popup>
            <strong style={{ color: '#0f3863', fontSize: '1.1rem' }}>{loc.name}</strong> <br />
            <span style={{ fontSize: '0.9rem', color: '#4a4a4a' }}>{loc.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};