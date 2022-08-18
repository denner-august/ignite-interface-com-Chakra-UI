import { Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import classico from "../../../public/images/icons/classico.svg";
import moderno from "../../../public/images/icons/moderno.svg";
import predio from "../../../public/images/icons/predio.svg";
import vida_noturna from "../../../public/images/icons/vida_noturna.svg";
import word from "../../../public/images/icons/word.svg";

import { useMediaQuery } from "@chakra-ui/react";

export function Beneficios() {
  const icons = [
    { src: vida_noturna, text: "vida noturna" },
    { src: predio, text: "práia" },
    { src: moderno, text: "moderno" },
    { src: classico, text: "clássico" },
    { src: word, text: "e mais..." },
  ];

  const [isLargerThan750] = useMediaQuery("(max-width: 750px)");

  return (
    <Flex
      marginTop={80.79}
      height={isLargerThan750 ? "auto" : 145}
      justify="center"
      align="center"
      flexDir="column"
    >
      <Flex w="100%" justify="space-evenly">
        {isLargerThan750 ? (
          <Wrap spacing="30px" justify="center">
            {icons.map((icons) => {
              return (
                <WrapItem key={icons.text} flexDir="column">
                  <Image
                    src={icons.src.src}
                    height={85}
                    width={85}
                    alt="icon"
                  />
                  <Text fontSize={24}>{icons.text}</Text>
                </WrapItem>
              );
            })}
          </Wrap>
        ) : (
          icons.map((icons) => {
            return (
              <Flex key={icons.text} flexDir="column" align="center">
                <Image src={icons.src.src} height={85} width={85} alt="icon" />
                <Text fontSize={24}>{icons.text}</Text>
              </Flex>
            );
          })
        )}
      </Flex>
    </Flex>
  );
}
