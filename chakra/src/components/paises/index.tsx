import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import europa from "../../../public/images/paises/europa.svg";
import londres from "../../../public/images/paises/londres.jpg";
import paris from "../../../public/images/paises/paris.jpg";
import roma from "../../../public/images/paises/roma.jpg";

export function Paises() {
  const paises = [
    { src: europa, text: "Europa" },
    { src: londres, text: "londres" },
    { src: paris, text: "paris" },
    { src: roma, text: "roma" },
  ];

  return (
    <Center h={450} w="100%" marginTop={52}>
      <Box h={450} w={"100%"} borderRadius={5}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          navigation={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          className="mySwiper"
          pagination={true}
        >
          {paises.map((paises) => {
            return (
              <SwiperSlide key={paises.text}>
                <Flex
                  backgroundImage={paises.src.src}
                  h={450}
                  w={"100%"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  justify="center"
                >
                  <Center>
                    <Text color="white" fontSize={70}>
                      {paises.text}
                    </Text>
                  </Center>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Center>
  );
}
