import { Box, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box height={368.21}>
      <Box
        height="90%"
        backgroundImage="images/Background.svg"
        backgroundSize={"cover"}
        display="flex"
        alignItems="center"
        paddingLeft={140}
        paddingRight={140}
        justifyContent="space-around"
      >
        <Box>
          <Text color="white" fontSize={40} width={426}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text color="white" fontSize={20} width={524}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          marginBottom={-130}
          src="/images/Airplane.svg"
          height={270.74}
          width={417.15}
          alt="avião"
        />
      </Box>
    </Box>
  );
}
