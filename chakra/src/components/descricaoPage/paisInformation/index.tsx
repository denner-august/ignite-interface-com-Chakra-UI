import {
  Box,
  Text,
  Container,
  Flex,
  Image,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";

export function Informations() {
  const [isLargerThan920] = useMediaQuery("(max-width: 920px)");

  return (
    <Flex
      flexDir={isLargerThan920 ? "column" : "row"}
      justify="space-between"
      align="center"
      h="auto"
      minH={211}
      // margin={"0px 10px"}
    >
      <Text w={isLargerThan920 ? "90%" : "40%"} lineHeight={8} textAlign="left">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Image
        src="/images/paises/informations.svg"
        alt="informação do pais"
        w="auto"
      />
    </Flex>
  );
}
