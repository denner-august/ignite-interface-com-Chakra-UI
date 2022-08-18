import { Image, Icon, Flex, Center } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

type backpage = {
  back: boolean;
};

export function Header({ back = false }: backpage) {
  return (
    <Flex height={100} alignItems="center" justifyContent="center">
      {back ? (
        <NextLink href={"/"} passHref>
          <Icon as={ArrowBackIcon} fontSize={20} cursor="pointer" />
        </NextLink>
      ) : null}

      <Center w="90%">
        <Image src="/images/logo.svg" height={45.92} width={186.7} alt="logo" />
      </Center>
    </Flex>
  );
}
