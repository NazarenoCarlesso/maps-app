import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { MapProvider, PlacesProvider } from './context'
import { HomeScreen } from './screens'
import './styles.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <ChakraProvider value={defaultSystem}>
        <MapProvider>
          <HomeScreen />
        </MapProvider>
      </ChakraProvider>
    </PlacesProvider>
  )
}

export default MapsApp