import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Mapa no está listo');
    if (!userLocation) throw new Error('No hay ubicación de usuario');
    // Fly To User Location
    map?.flyTo({
      zoom: 14,
      center: userLocation
    });
  }

  return (
    <Button
      onClick={onClick}
      bgColor='#61DAFB'
      border='1px solid rgb(90, 202, 233)'
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999
      }}>
      Mi Ubicación
    </Button>
  );
}