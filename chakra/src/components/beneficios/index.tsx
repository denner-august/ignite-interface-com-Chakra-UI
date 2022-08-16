import {
  Flex,
  Spacer,
  Text,
  Image,
  Box,
  Icon,
  Container,
  Center,
} from "@chakra-ui/react";
import classico from "../../../public/images/icons/classico.svg";
import moderno from "../../../public/images/icons/moderno.svg";
import predio from "../../../public/images/icons/predio.svg";
import vida_noturna from "../../../public/images/icons/vida_noturna.svg";
import word from "../../../public/images/icons/word.svg";

export function Beneficios() {
  const icons = [
    { src: vida_noturna, text: "vida noturna" },
    { src: predio, text: "práia" },
    { src: moderno, text: "moderno" },
    { src: classico, text: "clássico" },
    { src: word, text: "e mais..." },
  ];

  return (
    <Flex
      marginTop={80.79}
      height={145}
      justify="center"
      align="center"
      flexDir="column"
    >
      <Flex>
        {icons.map((icons) => {
          return (
            <Flex key={icons.text} margin={130} flexDir="column" align="center">
              <Image src={icons.src.src} height={85} width={85} alt="icon" />
              <Text fontSize={24}>{icons.text}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
