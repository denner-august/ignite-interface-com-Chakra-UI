import { Box, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      height={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="/images/logo.svg" height={45.92} width={186.7} alt="logo" />
    </Box>
  );
}
