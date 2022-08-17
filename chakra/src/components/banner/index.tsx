import { Box, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
export function Banner() {
  const [isLargerThan945] = useMediaQuery("(max-width: 945px)");
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Box height={368.21}>
      <Box
        height="90%"
        backgroundImage="images/Background.svg"
        backgroundSize={"cover"}
        display="flex"
        alignItems="center"
        paddingLeft={isLargerThan700 ? 0 : 140}
        paddingRight={isLargerThan700 ? 0 : 140}
        justifyContent="space-around"
      >
        <Box textAlign={isLargerThan700 ? "center" : undefined}>
          <Text
            color="white"
            fontSize={40}
            width={isLargerThan700 ? "auto" : 426}
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            color="white"
            fontSize={20}
            width={isLargerThan700 ? "auto" : 524}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isLargerThan945 ? null : (
          <Image
            marginBottom={-130}
            src="/images/Airplane.svg"
            height={270.74}
            width={417.15}
            alt="avião"
          />
        )}
      </Box>
    </Box>
  );
}
