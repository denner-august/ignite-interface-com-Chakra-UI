import { Box, Center, Icon } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";

export function Anuncio() {
  return (
    <Box fontSize={36} marginTop={40}>
      <Center>
        <Icon as={MinusIcon} w={300} h={0.3} color="black" background="black" />
      </Center>
      <Center marginTop={40}> Vamos nessa? </Center>
      <Center textAlign="center">Então escolha seu continente</Center>
    </Box>
  );
}
