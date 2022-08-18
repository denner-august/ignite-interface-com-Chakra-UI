import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

export function Banner() {
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Flex
      h={500}
      paddingLeft={isLargerThan800 ? 0 : 40}
      justifyContent={isLargerThan800 ? "center" : undefined}
      alignItems={isLargerThan800 ? "center" : undefined}
      backgroundImage="/images/paises/europa.svg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Text
        color="white"
        fontSize={48}
        alignSelf={isLargerThan800 ? undefined : "end"}
        paddingBottom={isLargerThan800 ? 0 : 59}
      >
        Europa
      </Text>
    </Flex>
  );
}
