import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { PlacesProvider } from './context'
import { HomeScreen } from './screens'

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <ChakraProvider value={defaultSystem}>
        <HomeScreen />
      </ChakraProvider>
    </PlacesProvider>
  )
}

export default MapsApp