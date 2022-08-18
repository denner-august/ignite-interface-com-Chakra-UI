import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type childrens = {
  children: ReactNode;
};

export function BoxContent({ children }: childrens) {
  return (
    <Flex h="auto" w="90%" margin="0 auto" flexDir="column" padding="0 5%">
      {children}
    </Flex>
  );
}
