/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useLayoutEffect, useRef } from 'react'
import { PlacesContext } from '../context'
import { Loading } from './Loading';
// import { Map } from 'mapbox-gl';
import { Map } from 'maplibre-gl';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext)
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      new Map({
        container: mapDiv.current!,
        // style: 'mapbox://styles/mapbox/streets-v12',
        // style: 'https://demotiles.maplibre.org/style.json',
        style: 'https://api.maptiler.com/maps/bright-v2/style.json?key=io1g2b3ETuxAmzgI6ydF',
        center: userLocation,
        zoom: 14
      });
    }
  }, [isLoading])

  if (isLoading) return <Loading />;

  return (
    <div ref={mapDiv} style={{
      backgroundColor: 'red',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0
    }} />
  )
}