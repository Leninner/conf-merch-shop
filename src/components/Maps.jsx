import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Maps = ({ data, loading }) => {
  const style = {
    width: '100%',
    height: '55vh',
    borderRadius: '10px',
  };

  return (
    <>
      {loading ? (
        <div className='text-2xl font-bold text-indigo-500 text-red'>Cargando...</div>
      ) : (
        <MapContainer center={data} zoom={13} style={style}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={data} />
        </MapContainer>
      )}
    </>
  );
};
