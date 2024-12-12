import { Box, Spinner, Text } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Box shadow="md" w="200px" p="5" m="5" borderRadius="1.3rem" textAlign="center" bg="rgba(0, 0, 0, 0.02)">
      <Spinner color="orange" size="xl" borderWidth="3px" animationDuration="0.8s" />
      <Text textStyle="md" color="orange">Espere por favor</Text>
      <Text textStyle="lg" color="orange">Localizando...</Text>
    </Box>
  )
}