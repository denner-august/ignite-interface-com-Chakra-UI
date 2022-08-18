import {
  Flex,
  Text,
  Box,
  Image,
  Wrap,
  WrapItem,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";

type paises = {
  Image: string;
  Logo: string;
  Titulo: string;
  Subtitulo: string;
};

export function OutrosPaises() {
  const londresImage = "/images/cidades/londres/Foto.svg";
  const londresLogo = "/images/cidades/londres/londres_logo.svg";

  const parisImage = "/images/cidades/paris/Foto.svg";
  const parisLogo = "images/cidades/paris/paris_logo.svg";

  const romaImage = "/images/cidades/roma/Foto.svg";
  const romaLogo = "/images/cidades/roma/roma_logo.svg";

  const pragaImage = "/images/cidades/praga/foto.svg";
  const pragaLogo = "/images/cidades/praga/praga_logo.svg";

  const amsterdaImage = "/images/cidades/Amsterdã/Foto.svg";
  const amsterdaLogo = "/images/cidades/Amsterdã/amsterdã_Logo.svg";

  const paises = [
    {
      Image: londresImage,
      Logo: londresLogo,
      Titulo: "Londres",
      Subtitulo: "Reino Unido",
    },
    {
      Image: parisImage,
      Logo: parisLogo,
      Titulo: "Paris",
      Subtitulo: "França",
    },
    { Image: romaImage, Logo: romaLogo, Titulo: "Roma", Subtitulo: "Itália" },
    {
      Image: pragaImage,
      Logo: pragaLogo,
      Titulo: "Praga",
      Subtitulo: "República Tcheca",
    },
    {
      Image: amsterdaImage,
      Logo: amsterdaLogo,
      Titulo: "Amsterdã",
      Subtitulo: "Holanda",
    },
  ];

  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex flexDir="column" align={isLargerThan700 ? "center" : undefined}>
      <Text fontSize={36}>Cidades +100</Text>
      <Flex>
        <Wrap  justify={isLargerThan700 ? "center" : undefined}>
          {paises.map((paises: paises) => {
            return (
              <WrapItem key={paises.Titulo}>
                <Flex h={279} w={256} flexDir="column" margin={10}>
                  <Box background="pink" h="50%" w="100%">
                    <Image
                      src={paises.Image}
                      alt={paises.Subtitulo}
                      objectFit="cover"
                    />
                  </Box>
                  <Flex
                    background="#e3eeeb"
                    h="50%"
                    w="100%"
                    justify="space-evenly"
                    align="center"
                  >
                    <Flex
                      flexDir="column"
                      justifyContent="space-evenly"
                      h="100%"
                    >
                      <Text fontSize={20}>{paises.Titulo}</Text>
                      <Text fontSize={16} color="#999999">
                        {paises.Subtitulo}
                      </Text>
                    </Flex>

                    <Image
                      src={paises.Logo}
                      alt={paises.Subtitulo}
                      h={30}
                      w={30}
                    />
                  </Flex>
                </Flex>
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Flex>
  );
}
