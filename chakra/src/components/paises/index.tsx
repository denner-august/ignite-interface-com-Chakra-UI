import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Center, Image } from "@chakra-ui/react";

import europa from "../../../public/images/paises/europa.svg";
import londres from "../../../public/images/paises/londres.svg";
import paris from "../../../public/images/paises/paris.svg";
import roma from "../../../public/images/paises/roma.svg";

export function Paises() {
  const paises = [
    { src: europa, text: "Europa" },
    { src: londres, text: "londres" },
    { src: paris, text: "paris" },
    { src: roma, text: "roma" },
  ];

  return (
    <Center h={450} w="100%" marginBottom="1%" marginTop={52}>
      <Box background="red" h={450} w={1240} borderRadius={5}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          pagination={true}
        >
          {paises.map((paises) => {
            return (
              <SwiperSlide key={paises.text}>
                <Image
                  src={paises.src.src}
                  alt={paises.text}
                  h={450}
                  w={1240}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Center>
  );
}
